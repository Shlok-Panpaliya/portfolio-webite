import { useState, useEffect } from "react";
import { profile } from "../data/portfolio";
import "./MenuBar.css";

export function MenuBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatted = time.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <header className="menu-bar">
      <div className="menu-left">
        <span className="menu-logo">◆</span>
        <span className="menu-name">{profile.name.toUpperCase()}</span>
        <nav className="menu-items">
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Window</span>
        </nav>
      </div>
      <div className="menu-right">
        <span className="menu-status">▣ Wi-Fi</span>
        <span className="menu-status">◐ 100%</span>
        <span className="menu-time">{formatted}</span>
      </div>
    </header>
  );
}
