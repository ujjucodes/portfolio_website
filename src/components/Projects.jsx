import { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../data";

function Cover({ src, alt }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div className="fallback" />
  ) : (
    <img src={src} alt={alt} onError={() => setFailed(true)} loading="lazy" />
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <p className="eyebrow">Projects</p>
        <h2 className="h2">Things I've built</h2>
        <p className="lede">Each one started as a question I couldn't answer by eyeballing a spreadsheet.</p>

        <div className="proj-grid">
          {PROJECTS.map((p, i) => (
            <motion.a
              className="proj"
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.65, delay: (i % 2) * 0.08, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="proj-shot">
                <Cover src={p.img} alt={p.title} />
                <span className="proj-kind">{p.kind}</span>
              </div>
              <div className="proj-body">
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-stack">{p.stack}</p>
                <p className="proj-text">{p.body}</p>
                <span className="proj-link">
                  View on GitHub <i>↗</i>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}