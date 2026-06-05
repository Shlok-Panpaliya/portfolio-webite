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
  name: "Mansi Saboo",
  title: "Senior Site Reliability Engineer",
  tagline: "Kubernetes · IaC · GitOps · Security · AI-driven operations at scale",
  email: "panpaliya.mansi@gmail.com",
  phone: "+1 (602) 837-9992",
  linkedin: "https://www.linkedin.com/in/mansi-panpaliya6",
  location: "Chicago, IL · Open to Relocate",
  yearsExperience: "7+",
  uptime: "99.9%",
  summary: `Site Reliability Engineer with 7+ years building and operating large-scale cloud-native infrastructure at Okta. Specialized in Kubernetes, Terraform, Crossplane, Packer, and GitOps (ArgoCD) — with a proven track record of driving P1/P2 initiatives end-to-end: 96% faster cluster rollouts, 99% AMI automation gains, 800→70 vulnerability reduction, and FedRAMP compliance. Known as a multiplier — mentoring engineers, leading cross-functional initiatives, and pioneering AI-assisted SRE workflows.`,
  aboutExtended: [
    "SRE II at Okta — spearheading high-impact P1/P2 projects across infrastructure automation, security, and multi-region production.",
    "Independently delivered the bedrock Vulnerability Remediation initiative (800→70) by orchestrating Node-TTL, Packer/CircleCI, and Terraform-Live sub-projects.",
    "Built FL16 APAC production cell one week ahead of schedule — overcoming unsupported Osaka (ap-northeast-3) region tooling gaps.",
    "FedRAMP compliance via NodeSSH — eliminated bastions, integrated secure node access into azuquactl.",
    "Driving Terraform → Crossplane migration and ArgoCD GitOps adoption for deployment automation and single-tenant isolation.",
    "Multiplier & mentor — onboarded engineers globally, led sprint planning, office hours, and cross-timezone collaboration.",
    "AI-focused: running POCs for AI-assisted backlog grooming, vulnerability ticket tagging, and toil reduction.",
  ],
};

export const leadership = {
  title: "Leadership & Impact",
  summary:
    "Consistently drive P1/P2 projects from concept to completion — combining technical depth, proactive communication, and team multiplication.",
  highlights: [
    {
      area: "Project Ownership",
      points: [
        "Spearheaded multiple P1/P2 initiatives with measurable outcomes — 96% rollout speedup, 99% AMI automation, 91% vuln reduction.",
        "Single-handedly completed the bedrock Vulnerability Remediation project by applying automation from Node-TTL, Packer, and Terraform-Live.",
        "Delivered FL16 APAC cell build one week ahead of schedule despite greenfield region tooling challenges.",
      ],
    },
    {
      area: "Mentoring & Multiplier",
      points: [
        "Mentored new engineers (including Rahman) through tooling demos, incident response, and deployment workflows.",
        "Reduced onboarding ramp-up via documentation, office hours, and async knowledge sharing across global teams.",
        "Active in sprint planning, quarter whiteboarding, and raising infrastructure risks early to prevent blockers.",
      ],
    },
    {
      area: "Communication & Collaboration",
      points: [
        "Proactively communicated risks on FL16 Osaka region tooling gaps — escalated early and collaborated with experts to unblock.",
        "Coordinated cross-team efforts on vuln remediation with REX team — regular stakeholder updates kept bedrock item on schedule.",
        "Bridged security, development, and operations teams on Qualys rollout, NodeSSH, and Splunk cloud migration.",
      ],
    },
    {
      area: "Decision Making",
      points: [
        "Scoped Node-TTL to worker nodes only — protecting control plane stability while enabling daily immutable refreshes.",
        "Chose modular Terraform templates and Packer-based Qualys agent install for scalable, repeatable security rollouts.",
        "Integrated NodeSSH into existing azuquactl tooling — compliance without adding operational friction.",
      ],
    },
    {
      area: "Design Principles",
      points: [
        "DRY & modular IaC — reusable Terraform modules and isolated Packer/CircleCI pipeline components.",
        "Separation of concerns — networking, security, and application layers split into independent modules.",
        "Immutable infrastructure — rolling node updates via Node-TTL Helm chart; template design patterns for multi-env consistency.",
      ],
    },
  ],
};

