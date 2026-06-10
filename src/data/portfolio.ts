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
  title: "Full Stack Engineer",
  tagline: "React · Node.js · PostgreSQL · Chrome Extensions · GRC Platform Engineering",
  email: "shlokp762@gmail.com",
  phone: "+91 9359431950",
  linkedin: "https://www.linkedin.com/in/shlokp762",
  github: "https://github.com/shlokp762",
  location: "India · Remote-friendly",
  yearsExperience: "3+",
  summary: `Full Stack Engineer at Scrut Automation, a compliance automation (GRC) platform. I architect and ship production systems end-to-end — from Manifest V3 Chrome extensions to queue-driven backend workers, PostgreSQL entity graphs, and multi-region AWS deployments. Passionate about core engineering fundamentals: scalable architecture, resilient state management, and products that close enterprise deals.`,
  stats: [
    { value: "2+", label: "Years at Scrut" },
    { value: "$500k+", label: "Deals Enabled" },
    { value: "100%", label: "Sprint Completion Rate with minimal bugs" },
  ],
  aboutExtended: [
    "Full Stack Engineer at Scrut Automation — building compliance automation for SOC 2, ISO 27001, and enterprise GRC workflows.",
    "Owner of the Scrut Automation Chrome Extension — Manifest V3 architecture spanning popup, service worker, and content scripts with autonomous CI/CD to Chrome Web Store.",
    "Backend engineer on Scrut DataSync Pipeline — SQS-driven worker syncing integration data like GitHub, AWS, Snyk, and others into a PostgreSQL entity graph which is used by multiple modules under Scrut's platform as a source of truth.",
    "Architected the Access Review module that centralized identity management across applications — directly enabling $100k+ in enterprise contract closures.",
    "Shipped major platform features: Audit Snapshot Sync, A-Lign integration exports, Trust Vault customization, Monitor data source-of-truth, and customizable Risk Forms.",
    "Previously founding engineer at PropReturns — 90% faster property uploads via Python/gspread sync pipelines and AWS image processing with Sharp/Jimp.",
    "BTech Computer Science, IIIT Nagpur (2018–2022).",
  ],
};

export const leadership = {
  title: "Engineering Highlights",
  summary:
    "End-to-end ownership across frontend, backend, integrations, and deployment — with a focus on enterprise-grade reliability, multi-region scale, and measurable business impact.",
  highlights: [
    {
      area: "Product Ownership",
      points: [
        "Owned the Scrut Automation Chrome Extension from architecture through Chrome Web Store publish — popup UI, background pipelines, content-script form injection, and zero-touch CI/CD.",
        "Designed and delivered the Scrut DataSync Pipeline — a SQS-driven worker syncing integration data like GitHub, AWS, Snyk, and others into a PostgreSQL entity graph which is used by multiple modules under Scrut's platform as a source of truth.",
        "Delivered Access Review module that fulfilled key customer compliance commitments and unlocked $100k+ in enterprise revenue.",
      ],
    },
    {
      area: "Architecture & Scale",
      points: [
        "Modeled compliance data as a Postgres-backed entity graph (entity + relationship tables) with cycle-safe edges and recursive cascade delete — no dedicated graph DB overhead.",
        "Implemented a multi-tenant architecture with per-tenant isolated Postgres databases — pools created/destroyed per sync message",
        "Multi-region auth resolution across 4 Scrut production regions with cookie-based SSO reuse and token-probing fallback.",
      ],
    },
    {
      area: "DevOps & Delivery",
      points: [
        "Fully autonomous Chrome Web Store pipeline — build, version bump, zip, upload, and publish on git push.",
        "A-lign auditor workflow migration to Scrut's platform — enabling auditors to work within Scrut while maintaining compatibility with A-Lign audit processes and data formats."
      ],
    },
  ],
};

