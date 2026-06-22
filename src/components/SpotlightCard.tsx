import { profile } from "../data/portfolio";
import "./SpotlightCard.css";

type SpotlightCardProps = {
  imageSrc?: string;
};

export function SpotlightCard({ imageSrc = "/og-image.png" }: SpotlightCardProps) {
  return (
    <aside className="spotlight" aria-label="Profile spotlight">
      <div className="spotlight-window">
        <div className="spotlight-titlebar">
          <div className="spotlight-controls" aria-hidden="true">
            <span className="spotlight-dot close" />
            <span className="spotlight-dot minimize" />
            <span className="spotlight-dot maximize" />
          </div>
          <div className="spotlight-title">{profile.name.toUpperCase()}</div>
          <div className="spotlight-titlebar-spacer" />
        </div>

        <div className="spotlight-body">
          <img className="spotlight-image" src={imageSrc} alt="" />

          <div className="spotlight-content">
            <div className="spotlight-headline">
              <div className="spotlight-name">{profile.name}</div>
              <div className="spotlight-role">{profile.title}</div>
              <div className="spotlight-tagline">{profile.tagline}</div>
            </div>

            <div className="spotlight-stats" aria-label="Key stats">
              {profile.stats.slice(0, 3).map((s) => (
                <div key={s.label} className="spotlight-stat">
                  <div className="spotlight-stat-value">{s.value}</div>
                  <div className="spotlight-stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="spotlight-links">
              <a className="spotlight-link" href={`mailto:${profile.email}`}>
                Email
              </a>
              <a className="spotlight-link" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="spotlight-link" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="spotlight-link primary" href="/Resume_Shlok_Panpaliya.pdf" target="_blank" rel="noreferrer">
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

