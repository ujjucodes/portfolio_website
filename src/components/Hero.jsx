import { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT } from "../data";
import heroPhoto from "../assets/hero.png";

const rise = {
  hidden: { y: "110%" },
  show: (i) => ({
    y: 0,
    transition: { duration: 0.9, delay: 0.15 + i * 0.11, ease: [0.19, 1, 0.22, 1] },
  }),
};

// left-side copy slides in from the left
const fromLeft = {
  hidden: { opacity: 0, x: -32 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.6 + i * 0.1, ease: [0.19, 1, 0.22, 1] },
  }),
};

// right-side readout panel slides in from the right
const fromRight = {
  hidden: { opacity: 0, x: 32 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.6 + i * 0.1, ease: [0.19, 1, 0.22, 1] },
  }),
};

// accent circle drops in from above the portrait
const circleDrop = {
  hidden: { opacity: 0, y: "-60%" },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, delay: 0.15, ease: [0.19, 1, 0.22, 1] } },
};

// portrait rises up from below the circle
const photoRise = {
  hidden: { opacity: 0, y: "45%" },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, delay: 0.35, ease: [0.19, 1, 0.22, 1] } },
};

function Portrait() {
  const [failed, setFailed] = useState(false);
  return (
    <motion.div className="hero-portrait" initial="hidden" animate="show">
      <motion.div className="portrait-circle" variants={circleDrop} />
      <motion.div className="portrait-photo" variants={photoRise}>
        {!failed ? (
          <img src={heroPhoto} alt="Ujjwal Sachdeva" onError={() => setFailed(true)} draggable={false} />
        ) : (
          <div className="fallback">photo pending</div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="wrap hero-grid">
        <div>
          <motion.p className="hero-hi" variants={fromLeft} custom={-2} initial="hidden" animate="show">
            Melbourne, VIC — <b>open to graduate roles</b>
          </motion.p>

          <h1 className="hero-title">
            {["Ujjwal", "Sachdeva"].map((line, i) => (
              <span className="line-mask" key={line}>
                <motion.span style={{ display: "block" }} variants={rise} custom={i} initial="hidden" animate="show">
                  {line}
                </motion.span>
              </span>
            ))}
            <span className="line-mask">
              <motion.em style={{ display: "block" }} variants={rise} custom={2} initial="hidden" animate="show">
                Data analyst
              </motion.em>
            </span>
          </h1>

          <motion.p className="hero-sub" variants={fromLeft} custom={0} initial="hidden" animate="show">
            I work in <strong>Python, SQL and Power BI</strong> — predictive modelling and visualisation
            used to detect risk, profile behaviour, and turn messy datasets into insight someone can
            actually defend in a room.
          </motion.p>

          <motion.div className="hero-cta" variants={fromLeft} custom={1} initial="hidden" animate="show">
            <a className="btn btn-primary" href="#dashboards">See the dashboards</a>
            <a className="btn" href={`mailto:${CONTACT.email}`}>Get in touch</a>
          </motion.div>
        </div>

        <Portrait />

        <motion.aside className="readout" variants={fromRight} custom={2} initial="hidden" animate="show">
          {[
            ["Currently", "Exploring opportunities in the Data/Automation space"],
            ["Recent", "IT Analyst, Baby Bunting"],
            ["Studying", "BCompSci (Data Science), Deakin"],
            ["WAM", "75"],
            ["Certified", "PL-300 · Databricks · Mixpanel"],
          ].map(([k, v]) => (
            <div className="readout-row" key={k}>
              <div className="readout-k">{k}</div>
              <div className="readout-v">{v}</div>
            </div>
          ))}
        </motion.aside>
      </div>

      <motion.div
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <i />
        Scroll
      </motion.div>
    </section>
  );
}