export const skills = {
  languages: ["JavaScript", "Python", "TypeScript", "C++"],
  backend: [
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "AWS (SQS, ECS, Secrets Manager, SSM)"
  ],
  frontend: [
    "React",
    "Next.js",
    "Tailwind CSS"
  ],
  devops: ["Docker", "GitHub Actions", "AWS CodeBuild", "ECR", "ECS", "Sentry"],
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
      "Engineered scalable DataSync worker services for GitHub, AWS, Snyk, and other integrations — ingesting repos, PRs, commits, and security findings into PostgreSQL.",
      "Designed a graph-like relational schema (entity + relationship tables) for deep-hierarchy compliance data without a dedicated graph database.",
      "Architected the Access Review module — centralized user identity management across applications, enabling $100k+ in enterprise contract closures.",
      "Owned the Scrut Automation Chrome Extension end-to-end: Manifest V3 architecture, AI questionnaire autofill, multi-region auth, and autonomous Chrome Web Store CI/CD.",
      "Shipped Audit Snapshot Sync, A-Lign test export, Trust Vault display ordering, Monitor source-of-truth, and customizable Risk Forms.",
      "Built GitHub sync steps including dual-path branch protection (classic + rulesets), PR delta sync with concurrent review fetching, and Dependabot alert ingestion.",
    ],
  },
  {
    company: "PropReturns",
    role: "Founding Full Stack Engineer",
    location: "India",
    period: "June 2022 – 2023",
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
      "A Manifest V3 Chrome extension that bridges any security questionnaire webpage with Scrut's AI-powered answer engine — import questions from UpGuard, Google Forms, or any portal, get AI-generated answers from policy docs, and export back into the original form without leaving the browser.",
    impact: [
      { metric: "MV3", label: "Service worker arch" },
      { metric: "4", label: "Prod regions" },
      { metric: "0-touch", label: "CWS deploy" },
    ],
    details: [
      "Three-layer architecture: React popup ↔ background service worker ↔ content script — all communication via chrome.runtime.sendMessage.",
      "Cookie-based SSO reuse — reads Scrut session cookies across 4 production regions with token-probing fallback; no duplicate login UX.",
      "Background scan pipeline runs popup-independently: inject HTML → upload → parse questions → enforce pricing tier limits → persist state in chrome.storage.local.",
      "AI autofill with SSE streaming (Draft → In Progress → Auto Filled → Completed); stream reconnects if popup closes mid-autofill.",
      "Export engine uses fuzzy token matching + native value setters to bypass React controlled inputs on any webpage.",
      "Context menu \"Add to Scrut Automation\" captures selected text with DOMPurify sanitization — works even when popup is closed.",
      "Autonomous CI/CD: GitHub Actions build → version bump → zip → Chrome Web Store upload & publish on push to production.",
    ],
    techStack: [
      "React 18",
      "Manifest V3",
      "Tailwind CSS",
      "PrimeReact",
      "Zustand",
      "SSE",
      "DOMPurify",
      "GitHub Actions",
    ],
  },
  {
    id: "datasync-github",
    title: "Scrut DataSync — GitHub Worker",
    shortLabel: "DataSync",
    icon: "pipeline",
    company: "Scrut Automation",
    period: "2024 – Present",
    role: "Backend Engineer",
    priority: "P1",
    tags: ["Node.js", "SQS", "PostgreSQL", "Octokit", "ECS", "SOC 2"],
    summary:
      "A queue-driven, multi-tenant worker syncing integration data like GitHub, AWS, Snyk, and others into a PostgreSQL entity graph which is used by multiple modules under Scrut's platform as a source of truth.",
    impact: [
     {metric: "$500k+", label: "Deals enabled"},
      { metric: "Multi-tenant", label: "Isolated Postgres databases" },
      {metric: "Less than 1%",label: "Dead Letter Queue messages"}
    ],
    details: [
      "Designed and delivered the Scrut DataSync Pipeline — a SQS-driven worker syncing integration data like GitHub, AWS, Snyk, and others into a PostgreSQL entity graph which is used by multiple modules under Scrut's platform as a source of truth.",
      "Implemented a multi-tenant architecture with per-tenant isolated Postgres databases — pools created/destroyed per sync message",
      "Works in a non-blocking manner - dependency graph syncs the data for each step in the pipeline based on the dependencies between the steps.",
    ],
    techStack: [
      "Node.js",
      "AWS SQS",
      "AWS Secrets Manager",
      "AWS DynamoDB",
      "PostgreSQL",
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
      { metric: "Central", label: "Identity hub" },
      { metric: "SOC 2", label: "Audit-ready" },
    ],
    details: [
      "Unified access review workflows across multiple integrated SaaS applications in a single compliance platform.",
      "Enabled enterprise customers to meet periodic access certification requirements — a common SOC 2 and ISO 27001 control.",
      "Directly tied to revenue — fulfilled contractual compliance commitments that blocked deal closure.",
    ],
    techStack: ["Node.js", "React", "PostgreSQL", "AWS"],
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
    techStack: ["Node.js", "PostgreSQL", "AWS SQS", "React"],
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
    techStack: ["React", "Node.js", "PostgreSQL", "REST APIs"],
  },
  {
    id: "align-test-export",
    title: "A-Lign Test Export",
    shortLabel: "A-Lign Export",
    icon: "compliance",
    company: "Scrut Automation",
    period: "2024 – 2025",
    role: "Full Stack Engineer",
    tags: ["A-Lign", "Export", "Compliance Tests", "Integration"],
    summary:
      "Built A-Lign Test Export — generating compliance test results in A-Lign-compatible format so customers can feed Scrut monitor outcomes directly into their A-Lign audit workflows.",
    impact: [
      { metric: "Export", label: "A-Lign format" },
      { metric: "Tests", label: "Monitor mapping" },
      { metric: "Audit", label: "Workflow bridge" },
    ],
    details: [
      "Designed export pipeline mapping Scrut compliance monitor test results to A-Lign expected schemas.",
      "Enabled bi-directional GRC workflow — Scrut as source of truth for continuous monitoring, A-Lign for formal audit delivery.",
      "Handled edge cases in test status mapping, evidence attachments, and control framework alignment.",
    ],
    techStack: ["Node.js", "React", "PostgreSQL", "JSON Schema"],
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
    techStack: ["React", "Node.js", "Dynamodb"],
  },
  {
    id: "monitor-source-of-truth",
    title: "Monitor Data Source of Truth",
    shortLabel: "Monitor SOT",
    icon: "metrics",
    company: "Scrut Automation",
    period: "2024",
    role: "Backend Engineer",
    tags: ["Monitors", "Data Model", "GRC", "Architecture"],
    summary:
      "Established the canonical source of truth for Scrut Monitor data — resolving inconsistencies across integration slaves, compliance tests, and dashboard views so all monitor outcomes derive from a single authoritative data layer.",
    impact: [
      { metric: "1", label: "Source of truth" },
      { metric: "Sync", label: "Data consistency" },
      { metric: "Monitors", label: "Audit accuracy" },
    ],
    details: [
      "Defined ownership boundaries between DataSync slaves, VM compliance service, and monitor evaluation engine.",
      "Eliminated conflicting monitor statuses caused by stale or duplicated data across integration pipelines.",
      "Foundation for reliable continuous compliance monitoring — monitors drive automated SOC 2 control evaluation.",
    ],
    techStack: ["Node.js", "PostgreSQL", "AWS SQS", "SNS"],
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
      { metric: "Investor", label: "Decision support" },
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
      { metric: "Auto", label: "Sheet ↔ DB sync" },
      { metric: "0", label: "Manual verification" },
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
  { id: "leadership", label: "Impact", icon: "leadership", action: "leadership" as const },
  { id: "skills", label: "Skills", icon: "skills", action: "skills" as const },
  { id: "contact", label: "Contact", icon: "contact", action: "contact" as const },
  { id: "resume", label: "Resume", icon: "resume", action: "resume" as const },
];