export const skills = {
  languages: ["Python", "Golang", "Shell Scripting", "Bash"],
  cloud: ["Amazon Web Services (AWS)", "Google Cloud Platform (GCP)"],
  infrastructure: [
    "Kubernetes",
    "Helm",
    "Kops",
    "Terraform",
    "Crossplane",
    "Packer",
    "ArgoCD",
    "Docker",
  ],
  observability: ["Datadog", "Splunk", "Grafana", "Qualys"],
  cicd: ["CircleCI", "Jenkins", "Git", "GitOps", "azuquactl"],
  platforms: [
    "Linux",
    "FedRAMP Compliance",
    "SOC2",
    "Multi-tenant SaaS",
    "Single-tenant Isolation",
  ],
};

export const education = [
  {
    degree: "MS, Computer Science",
    school: "Arizona State University",
    location: "Tempe, Arizona",
    year: "May 2021",
  },
  {
    degree: "BE, Information Technology",
    school: "Pune Institute of Computer Technology",
    location: "Pune, India",
    year: "May 2016",
  },
];

export const experience: Experience[] = [
  {
    company: "Okta Inc.",
    role: "Site Reliability Engineer II",
    location: "Chicago, IL",
    period: "April 2023 – Present",
    highlights: [
      "Led Node-TTL: daily Kubernetes node refresh — 96% Kops rollout reduction (2 days → 2 hours per cell), resolved red-alert performance issues.",
      "Built modular Packer + CircleCI AMI pipeline — 99% reduction in AMI creation and upload time.",
      "Owned bedrock Vulnerability Remediation (800→70) — coordinated AMI automation, Node-TTL, and Terraform-Live independently.",
      "Deployed Qualys cloud-agent across all environments; moved K8s clusters behind VPN for security posture.",
      "NodeSSH: FedRAMP compliance — removed bastions, integrated privileged pod access into azuquactl.",
      "Driving Terraform → Crossplane migration, ArgoCD GitOps adoption, and single-tenant isolation.",
      "AI POCs: backlog grooming, vuln ticket tagging, and toil reduction with Claude Code.",
      "KTLO: Splunk cloud migration support, RDS upgrades, SOC2 audit support.",
    ],
  },
  {
    company: "Okta Inc.",
    role: "Site Reliability Engineer I",
    location: "San Francisco, CA",
    period: "June 2021 – March 2023",
    highlights: [
      "Built FL16 APAC production cell (Osaka ap-northeast-3) — 99.9% uptime, delivered 1 week ahead of schedule.",
      "Terraform-Live migration: modular, DRY IaC — eliminated configuration drift, template design patterns across environments.",
      "Reduced on-call alert noise by 90% via Datadog, Grafana, and Splunk threshold tuning.",
      "On-call rotations, post-mortems, and preventive reliability improvements.",
      "Mentored new engineers; sprint planning, office hours, and global async collaboration.",
    ],
  },
  {
    company: "Okta Inc.",
    role: "Site Reliability Intern",
    location: "Bellevue, WA",
    period: "May 2020 – August 2020",
    highlights: [
      "Enhanced Golang deployment automation tool for parallelized multi-cluster Kubernetes deployments.",
    ],
  },
  {
    company: "Great Software Laboratory Pvt. Ltd.",
    role: "Software Engineer",
    location: "Pune, India",
    period: "July 2016 – June 2019",
    highlights: [
      "Reduced deployment time from 4 days to 2 hours with Jenkins, Docker, and Kubernetes CI/CD.",
      "Built REST APIs in Python Flask for ML application, deployed on Kubernetes.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "node-ttl",
    title: "Node-TTL — Kubernetes Daily Node Refresh",
    shortLabel: "Node-TTL",
    icon: "k8s",
    company: "Okta Inc.",
    period: "2023 – 2024",
    role: "SRE II",
    priority: "P2",
    tags: ["Kubernetes", "Immutable Infra", "Helm", "Kops", "Performance"],
    summary:
      "Designed and deployed a Kubernetes node refresh mechanism that automatically rolls worker nodes every 24 hours — improving hardware performance, boosting application throughput, and slashing Kops cluster rollout time from 2 days to ~2 hours per cell.",
    impact: [
      { metric: "96%", label: "Rollout time reduction" },
      { metric: "2d→2h", label: "Per cell rollout" },
      { metric: "24h", label: "Auto node refresh" },
    ],
    details: [
      "Built Node-TTL Helm chart for automated daily rolling node replacement across worker nodes.",
      "Resolved a red-alert priority item — improved hardware performance and indirectly boosted application performance.",
      "Scoped rollout to worker nodes only (not control plane) to protect Kops gossip-protocol stability — a key implementation decision.",
      "Enabled teams to roll out Kops changes and vuln remediation fixes in hours instead of days.",
      "Applied immutable infrastructure pattern — predictable, repeatable node refreshes with minimal human error.",
      "Integrated into the bedrock Vulnerability Remediation program to accelerate patch rollouts across clusters.",
    ],
    techStack: ["Kubernetes", "Helm", "Kops", "CircleCI", "AWS", "Packer"],
  },
  {
    id: "ami-pipeline",
    title: "Packer + CircleCI AMI Automation",
    shortLabel: "AMI Pipeline",
    icon: "ami",
    company: "Okta Inc.",
    period: "2023 – 2024",
    role: "SRE II",
    priority: "P2",
    tags: ["Packer", "CircleCI", "Modular IaC", "Golden Images"],
    summary:
      "Automated AMI creation with a modular, reusable Packer + CircleCI pipeline — achieving 99% reduction in AMI creation and upload time while ensuring secure, consistent machine images across all environments.",
    impact: [
      { metric: "99%", label: "Creation time reduced" },
      { metric: "0", label: "Manual bake steps" },
      { metric: "All", label: "Environments covered" },
    ],
    details: [
      "Designed modular infrastructure-as-code pipeline — each component isolated and reusable for new environments without rewrites.",
      "Baked Qualys cloud-agent into AMIs via Packer for automated security agent deployment.",
      "Built tooling to list package versions corresponding to each AMI for audit and compliance traceability.",
      "Created AMI deletion automation (hackathon/fixit) to reduce storage costs and orphaned image sprawl.",
      "Long-term maintainability focus — reduced technical debt through separation of concerns in pipeline stages.",
      "Core enabler for the 800→70 vulnerability remediation — patched Ubuntu packages baked into every new AMI.",
    ],
    techStack: ["Packer", "CircleCI", "AWS EC2", "Qualys", "Helm", "Kops"],
  },
  {
    id: "vuln-remediation",
    title: "Vulnerability Remediation (Bedrock)",
    shortLabel: "Vuln Remediation",
    icon: "shield",
    company: "Okta Inc.",
    period: "2023 – 2024",
    role: "SRE II",
    priority: "P2",
    tags: ["Security", "Bedrock", "Coordination", "Self-sufficient"],
    summary:
      "Led the bedrock initiative to reduce infrastructure vulnerabilities from 800 to 70 — independently orchestrating Node-TTL, Packer/CircleCI AMI automation, and Terraform-Live to streamline remediation across the organization.",
    impact: [
      { metric: "800→70", label: "Vulnerabilities" },
      { metric: "91%", label: "Reduction rate" },
      { metric: "On time", label: "Bedrock delivery" },
    ],
    details: [
      "Owned end-to-end delivery — coordinated AMI automation (Ubuntu package vulns) and Node-TTL (accelerated rollouts) as sub-projects.",
      "Proactively identified risks: AMI creation bottlenecks and rollout delays — mitigated early with REX team collaboration.",
      "Regular stakeholder updates kept the high-priority bedrock item on schedule despite complexity.",
      "Performance-driven design: optimized AMI configs reduced vulns AND improved provisioning speed.",
      "Demonstrated self-sufficiency — applied design principles and automation from prior projects without dependency on others.",
      "Supported SOC2 compliance audit with hardened infrastructure posture.",
    ],
    techStack: ["Packer", "Terraform", "Kubernetes", "Qualys", "Node-TTL", "CircleCI"],
  },
  {
    id: "fl16-cell",
    title: "FL16 APAC Production Cell Build",
    shortLabel: "FL16 Cell",
    icon: "globe",
    company: "Okta Inc.",
    period: "2021 – 2023",
    role: "SRE I",
    priority: "P1",
    tags: ["P1", "APAC", "Osaka", "Multi-region", "DR"],
    summary:
      "Designed and implemented the APAC FL16 production environment in Osaka (ap-northeast-3) — delivering scalable, secure, highly available infrastructure with 99.9% uptime, one week ahead of schedule despite unsupported region tooling.",
    impact: [
      { metric: "99.9%", label: "Uptime achieved" },
      { metric: "+1 wk", label: "Ahead of schedule" },
      { metric: "P1", label: "Priority delivery" },
    ],
    details: [
      "Greenfield build in Osaka (ap-northeast-3) — a new AWS region not supported by existing Kops, Kubernetes, or Terraform tooling.",
      "Proactively communicated tooling risk to stakeholders and escalated early — secured resources to address region limitations.",
      "Proposed hybrid solution: custom scripts + modified Terraform configs to support the unsupported region.",
      "Worked with senior engineers to adapt Kops and Terraform for ap-northeast-3 compatibility.",
      "Designed FL16-DR disaster recovery cell alongside primary production — resilient multi-AZ architecture.",
      "Participated in technical design for tooling, infrastructure config, and DR strategies with senior engineers.",
    ],
    techStack: ["AWS", "Kubernetes", "Terraform", "Packer", "Docker", "Kops"],
  },
  {
    id: "nodessh",
    title: "NodeSSH — FedRAMP Secure Access",
    shortLabel: "NodeSSH",
    icon: "compliance",
    company: "Okta Inc.",
    period: "2023 – 2024",
    role: "SRE II",
    priority: "P2",
    tags: ["FedRAMP", "Zero Trust", "azuquactl", "Compliance"],
    summary:
      "Achieved FedRAMP compliance by removing bastion hosts and enabling secure Kubernetes node access via privileged pods — integrated into azuquactl for a seamless, auditable engineer experience.",
    impact: [
      { metric: "100%", label: "Bastions removed" },
      { metric: "FedRAMP", label: "Compliant access" },
      { metric: "azuquactl", label: "Integrated tooling" },
    ],
    details: [
      "Removed all bastion hosts from infrastructure — eliminated SSH key sprawl and attack surface.",
      "Built privileged pod-based node access with RBAC controls and audit logging for compliance reviewers.",
      "Integrated into azuquactl — engineers use existing workflows, no new tools to learn.",
      "Also added azuquactl Kubernetes OIDC authentication with browser redirection (hackathon/fixit improvement).",
      "Moved K8s clusters behind VPN as part of broader security posture improvements.",
      "Security-first design aligned with company risk mitigation objectives.",
    ],
    techStack: ["Kubernetes", "RBAC", "azuquactl", "OIDC", "AWS IAM", "FedRAMP"],
  },
  {
    id: "terraform-live",
    title: "Terraform-Live Migration",
    shortLabel: "Terraform-Live",
    icon: "terraform",
    company: "Okta Inc.",
    period: "2021 – 2023",
    role: "SRE I",
    priority: "P2",
    tags: ["Terraform", "DRY", "Modular", "Template Pattern"],
    summary:
      "Migrated legacy infrastructure to Terraform-managed resources with modular, DRY code and template design patterns — eliminating configuration drift and enabling version-controlled, repeatable deployments.",
    impact: [
      { metric: "100%", label: "Drift eliminated" },
      { metric: "DRY", label: "Reusable modules" },
      { metric: "Multi-env", label: "Template consistency" },
    ],
    details: [
      "Refactored legacy Terraform into reusable modules following DRY principle — networking, security, and app layers separated.",
      "Applied template design pattern — same template applied consistently across environments with parameterized configs.",
      "Separation of concerns: split complex migration into manageable units per infrastructure layer.",
      "Enabled easy addition of new environments without modifying entire infrastructure setup.",
      "Clear documentation and regular code reviews ensured long-term maintainability and team contribution.",
      "Foundation for subsequent Terraform → Crossplane migration and deployment automation initiatives.",
    ],
    techStack: ["Terraform", "AWS", "Git", "CircleCI", "Template Patterns"],
  },
  {
    id: "qualys-security",
    title: "Qualys Security Agent Deployment",
    shortLabel: "Qualys Agent",
    icon: "security",
    company: "Okta Inc.",
    period: "2023 – 2024",
    role: "SRE II",
    priority: "P2",
    tags: ["Qualys", "Security", "Packer", "Automation"],
    summary:
      "Integrated and deployed the Qualys cloud-agent across all environments — improving security posture and enabling continuous vulnerability monitoring at scale.",
    impact: [
      { metric: "All envs", label: "Agent deployed" },
      { metric: "Auto", label: "Packer-based install" },
      { metric: "24/7", label: "Vuln monitoring" },
    ],
    details: [
      "Collaborated with security team to design the most efficient, scalable Qualys agent installation approach.",
      "Automated agent deployment via Packer — baked into golden AMIs for consistent coverage on every new node.",
      "Maintained open communication with security, development, and operations throughout rollout.",
      "Aligned deployment with company security-first strategy and risk mitigation goals.",
      "Enabled continuous vulnerability detection feeding into the bedrock remediation program.",
    ],
    techStack: ["Qualys", "Packer", "AWS", "CircleCI", "Kubernetes"],
  },
  {
    id: "crossplane-gitops",
    title: "Deployment Automation — Crossplane + ArgoCD",
    shortLabel: "GitOps Deploy",
    icon: "gitops",
    company: "Okta Inc.",
    period: "2023 – Present",
    role: "SRE II",
    priority: "P2",
    tags: ["Crossplane", "ArgoCD", "GitOps", "Single-tenant"],
    summary:
      "Leading migration from Terraform-Live to Crossplane for cloud resource provisioning, converting Kubernetes clusters to ArgoCD-managed GitOps, and building single-tenant isolation — removing deployer role through automation.",
    impact: [
      { metric: "GitOps", label: "ArgoCD adoption" },
      { metric: "↓40%", label: "Build time reduction" },
      { metric: "Auto", label: "Deployer role removed" },
    ],
    details: [
      "Migrating Terraform-Live infrastructure to Crossplane CRDs for Kubernetes-native resource provisioning.",
      "Converting existing K8s clusters to ArgoCD-managed GitOps for lifecycle management and drift detection.",
      "Built single-tenant isolation add-on — secure, scalable onboarding for enterprise customers.",
      "Enhancing azuquactl and deployment tooling for seamless engineer experience with reduced friction.",
      "Removing deployer role dependency through end-to-end deployment automation.",
      "Productionized infrastructure add-on with Crossplane + ArgoCD — successfully onboarded multiple customers.",
    ],
    techStack: ["Crossplane", "ArgoCD", "Kubernetes", "Terraform", "Helm", "AWS"],
  },
  {
    id: "ai-driven-ops",
    title: "AI-Driven SRE Workflows",
    shortLabel: "AI Ops",
    icon: "ai",
    company: "Okta Inc.",
    period: "2024 – Present",
    role: "SRE II",
    priority: "P2",
    tags: ["AI", "Claude Code", "Toil Reduction", "Backlog Grooming"],
    summary:
      "Running POCs to incorporate AI into SRE workflows — automating backlog grooming, dev dependency management, vulnerability ticket tagging, and routine toil reduction.",
    impact: [
      { metric: "POC", label: "AI backlog grooming" },
      { metric: "Auto", label: "Vuln ticket tagging" },
      { metric: "↓Toil", label: "Routine automation" },
    ],
    details: [
      "Exploring Claude Code for intelligent backlog grooming — dev dependency management and ticket categorization.",
      "Building AI-assisted vulnerability management — auto-tagging and prioritizing CVE tickets.",
      "Incorporating AI into routine work: Confluence page generation, sprint planning assistance, and documentation.",
      "Designed human-in-the-loop guardrails for safe AI-driven infrastructure recommendations.",
      "Positioning team at forefront of AI-augmented reliability engineering.",
    ],
    techStack: ["Claude Code", "Python", "Jira", "Confluence", "GitHub"],
  },
  {
    id: "single-tenant",
    title: "Single-Tenant Isolation",
    shortLabel: "Tenant Isolation",
    icon: "tenant",
    company: "Okta Inc.",
    period: "2023 – Present",
    role: "SRE II",
    priority: "P2",
    tags: ["Multi-tenant", "Security", "Crossplane", "Cell Build"],
    summary:
      "Designed and deployed single-tenant isolation infrastructure — enabling secure, dedicated environments for enterprise customers with namespace isolation, RBAC, and policy-enforced resource boundaries.",
    impact: [
      { metric: "Multi", label: "Customers onboarded" },
      { metric: "Secure", label: "Tenant boundaries" },
      { metric: "Scalable", label: "Cell architecture" },
    ],
    details: [
      "Built dedicated infrastructure add-on for single-tenant customer isolation.",
      "Implemented namespace isolation, RBAC policies, and encrypted secrets per tenant.",
      "Integrated with Crossplane for self-service cloud resource provisioning within tenant boundaries.",
      "Part of broader deployment automation initiative — TFLive to Crossplane migration + cell build.",
      "Enhanced tenant security while maintaining operational efficiency for the platform team.",
    ],
    techStack: ["Crossplane", "Kubernetes", "ArgoCD", "AWS", "Helm", "RBAC"],
  },
  {
    id: "cost-optimization",
    title: "Infrastructure Cost Optimization",
    shortLabel: "Cost Savings",
    icon: "cost",
    company: "Okta Inc.",
    period: "2023 – 2024",
    role: "SRE II",
    priority: "P2",
    tags: ["Cost", "RI", "Graviton", "Automation"],
    summary:
      "Drove cost-saving initiatives across infrastructure — Reserved Instance optimization, AMI deletion automation, and Graviton (ARM) testing for engineering workloads.",
    impact: [
      { metric: "RI", label: "Reserved Instances" },
      { metric: "AMI", label: "Deletion automation" },
      { metric: "ARM", label: "Graviton testing" },
    ],
    details: [
      "Optimized Reserved Instance purchasing and utilization across AWS accounts.",
      "Built AMI deletion automation during hackathon/fixit days — eliminated orphaned AMIs reducing storage costs.",
      "Led eng-rs Graviton (ARM) instance testing for cost-performance optimization of engineering workloads.",
      "Balanced cost efficiency with reliability — no sacrifice of security or availability standards.",
      "Contributed to holistic infrastructure understanding: performance, security, and cost as unified goals.",
    ],
    techStack: ["AWS", "EC2", "Graviton", "Packer", "Cost Explorer"],
  },
  {
    id: "tooling-hackathons",
    title: "Tooling Improvements (Hackathons)",
    shortLabel: "Tooling",
    icon: "tooling",
    company: "Okta Inc.",
    period: "2022 – Present",
    role: "SRE I / II",
    priority: "P2",
    tags: ["azuquactl", "OIDC", "Hackathon", "Fixit Days"],
    summary:
      "Shipped high-impact tooling improvements during hackathons and fixit days — AMI deletion automation, azuquactl Kubernetes OIDC browser auth, and AMI package version lookup.",
    impact: [
      { metric: "OIDC", label: "Browser auth flow" },
      { metric: "Auto", label: "AMI cleanup" },
      { metric: "Audit", label: "Package versions" },
    ],
    details: [
      "azuquactl Kubernetes OIDC authentication with browser redirection — modern, secure cluster access.",
      "AMI deletion automation — prevents orphaned image accumulation and reduces AWS storage costs.",
      "List package versions corresponding to an AMI — audit traceability for compliance and debugging.",
      "Demonstrates proactive problem-solving beyond assigned project scope.",
      "Improvements adopted into daily engineering workflows across the team.",
    ],
    techStack: ["Golang", "azuquactl", "OIDC", "AWS", "Packer", "Python"],
  },
  {
    id: "cicd-pipeline",
    title: "CI/CD Pipeline Transformation",
    shortLabel: "CI/CD Pipeline",
    icon: "pipeline",
    company: "Great Software Laboratory",
    period: "2016 – 2019",
    role: "Software Engineer",
    tags: ["Jenkins", "Docker", "Kubernetes", "DevOps"],
    summary:
      "Minimized deployment time from 4 days to 2 hours by building end-to-end CI/CD pipelines with Jenkins, Docker, and Kubernetes for weekly production releases.",
    impact: [
      { metric: "4d→2h", label: "Deploy time" },
      { metric: "Weekly", label: "Release cadence" },
      { metric: "0", label: "Manual steps" },
    ],
    details: [
      "Designed Jenkins pipelines: lint → test → containerize → deploy → smoke test.",
      "Containerized services with Docker for consistent dev/staging/prod environments.",
      "Deployed on Kubernetes with rolling updates, resource limits, and health probes.",
      "Pioneered DevOps culture — first team to achieve fully automated weekly releases.",
    ],
    techStack: ["Jenkins", "Docker", "Kubernetes", "Python", "Git"],
  },
];

export const dockItems = [
  { id: "home", label: "Home", icon: "home", action: "home" as const },
  { id: "work", label: "Work", icon: "work", action: "work" as const },
  { id: "leadership", label: "Lead", icon: "leadership", action: "leadership" as const },
  { id: "skills", label: "Skills", icon: "skills", action: "skills" as const },
  { id: "contact", label: "Contact", icon: "contact", action: "contact" as const },
  { id: "resume", label: "Resume", icon: "resume", action: "resume" as const },
];
