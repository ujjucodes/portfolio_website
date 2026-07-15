import { motion } from "framer-motion";
import { TOOLS_ROW_1, TOOLS_ROW_2 } from "../data";

function Chip({ tool }) {
  const src =
    tool.icon || (tool.slug ? `https://cdn.simpleicons.org/${tool.slug}/${tool.hex}` : null);

  return (
    <div className="chip">
      {src ? (
        <img src={src} alt="" loading="lazy" />
      ) : (
        <span className="mark">{tool.mark}</span>
      )}
      {tool.name}
    </div>
  );
}

function Row({ tools, direction }) {
  // duplicated once so the -50% translate loops seamlessly
  const loop = [...tools, ...tools];
  return (
    <div className="marquee">
      <div className={`marquee-track ${direction}`}>
        {loop.map((tool, i) => (
          <Chip tool={tool} key={`${tool.name}-${i}`} />
        ))}
      </div>
    </div>
  );
}

export default function Toolkit() {
  return (
    <section className="section" id="toolkit">
      <div className="wrap">
        <p className="eyebrow">Toolkit</p>
        <h2 className="h2">What I reach for</h2>
        <p className="lede">
          Languages and libraries on top, the platforms I ship into underneath.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
      >
        <Row tools={TOOLS_ROW_1} direction="left" />
        <div style={{ height: 12 }} />
        <Row tools={TOOLS_ROW_2} direction="right" />
      </motion.div>
    </section>
  );
}