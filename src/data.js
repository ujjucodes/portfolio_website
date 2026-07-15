export const NAV = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "dashboards", label: "Dashboards" },
  { id: "toolkit", label: "Toolkit" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const EXPERIENCE = [
  {
    period: "Mar 2026 — Jun 2026",
    org: "InnovAIte — Capstone",
    role: "Data Engineer",
    place: "Melbourne, VIC",
    body: [
      "Led product liaison for LLM development and engineered an ETL pipeline that grew the training dataset by 30%.",
      "Configured AWS for warehousing synthetic data.",
      "Built a benchmarking framework against competitor APIs.",
      "Used the system to fully fine-tune a locally hosted Qwen model to ChatGPT-level performance.",
    ],
    tags: ["Data Cleaning","LLM Fine-tuning","AWS", "Qwen", "Benchmarking"],
  },
  {
    period: "Feb 2026 — May 2026",
    org: "Baby Bunting Pty Ltd",
    role: "IT Analyst Intern",
    place: "Melbourne, VIC",
    body: [
      "Ran a data collection and sustainability project, analysing equipment usage and visually reporting the outcomes to stakeholders.",
      "Streamlined four business processes across imaging, software and resource management.",
      "Traced and resolved a recurring website caching defect across 80+ AU-NZ stores, then documented a reusable resolution guide.",
    ],
    tags: ["Networking resolution","Data analysis", "ITIL frameworks", "Documentation"],
  },
  {
    period: "Jan 2025 — Dec 2026",
    org: "Australian Computer Society",
    role: "EPC — Sponsorships Officer",
    place: "Melbourne, VIC",
    body: [
      "Built pitch decks tailored to different audiences and laid the foundation of frameworks for the sponsorships department.",
      "Represent Victorian undergraduates on the EPC decision-making team for corporate strategy and sponsorships.",
      "Led cross-chapter partnerships and networking events, won the Wired Words debate on data privacy strategy, and run the Victoria Youth Ambassador program.",
    ],
    tags: ["Strategy", "Partnerships", "Stakeholder Management"],
  },
  {
    period: "Oct 2024 — Jun 2025",
    org: "Deakin Software Engineering Club",
    role: "President",
    place: "Melbourne, VIC",
    body: [
      "Founded the club newsletter to lift engagement and partnered with other university clubs on tech workshops and events, growing club revenue by 23%.",
      "Organised student nights to keep participation high.",
    ],
    tags: ["Leadership", "Community"],
  },
];
// Drop your screenshots in /public/dashboards/
export const DASHBOARDS = [
  {
    title: "Credit Risk Analysis",
    stack: "Power BI · DAX · SQL",
    blurb:
      "Loan disbursement and portfolio exposure across ~45K records, ranking the risk factors that drive approval and default.",
    img: "/src/assets/credit_risk.png",
    metric: "45K records",
  },
  {
    title: "Retail Engagement",
    stack: "GA4 · Power BI · SQL",
    blurb:
      "A/B tests on homepage variants and promotional offers, tracked through to session duration and returning-customer behaviour.",
    img: "/src/assets/walmart_report.png",
    metric: "+20% session time",
  },
  {
    title: "Fraud Detection",
    stack: "Python · Scikit-learn · Power BI",
    blurb:
      "Flagged transactions surfaced for investigation, with the model's driving features exposed alongside each case.",
    img: "/src/assets/fraud_analysis.png",
    metric: "Anomaly scoring",
  },
];

// Two marquee rows, scrolling opposite directions.
// slug = simpleicons.org slug, hex = brand colour. `mark` renders a letter instead.
export const TOOLS_ROW_1 = [
  { name: "Python", slug: "python", hex: "3776AB" },
  { name: "SQL", mark: "S" },
  { name: "R", slug: "r", hex: "276DC3" },
  { name: "Pandas", slug: "pandas", hex: "150458" },
  { name: "NumPy", slug: "numpy", hex: "4DABCF" },
  { name: "scikit-learn", slug: "scikitlearn", hex: "F7931E" },
  { name: "SciPy", slug: "scipy", hex: "8CAAE6" },
  { name: "Matplotlib", mark: "M" },
  { name: "Seaborn", mark: "S" },
];

export const TOOLS_ROW_2 = [
  { name: "Power BI", icon: "https://api.iconify.design/logos:microsoft-power-bi.svg" },
  { name: "Tableau", icon: "https://api.iconify.design/logos:tableau-icon.svg" },
  { name: "Databricks", slug: "databricks", hex: "FF3621" },
  { name: "Snowflake", slug: "snowflake", hex: "29B5E8" },
  { name: "MySQL", slug: "mysql", hex: "4479A1" },
  { name: "MongoDB", slug: "mongodb", hex: "47A248" },
  { name: "Google Cloud", slug: "googlecloud", hex: "4285F4" },
  { name: "Google Analytics", slug: "googleanalytics", hex: "E37400" },
  { name: "n8n", slug: "n8n", hex: "EA4B71" },
  { name: "Excel", icon: "https://api.iconify.design/vscode-icons:file-type-excel.svg" },
];

export const PROJECTS = [
  {
    title: "Medical Information Assistant",
    kind: "Retrieval-augmented generation",
    stack: "Python · LangChain · Vector DB · LLM",
    body: "A RAG assistant that answers patient and clinician questions from trusted medical literature and cites its sources. Retrieves over MIMIC-IV clinical notes, PubMed abstracts and MedQuAD, using tuned chunking and reranking to reach 85-95% retrieval accuracy on domain-specific queries.",
    img: "/src/assets/rag_img.jpg",
    href: "https://github.com/ujjucodes/RAG_Chunking_Strategies--research_paper.git",
  },
  {
    title: "Image Classification ML Model",
    kind: "Deep learning",
    stack: "Python · TensorFlow · CNN · AWS",
    body: "A sustainability project that classifies waste into recyclable and organic streams using a CNN. Built an ETL and data-cleaning workflow to prepare the image set, applied data augmentation to expand training coverage, and fine-tuned the model to lift classification accuracy, with training data warehoused on AWS.",
    img: "/src/assets/ml_image.jpg",
    href: "https://github.com/ujjucodes/Waste-Product-classification--ML-model-.git",
  },
  {
    title: "Realtime Data ETL Pipeline",
    kind: "Data engineering",
    stack: "Python · Kafka · Databricks",
    body: "A realtime streaming pipeline built with Kafka and Databricks that ingests live supermarket sales events and surfaces them on a rolling dashboard. Handles high-throughput transaction streams, transforms them in-flight, and updates sales and inventory metrics the moment they change so stock movement is visible as it happens.",
    img: "/src/assets/databricks_etl.png",
    href: "https://github.com/",
  },
];

export const CONTACT = {
  email: "work.ujjwalds@gmail.com",
  phone: "0452 194 434",
  linkedin: "https://www.linkedin.com/in/ujjwal-ds/",
  github: "https://github.com/ujjucodes",
  location: "Melbourne, VIC",
};