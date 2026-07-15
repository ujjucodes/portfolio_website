import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DASHBOARDS } from "../data";

function Shot({ src, alt }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="dash-shot">
      {!failed ? (
        <img src={src} alt={alt} onError={() => setFailed(true)} draggable={false} />
      ) : (
        <div className="fallback">screenshot pending</div>
      )}
    </div>
  );
}

export default function Dashboards() {
  const section = useRef(null);
  const viewport = useRef(null);
  const rail = useRef(null);
  const [maxDrag, setMaxDrag] = useState(0);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(null);
  const [active, setActive] = useState(false);
  const indexRef = useRef(index);
  const wheelLocked = useRef(false);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    const measure = () => {
      if (!viewport.current || !rail.current) return;
      setMaxDrag(Math.max(0, rail.current.scrollWidth - viewport.current.offsetWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // engage only once the first dashboard card is straddling the vertical middle of the screen —
  // and only after it's held there for a beat, so the first card doesn't slide away the instant it arrives
  useEffect(() => {
    let timer = null;
    const check = () => {
      const card = rail.current?.firstElementChild;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const mid = window.innerHeight / 2;
      const engaged = rect.top <= mid && rect.bottom >= mid;
      if (engaged) {
        if (!timer) timer = setTimeout(() => setActive(true), 250);
      } else {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        setActive(false);
      }
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  // while engaged, vertical wheel scroll pages through the dashboards instead of the page —
  // scrolling further in the same direction once at the first/last card falls through to normal page scroll
  useEffect(() => {
    const onWheel = (e) => {
      if (!active || open) return;
      const dir = e.deltaY > 0 ? 1 : -1;
      const atEnd = dir === 1 && indexRef.current >= DASHBOARDS.length - 1;
      const atStart = dir === -1 && indexRef.current <= 0;
      if (atEnd || atStart) return;

      e.preventDefault();
      if (wheelLocked.current) return;
      wheelLocked.current = true;
      setIndex((i) => Math.min(Math.max(i + dir, 0), DASHBOARDS.length - 1));
      setTimeout(() => {
        wheelLocked.current = false;
      }, 650);
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [active, open]);

  const step = () => {
    const card = rail.current?.firstChild;
    return card ? card.offsetWidth + 22 : 400;
  };
  const move = (dir) => {
    const next = Math.min(Math.max(index + dir, 0), DASHBOARDS.length - 1);
    setIndex(next);
  };
  const x = -Math.min(index * step(), maxDrag);

  return (
    <section className="section" id="dashboards" ref={section}>
      <div className="wrap">
        <div className="carousel-head">
          <div>
            <p className="eyebrow">Dashboards</p>
            <h2 className="h2">Built to be read, not admired</h2>
          </div>
          <div className="arrows">
            <button className="arrow" onClick={() => move(-1)} disabled={index === 0} aria-label="Previous dashboard">←</button>
            <button
              className="arrow"
              onClick={() => move(1)}
              disabled={index === DASHBOARDS.length - 1}
              aria-label="Next dashboard"
            >→</button>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="rail-viewport" ref={viewport}>
          <motion.div
            className="rail"
            ref={rail}
            drag="x"
            dragConstraints={{ left: -maxDrag, right: 0 }}
            dragElastic={0.08}
            animate={{ x }}
            transition={{ type: "spring", stiffness: 130, damping: 22 }}
          >
            {DASHBOARDS.map((d, i) => (
              <motion.button
                className="dash-card"
                key={d.title}
                onClick={() => setOpen(d)}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.19, 1, 0.22, 1] }}
                whileHover={{ y: -5 }}
              >
                <Shot src={d.img} alt={d.title} />
                <div className="dash-meta">
                  <div className="dash-top">
                    <h3 className="dash-title">{d.title}</h3>
                    <span className="dash-metric">{d.metric}</span>
                  </div>
                  <p className="dash-stack">{d.stack}</p>
                  <p className="dash-blurb">{d.blurb}</p>
                  <span className="dash-open">View full dashboard ↗</span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
        <p className="hint">Scroll, drag, or use the arrows</p>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="lb"
            onClick={() => setOpen(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className="lb-close" onClick={() => setOpen(null)}>close ✕</button>
            <motion.div
              className="lb-inner"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.94, y: 18 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 10 }}
              transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
            >
              <img src={open.img} alt={open.title} />
              <div className="lb-bar">
                <div>
                  <h3 className="dash-title">{open.title}</h3>
                  <p className="dash-stack">{open.stack}</p>
                </div>
                <span className="dash-metric">{open.metric}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}