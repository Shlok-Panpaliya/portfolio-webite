export interface Project {
  id: string;
  title: string;
  shortLabel: string;
  icon: string;
  company: string;
  period: string;
  role: string;
  priority?: "P1" | "P2";
  tags: string[];
  summary: string;
  impact: { metric: string; label: string }[];
  details: string[];
  techStack: string[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

export const profile = {
  name: "Shlok Panpaliya",
  title: "Software Engineer (Platform + Full Stack)",
  tagline: "Platform Engineering · ETL · Postgres Graph Modeling · React · Node.js · GRC",
  email: "shlokp762@gmail.com",
  phone: "+91 9359431950",
  linkedin: "https://www.linkedin.com/in/shlokp762",
  github: "https://github.com/shlokp762",
  location: "India · Remote-friendly",
  yearsExperience: "4+",
  summary: `Software Engineer with 4+ years of experience architecting distributed systems and queue-driven ETL pipelines. At Scrut Automation (GRC), I have build foundational backend systems that power enterprise modules like Access Reviews, Vulnerability Management, Automated Evidence Collection, and Asset Management — backed by PostgreSQL graph data modeling for deep-hierarchy traversal and audit-ready reporting.`,
  stats: [
    { value: "40+", label: "Integrations Powered" },
    { value: "$250k+", label: "Enterprise Deals Unblocked" },
    { value: "90%", label: "Faster Upload Pipeline" },
  ],
  aboutExtended: [
    "Full-stack engineer at Scrut Automation — building compliance automation for SOC 2 / ISO 27001 and enterprise GRC workflows.",
    "Architected the DataSync foundation: queue-driven ETL with a dependency-graph execution model syncing data across 40+ third‑party integrations into a Postgres entity graph (entity/relationship tables).",
    "Built Access Reviews infrastructure: centralized identities across apps, one-click verification via API sync, and audit-ready reporting — unblocked $100k+ in enterprise deals.",
    "Shipped Automated Evidence Collection (Scrut Monitor) pipelines: scheduled evidence pulls + provenance so audit artifacts stay authentic and reproducible.",
    "Designed vulnerability ingestion + SLA tracking by syncing threat data from AWS Inspector, Snyk, and GitHub Dependabot to prioritize critical CVEs.",
    "Owner of Scrut Automation Chrome Extension — Manifest V3 popup/service worker/content scripts with autonomous CI/CD to Chrome Web Store.",
    "Previously founding engineer at PropReturns — built a bidirectional Sheets ↔ MongoDB sync pipeline cutting property upload time by 90%."
  ],
};

export const leadership = {
  title: "Engineering Highlights",
  summary:
    "What I build is interviewable: systems design (queues + DAG), data modeling (Postgres graphs), integration hardening (rate limits, retries), and product impact (audit automation and revenue enablement).",
  highlights: [
    {
      area: "Product Ownership",
      points: [
        "Designed the DataSync foundation used by Access Reviews, Vulnerability Management, Evidence Collection, Monitors, and Asset Management — 40+ integrations, multi-tenant, queue-driven ETL.",
        "Built Access Review (UAR) infrastructure replacing spreadsheet reviews with real-time API sync, one-click verification, and audit-ready exports — unblocked $100k+ enterprise deals.",
        "Owned the Scrut Automation Chrome Extension end-to-end: MV3 architecture, questionnaire scanning, AI autofill UX, and autonomous Chrome Web Store deployment.",
      ],
    },
    {
      area: "Architecture & Scale",
      points: [
        "Modeled compliance data as a Postgres-backed entity graph (entity + relationship tables) with cycle-safe edges and recursive cascade delete — no dedicated graph DB overhead.",
        "Built queue-driven ETL with dependency-graph execution so steps run wave-by-wave based on prerequisites, keeping syncs deterministic and restartable.",
        "Hardened integration ingestion with pagination, rate-limit handling, and backpressure patterns for high-volume GitHub/AWS datasets.",
      ],
    },
    {
      area: "DevOps & Delivery",
      points: [
        "Fully autonomous Chrome Web Store pipeline — build, version bump, zip, upload, and publish on git push.",
        "Shipped Auditor workflow migration (A‑Lign): remapped controls/artifacts and preserved compatibility with existing audit processes during transition.",
      ],
    },
  ],
};

export const skills = {
  languages: ["Python", "JavaScript", "TypeScript", "C++"],
  backend: [
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "RabbitMQ",
    "AWS",
  ],
  frontend: [
    "React",
    "Next.js",
    "Tailwind CSS",
  ],
  architecture: ["Distributed Systems", "Queue-driven ETL", "Multi-tenant Systems", "API Rate Limiting", "Postgres Graph Modeling"],
  devops: ["Docker", "GitHub Actions", "ECR", "ECS", "Sentry"],
};

export const education = [
  {
    degree: "BTech, Computer Science (7.86/10)",
    school: "Indian Institute of Information Technology, Nagpur",
    location: "Nagpur, India",
    year: "2018 – 2022",
  },
];

export const experience: Experience[] = [
  {
    company: "Scrut Automation",
    role: "Software Development Engineer (Full Stack)",
    location: "Remote",
    period: "March 2024 – Present",
    highlights: [
      "Architected the foundational DataSync engine powering 40+ integrations and multiple GRC modules (Monitors, Access Reviews, Vulnerability Management, Evidence Collection, Asset Management).",
      "Built a queue-driven ETL pipeline with dependency-graph execution and a Postgres graph model (entity/relationship tables) for deep-hierarchy traversal.",
      "Engineered Access Reviews (UAR): centralized identities across apps, real-time API sync + one-click verification, and audit-ready reporting — unblocked $100k+ enterprise contracts.",
      "Built Automated Evidence Collection (Scrut Monitor): scheduled evidence pulls with provenance/source-of-truth metadata to reduce manual audit workload.",
      "Designed Vulnerability Management ingestion + SLA tracking by syncing findings from AWS Inspector, Snyk, and GitHub Dependabot to prioritize critical CVEs.",
      "Owned Scrut Automation Chrome Extension: MV3 architecture, cross-site questionnaire parsing + export engine, streaming UX, and autonomous CI/CD to Chrome Web Store.",
    ],
  },
  {
    company: "PropReturns",
    role: "Founding Full Stack Engineer",
    location: "India",
    period: "June 2022 – March 2024",
    highlights: [
      "Reduced property upload time by 90% with a Python + gspread sync pipeline between Google Sheets and MongoDB.",
      "Built AWS image processing engine (Jimp + Sharp) — automated resizing into five formats with watermarking for web and mobile.",
      "Implemented RBAC with Node.js and OAuth 2.0; scaled to granular user-level permissions for financial data.",
    ],
  },
  {
    company: "Siemens Healthineers",
    role: "SDE Intern",
    location: "India",
    period: "August 2021 – December 2021",
    highlights: [
      "Built a component converting AI results from DICOM format to human-readable FHIR JSON resources for Clinical Decision Support Systems.",
    ],
  },
  {
    company: "Seekify",
    role: "SDE Intern (Frontend)",
    location: "India",
    period: "February 2021 – May 2021",
    highlights: [
      "Developed React.js frontend features for the Seekify platform.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "scrut-extension",
    title: "Scrut Automation — Chrome Extension",
    shortLabel: "Chrome Ext",
    icon: "tooling",
    company: "Scrut Automation",
    period: "2024 – Present",
    role: "Owner / Full-stack",
    priority: "P1",
    tags: ["Chrome Extension", "Manifest V3", "React", "AI/ML", "CI/CD", "GRC"],
    summary:
      "A Manifest V3 Chrome extension that turns security questionnaires into a fast, in-browser workflow: scan questions from any portal (UpGuard, Google Forms, custom vendor sites), trigger AI-generated answers from policy knowledge, and export back into the original form — without leaving the browser.",
    impact: [
      { metric: "MV3", label: "Service worker arch" },
      { metric: "4", label: "Prod regions" },
      { metric: "0‑touch", label: "CWS deploy" },
    ],
    details: [
      "Three-layer architecture: React popup ↔ background service worker ↔ content script — all communication via chrome.runtime.sendMessage.",
      "Cookie-based SSO reuse — reads Scrut session cookies across 4 production regions with token-probing fallback; no duplicate login UX.",
      "Background scan pipeline runs popup-independently: inject HTML → upload → parse questions → enforce pricing tier limits → persist state in chrome.storage.local.",
      "AI autofill with SSE streaming (Draft → In Progress → Auto Filled → Completed); stream reconnects if popup closes mid-autofill.",
      "Context menu \"Add to Scrut Automation\" captures selected text with DOMPurify sanitization — works even when popup is closed.",
      "Autonomous CI/CD: GitHub Actions build → version bump → zip → Chrome Web Store upload & publish on push to production.",
      "Context: security questionnaires often overlap heavily (industry estimates ~60–90% overlap); the product goal is to compress response time and improve consistency. See `https://www.scrut.io/post/breeze-through-security-questionnaires-with-kai`.",
    ],
    techStack: [
      "React 18",
      "Manifest V3",
      "Tailwind CSS",
      "PrimeReact",
      "SSE",
      "DOMPurify",
      "GitHub Actions",
    ],
  },
  {
    id: "datasync-engine",
    title: "DataSync Foundation — Queue-driven ETL + Postgres Graph",
    shortLabel: "DataSync",
    icon: "pipeline",
    company: "Scrut Automation",
    period: "2024 – Present",
    role: "Platform Engineer",
    priority: "P1",
    tags: ["ETL", "Distributed Systems", "Node.js", "SQS", "PostgreSQL", "Multi-tenant"],
    summary:
      "A queue-driven, dependency-graph ETL engine that syncs data across 40+ integrations into a Postgres-backed entity graph — powering Access Reviews, Vulnerability Management, Evidence Collection (Scrut Monitor), Asset Inventory, and Monitors as a shared source of truth.",
    impact: [
      { metric: "40+", label: "Integrations supported" },
      { metric: "Graph", label: "Entity + relationship model" },
      { metric: "DAG", label: "Dependency-graph execution" },
    ],
    details: [
      "Queue-driven ingestion (RabbitMQ) with deterministic dependency-graph execution to run sync steps in the correct order and support partial reruns.",
      "Postgres graph model using `entity` (nodes) + `relationship` (edges) tables to represent deep hierarchies (org → repos → branches/PRs/findings/users) and query them via recursive SQL.",
      "Multi-tenant data isolation with per-tenant DB lifecycle and connection pools managed per sync job.",
      "Engineering focus: rate-limit handling, pagination, safe retries, and data deletion semantics (soft-delete + cascades) so downstream modules stay consistent.",
      "Reference concept: Postgres as a graph database pattern (entity/relationship) — `https://kushankurdas.medium.com/using-postgresql-as-a-graph-database-a-simple-approach-for-beginners-c76d3bc9e82c`.",
    ],
    techStack: [
      "Node.js",
      "AWS SQS",
      "RabbitMQ",
      "PostgreSQL",
      "AWS Secrets Manager",
      "Docker",
    ],
  },
  {
    id: "access-review",
    title: "Access Review Module",
    shortLabel: "Access Review",
    icon: "shield",
    company: "Scrut Automation",
    period: "2024",
    role: "Full Stack Engineer",
    priority: "P1",
    tags: ["GRC", "Identity", "Enterprise", "Compliance"],
    summary:
      "Architected a critical Access Review module that centralized user identity management across integrated applications — directly enabling the closure of $100k+ in enterprise contracts by fulfilling key customer compliance commitments.",
    impact: [
      { metric: "$100k+", label: "Deals enabled" },
      { metric: "1‑click", label: "Validation workflow" },
      { metric: "Audit‑ready", label: "Exportable reports" },
    ],
    details: [
      "Unified access review workflows across multiple integrated SaaS applications in a single compliance platform.",
      "Replaced spreadsheet-based reviews with real-time API synchronization and reviewer/approver workflows aligned to SOC 2 / ISO 27001 access certification controls.",
      "Industry context: privileged credential misuse is a major breach vector; see `https://www.scrut.io/post/access-reviews`.",
      "Directly tied to revenue — fulfilled contractual compliance commitments that blocked deal closure.",
    ],
    techStack: ["Node.js", "React", "PostgreSQL", "AWS"],
  },
  {
    id: "vuln-mgmt",
    title: "Vulnerability Management — Ingestion + SLA Tracking",
    shortLabel: "Vuln Mgmt",
    icon: "security",
    company: "Scrut Automation",
    period: "2024 – 2025",
    role: "Backend Engineer",
    tags: ["Vulnerabilities", "CVEs", "Snyk", "AWS Inspector", "Dependabot", "SLA"],
    summary:
      "Built the vulnerability ingestion + tracking backbone: sync findings from multiple scanners, normalize them into a single register, attach SLA policies, and drive risk-first remediation workflows tied back to assets and compliance.",
    impact: [
      { metric: "Multi‑source", label: "Scanner aggregation" },
      { metric: "SLA", label: "Remediation tracking" },
      { metric: "Risk‑first", label: "Prioritization" },
    ],
    details: [
      "Ingests findings from AWS Inspector, Snyk, and GitHub (Dependabot) into a unified vulnerability register.",
      "Automates severity-based remediation SLAs and surfaces overdue risk to security teams.",
      "Product context: Scrut’s unified VM approach reduces fragmentation and improves prioritization — `https://www.scrut.io/post/reinforce-your-risk-posture-with-scruts-vulnerability-management`.",
    ],
    techStack: ["Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: "scrut-monitor-evidence",
    title: "Scrut Monitor — Automated Evidence Collection",
    shortLabel: "Scrut Monitor",
    icon: "compliance",
    company: "Scrut Automation",
    period: "2024 – 2025",
    role: "Backend Engineer",
    tags: ["Evidence", "Audits", "Automation", "Integrations"],
    summary:
      "Built the evidence collection pipeline that pulls artifacts from integrations on a schedule and attaches provenance/source-of-truth metadata — so compliance teams stay audit-ready without spreadsheet chases.",
    impact: [
      { metric: "Scheduled", label: "Interval pulls" },
      { metric: "Provenance", label: "Source-of-truth attached" },
      { metric: "Always‑on", label: "Audit readiness" },
    ],
    details: [
      "Automates recurring evidence pulls and structures artifacts for auditor-friendly workflows.",
      "Health monitoring + failure visibility so missing evidence is caught early, not during audit week.",
      "Product context: evidence automation improves speed/accuracy/consistency — `https://www.scrut.io/post/harnessing-automation-for-evidence-management-with-scrut-monitor`.",
    ],
    techStack: ["Node.js", "PostgreSQL", "AWS SQS", "Integrations"],
  },
  {
    id: "asset-management",
    title: "Asset Management — Inventory + Risk Context",
    shortLabel: "Assets Management",
    icon: "tenant",
    company: "Scrut Automation",
    period: "2024 – 2025",
    role: "Backend Engineer",
    tags: ["Asset Inventory", "Cloud", "Identity", "Risk"],
    summary:
      "Extended the DataSync foundation to support cybersecurity asset inventory at scale — mapping assets, identities, and configurations into a single, continuously updated view for risk and compliance workflows.",
    impact: [
      { metric: "Inventory", label: "Real-time visibility" },
      { metric: "Context", label: "Relationships in graph" },
      { metric: "Compliance", label: "ISO/NIST/SOC 2 ready" },
    ],
    details: [
      "Tracks assets across cloud resources, apps, and identities; connects them to vulnerabilities and controls for audit workflows.",
      "Industry context: unknown/unmanaged assets drive breaches; see `https://www.scrut.io/post/cyber-asset-management-challenges`.",
      "Background on why CAM matters — `https://www.scrut.io/post/cybersecurity-asset-management`.",
    ],
    techStack: ["Node.js", "PostgreSQL", "AWS", "Integrations"],
  },
  {
    id: "audit-snapshot-sync",
    title: "Audit Snapshot Sync",
    shortLabel: "Audit Sync",
    icon: "compliance",
    company: "Scrut Automation",
    period: "2024 – 2025",
    role: "Full Stack Engineer",
    tags: ["Audits", "Sync", "GRC", "Backend"],
    summary:
      "Built the Audit Snapshot Sync feature — keeping audit evidence snapshots consistent across Scrut's compliance platform so auditors and customers always reference the same point-in-time compliance state during active audits.",
    impact: [
      { metric: "Audit", label: "Point-in-time" },
      { metric: "Unified", label: "Auditor experience" },
      { metric: "Unblocked", label: "Audit cycles" },
    ],
    details: [
      "Designed sync logic to propagate audit snapshot state across platform services — preventing drift between evidence views during live audits.",
      "Ensures auditors see a consistent compliance posture snapshot even as underlying monitor data continues to update.",
      "Critical for enterprise audit cycles where evidence integrity and reproducibility are contractual requirements.",
    ],
    techStack: ["Node.js", "PostgreSQL", "AWS", "React"],
  },
  {
    id: "align-auditor-migration",
    title: "A-Lign Auditor Workflow Migration",
    shortLabel: "A-Lign Migrate",
    icon: "gitops",
    company: "Scrut Automation",
    period: "2024 – 2025",
    role: "Full Stack Engineer",
    tags: ["A-Lign", "Migration", "Auditor", "Integration"],
    summary:
      "Led migration of A-Lign auditor workflows into Scrut's platform — enabling auditors to work within Scrut while maintaining compatibility with A-Lign audit processes and data formats.",
    impact: [
      { metric: "A-Lign", label: "Workflow parity" },
      { metric: "Auditor", label: "Unified UX" },
      { metric: "Migrate", label: "Zero disruption" },
    ],
    details: [
      "Mapped A-Lign auditor workflow steps to Scrut platform equivalents — requests, evidence review, findings, and sign-off.",
      "Ensured backward compatibility with existing A-Lign customer audit cycles during transition.",
      "Collaborated across frontend and backend to unify auditor experience without losing A-Lign-specific compliance semantics.",
    ],
    techStack: ["React", "Node.js", "AWS"],
  },
  {
    id: "trust-vault-order",
    title: "Trust Vault Display Order",
    shortLabel: "Trust Vault",
    icon: "tenant",
    company: "Scrut Automation",
    period: "2024",
    role: "Full Stack Engineer",
    tags: ["Trust Vault", "UX", "Customization", "Enterprise"],
    summary:
      "Shipped customizable display ordering for Trust Vault sections — letting enterprise customers control how compliance documents, policies, and certifications appear on their public trust page.",
    impact: [
      { metric: "Custom", label: "Section ordering" },
      { metric: "Trust", label: "Public page UX" },
      { metric: "Enterprise", label: "Brand control" },
    ],
    details: [
      "Built drag-and-drop or configurable ordering for Trust Vault sections — policies, certifications, subprocessors, and more.",
      "Persisted per-tenant display preferences with immediate preview on the public trust page.",
      "Enterprise customers use Trust Vault as their security marketing page — display order directly impacts buyer perception.",
    ],
    techStack: ["React", "Node.js", "AWS DynamoDB"],
  },
  {
    id: "risk-form",
    title: "Customisable Risk Form (GOM-32673)",
    shortLabel: "Risk Form",
    icon: "shield",
    company: "Scrut Automation",
    period: "2024",
    role: "Full Stack Engineer",
    tags: ["Risk Management", "Forms", "Customization", "GRC"],
    summary:
      "Built customizable Risk Forms — letting organizations define their own risk assessment fields, scoring models, and workflows instead of being locked into a fixed template.",
    impact: [
      { metric: "Custom", label: "Form fields" },
      { metric: "Risk", label: "Assessment UX" },
      { metric: "GOM-32673", label: "Jira ticket" },
    ],
    details: [
      "Designed flexible form schema supporting custom fields, validation rules, and risk scoring configurations per tenant.",
      "Enabled risk teams to mirror their internal risk register structure within Scrut's platform.",
      "Integrated with Scrut's broader risk management module for tracking, remediation, and audit evidence.",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "JSON Schema"],
  },
  {
    id: "land-axis",
    title: "Land Axis — Real Estate Transparency",
    shortLabel: "Land Axis",
    icon: "globe",
    company: "Personal Project",
    period: "December 2025",
    role: "Creator",
    tags: ["Next.js", "Data Viz", "Real Estate", "Full Stack"],
    summary:
      "Developed Land Axis — a real estate transparency platform aggregating and visualizing land ownership and distribution data, empowering investors with granular insights for data-driven decision-making.",
    impact: [
      { metric: "Live", label: "landaxis.in" },
      { metric: "Data", label: "Ownership viz" },
    ],
    details: [
      "Aggregates public land records and ownership data into an interactive visualization layer.",
      "Built for investors who need transparency beyond traditional property listing portals.",
      "Full-stack deployment with optimized data presentation for geographic and ownership patterns.",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Data Visualization"],
  },
  {
    id: "seven-money",
    title: "Automated Bulk Deal Tracking",
    shortLabel: "Seven Money",
    icon: "ml",
    company: "Personal Project",
    period: "November 2024",
    role: "Creator",
    tags: ["Trading", "Real-time", "Angel One API", "Data Pipeline"],
    summary:
      "Built a real-time pipeline extracting bulk deal data from NSE/BSE via Angel One SmartAPI — with an interactive UI for visualization and data-driven trading strategy formulation yielding 15%+ returns.",
    impact: [
      { metric: "15%+", label: "Strategy returns" },
      { metric: "Real-time", label: "NSE/BSE feed" },
      { metric: "Live", label: "seven-money.vercel.app" },
    ],
    details: [
      "Real-time data pipeline from Angel One SmartAPI processing bulk deal market metrics.",
      "Interactive dashboard for visualizing institutional bulk deals and formulating trading strategies.",
      "Deployed at seven-money.vercel.app for immediate market analysis.",
    ],
    techStack: ["React", "Node.js", "Angel One SmartAPI", "Vercel"],
  },
  {
    id: "propreturns-sync",
    title: "PropReturns Data Sync Pipeline",
    shortLabel: "PropReturns",
    icon: "pipeline",
    company: "PropReturns",
    period: "2022",
    role: "Founding Engineer",
    tags: ["Python", "gspread", "MongoDB", "Automation"],
    summary:
      "Reduced property upload time by 90% by engineering a custom data synchronization pipeline using Python and gspread — eliminating manual verification and maintaining consistency between Google Sheets and MongoDB.",
    impact: [
      { metric: "90%", label: "Upload time cut" },
      { metric: "Auto", label: "Sheet ↔ DB sync" }
    ],
    details: [
      "Bidirectional sync between operations team's Google Sheets and MongoDB property database.",
      "Eliminated manual copy-paste verification steps that bottlenecked property onboarding.",
      "Foundation for PropReturns' scalable property listing pipeline.",
    ],
    techStack: ["Python", "gspread", "MongoDB", "Google Sheets API"],
  },
];

export const dockItems = [
  { id: "home", label: "Home", icon: "home", action: "home" as const },
  { id: "work", label: "Work", icon: "work", action: "work" as const },
  { id: "leadership", label: "Impact", icon: "leadership", action: "leadership" as const },
  { id: "skills", label: "Skills", icon: "skills", action: "skills" as const },
  { id: "contact", label: "Contact", icon: "contact", action: "contact" as const },
  { id: "resume", label: "Resume", icon: "resume", action: "resume" as const },
];
