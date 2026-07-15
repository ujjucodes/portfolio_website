import { motion } from "framer-motion";
import { CONTACT } from "../data";

export default function Contact() {
  const rows = [
    { k: "Email", v: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { k: "Phone", v: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
    { k: "LinkedIn", v: "/in/ujjwal-ds", href: CONTACT.linkedin },
    { k: "GitHub", v: "@ujjwal", href: CONTACT.github },
  ];

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <p className="eyebrow">Contact</p>

        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.19, 1, 0.22, 1] }}
        >
          <div>
            <h2 className="contact-title">
              Let's find what the <em>data is hiding</em>
            </h2>
            <p className="contact-note">
              Graduate data analyst roles, dashboard work, or a dataset you think has a story in it —
              I read every message. Based in {CONTACT.location}.
            </p>
          </div>

          <div className="contact-list">
            {rows.map((r, i) => (
              <motion.a
                className="contact-row"
                key={r.k}
                href={r.href}
                target={r.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
              >
                <span className="contact-k">{r.k}</span>
                <span className="contact-v">{r.v} ↗</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <footer className="foot">
          <span>© {new Date().getFullYear()} Ujjwal Sachdeva</span>
          <span>Built with React · Vite · Framer Motion</span>
        </footer>
      </div>
    </section>
  );
}