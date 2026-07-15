import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { EXPERIENCE } from "../data";

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 });

  return (
    <section className="section" id="experience">
      <div className="wrap">
        <p className="eyebrow">Experience</p>
        <h2 className="h2">Where I've done the work</h2>
        <p className="lede">
          Four roles, one throughline: find the thing in the data nobody has looked at yet, then make it
          legible to the people who have to act on it.
        </p>

        <div className="tl" ref={ref}>
          <div className="tl-axis" />
          <motion.div className="tl-fill" style={{ scaleY }} />

          {EXPERIENCE.map((item, i) => (
            <motion.article
              className="tl-item"
              key={item.org}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.65, delay: i * 0.06, ease: [0.19, 1, 0.22, 1] }}
            >
              <span className="tl-dot" />
              <p className="tl-period">{item.period}</p>
              <h3 className="tl-org">{item.org}</h3>
              <p className="tl-role">
                {item.role} <span>· {item.place}</span>
              </p>
              <ul className="tl-body">
                {item.body.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="tl-tags">
                {item.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}