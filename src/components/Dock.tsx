import { dockItems } from "../data/portfolio";
import { PixelIcon } from "./PixelIcon";
import "./Dock.css";

interface DockProps {
  onAction: (action: string) => void;
  activeItem?: string;
}

export function Dock({ onAction, activeItem }: DockProps) {
  return (
    <footer className="dock">
      <div className="dock-inner">
        {dockItems.map((item) => (
          <button
            key={item.id}
            className={`dock-item ${activeItem === item.id ? "active" : ""}`}
            onClick={() => onAction(item.action)}
            title={item.label}
          >
            <div className="dock-icon">
              <PixelIcon type={item.icon} size={36} />
            </div>
            <span className="dock-label">{item.label}</span>
          </button>
        ))}
      </div>
    </footer>
  );
}
