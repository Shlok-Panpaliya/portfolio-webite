import { useState, useCallback } from "react";
import { MenuBar } from "./components/MenuBar";
import { Dock } from "./components/Dock";
import { DesktopIcon } from "./components/DesktopIcon";
import { Window } from "./components/Window";
import {
  profile,
  projects,
  experience,
  skills,
  education,
  leadership,
  type Project,
} from "./data/portfolio";
import "./App.css";

type OpenWindow = {
  id: string;
  title: string;
  content: React.ReactNode;
  width?: number;
};

function AboutContent() {
  return (
    <>
      <h2>About Me</h2>
      <p>
        <strong>{profile.title}</strong> · {profile.location}
      </p>
      <p>{profile.summary}</p>
      <div className="about-stats">
        <div className="stat-box">
          <span className="stat-value">{profile.yearsExperience}</span>
          <span className="stat-label">Years Experience</span>
        </div>
        <div className="stat-box">
          <span className="stat-value">{profile.uptime}</span>
          <span className="stat-label">Uptime SLA</span>
        </div>
        <div className="stat-box">
          <span className="stat-value">800→70</span>
          <span className="stat-label">Vuln Reduction</span>
        </div>
      </div>
      <h3>What I Bring</h3>
      <ul>
        {profile.aboutExtended.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <h3>Education</h3>
      {education.map((edu) => (
        <p key={edu.school}>
          <strong>{edu.degree}</strong>
          <br />
          {edu.school}, {edu.location} — {edu.year}
        </p>
      ))}
    </>
  );
}

function ProjectContent({ project }: { project: Project }) {
  return (
    <>
      <h2>
        {project.title}
        {project.priority && (
          <span className={`priority-badge ${project.priority.toLowerCase()}`}>
            {project.priority}
          </span>
        )}
      </h2>
      <p className="experience-meta">
        {project.company} · {project.role} · {project.period}
      </p>
      <p>{project.summary}</p>
      <div className="impact-grid">
        {project.impact.map((imp) => (
          <div key={imp.label} className="impact-card">
            <span className="impact-metric">{imp.metric}</span>
            <span className="impact-label">{imp.label}</span>
          </div>
        ))}
      </div>
      <div className="tag-list">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <h3>Details</h3>
      <ul>
        {project.details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
      <h3>Tech Stack</h3>
      <div className="tech-stack">
        {project.techStack.map((tech) => (
          <span key={tech} className="tech-pill">
            {tech}
          </span>
        ))}
      </div>
    </>
  );
}

function WorkContent() {
  return (
    <>
      <h2>Professional Experience</h2>
      <p>
        7+ years at Okta driving P1/P2 infrastructure initiatives — from FL16 APAC
        cell builds to bedrock vulnerability remediation, FedRAMP compliance, and
        Terraform → Crossplane GitOps migration.
      </p>
      {experience.map((exp) => (
        <div key={`${exp.company}-${exp.period}`} className="experience-item">
          <h4>
            {exp.role} — {exp.company}
          </h4>
          <p className="experience-meta">
            {exp.location} · {exp.period}
          </p>
          <ul>
            {exp.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

function LeadershipContent() {
  return (
    <>
      <h2>{leadership.title}</h2>
      <p>{leadership.summary}</p>
      {leadership.highlights.map((section) => (
        <div key={section.area} className="experience-item">
          <h4>{section.area}</h4>
          <ul>
            {section.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

function SkillsContent() {
  const categories = [
    { title: "Languages", items: skills.languages },
    { title: "Cloud Platforms", items: skills.cloud },
    { title: "Infrastructure & Orchestration", items: skills.infrastructure },
    { title: "Observability", items: skills.observability },
    { title: "CI/CD & Version Control", items: skills.cicd },
    { title: "Platforms & Compliance", items: skills.platforms },
  ];

  return (
    <>
      <h2>Technical Skills</h2>
      <p>
        Full-stack infrastructure engineer — comfortable from kernel-level Linux
        debugging to GitOps deployment pipelines and AI-assisted operations.
      </p>
      {categories.map((cat) => (
        <div key={cat.title} className="skill-category">
          <h4>{cat.title}</h4>
          <div className="tech-stack">
            {cat.items.map((item) => (
              <span key={item} className="tech-pill">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

function ContactContent() {
  return (
    <>
      <h2>Get In Touch</h2>
      <p>
        Open to Senior / Staff SRE roles at top-tier technology companies. Let's
        build reliable systems together.
      </p>
      <a href={`mailto:${profile.email}`} className="contact-link">
        ✉ {profile.email}
      </a>
      <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="contact-link">
        ☎ {profile.phone}
      </a>
      {/* <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
      >
        in linkedin.com/in/mansi-panpaliya6
      </a> */}
    </>
  );
}

function App() {
  const [windows, setWindows] = useState<OpenWindow[]>([]);
  const [topZ, setTopZ] = useState(100);

  const openWindow = useCallback(
    (id: string, title: string, content: React.ReactNode, width?: number) => {
      setWindows((prev) => {
        const existing = prev.find((w) => w.id === id);
        if (existing) {
          return prev.map((w) => (w.id === id ? { ...w, content } : w));
        }
        return [...prev, { id, title, content, width }];
      });
      setTopZ((z) => z + 1);
    },
    []
  );

  const closeWindow = useCallback((id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  }, []);

  const focusWindow = useCallback((id: string) => {
    setTopZ((z) => z + 1);
    setWindows((prev) => {
      const win = prev.find((w) => w.id === id);
      if (!win) return prev;
      return [...prev.filter((w) => w.id !== id), win];
    });
  }, []);

  const handleDockAction = (action: string) => {
    switch (action) {
      case "home":
        closeWindow("about");
        openWindow("about", "About Me", <AboutContent />, 600);
        break;
      case "work":
        openWindow("work", "Experience", <WorkContent />, 640);
        break;
      case "leadership":
        openWindow("leadership", "Leadership & Impact", <LeadershipContent />, 640);
        break;
      case "skills":
        openWindow("skills", "Technical Skills", <SkillsContent />, 580);
        break;
      case "contact":
        openWindow("contact", "Contact", <ContactContent />, 480);
        break;
      case "resume":
        window.open("/Resume_Mansi_Saboo.pdf", "_blank");
        break;
    }
  };

  const openProject = (project: Project) => {
    openWindow(
      project.id,
      project.title,
      <ProjectContent project={project} />,
      600
    );
  };

  const desktopIcons = [
    { id: "about", label: "About Me", icon: "about", action: () => handleDockAction("home") },
    ...projects.map((p) => ({
      id: p.id,
      label: p.shortLabel,
      icon: p.icon,
      action: () => openProject(p),
    })),
  ];

  return (
    <div className="desktop">
      <MenuBar />

      <div className="wallpaper">
        <div className="wallpaper-sky" />
        <div className="wallpaper-mountains" />
        <div className="wallpaper-grid" />
      </div>

      <main className="desktop-area">
        <div className="desktop-icons-grid">
          {desktopIcons.map((item) => (
            <DesktopIcon
              key={item.id}
              label={item.label}
              icon={item.icon}
              onOpen={item.action}
            />
          ))}
        </div>

        <div className="desktop-tip" role="note">
          TIP ▸ double-click any icon to open
        </div>
      </main>

      <Dock onAction={handleDockAction} />

      {windows.map((win, index) => (
        <Window
          key={win.id}
          title={win.title}
          onClose={() => closeWindow(win.id)}
          width={win.width}
          zIndex={topZ - (windows.length - 1 - index)}
          onFocus={() => focusWindow(win.id)}
        >
          {win.content}
        </Window>
      ))}
    </div>
  );
}

export default App;
