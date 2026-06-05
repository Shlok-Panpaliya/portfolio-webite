import { PixelIcon } from "./PixelIcon";
import "./DesktopIcon.css";

interface DesktopIconProps {
  label: string;
  icon: string;
  onOpen: () => void;
  selected?: boolean;
}

export function DesktopIcon({ label, icon, onOpen, selected }: DesktopIconProps) {
  return (
    <button
      className={`desktop-icon ${selected ? "selected" : ""}`}
      onDoubleClick={onOpen}
      onClick={(e) => {
        if (e.detail === 1) {
          (e.currentTarget as HTMLButtonElement).classList.add("selected");
          document.querySelectorAll(".desktop-icon").forEach((el) => {
            if (el !== e.currentTarget) el.classList.remove("selected");
          });
        }
      }}
      aria-label={`Open ${label}`}
    >
      <div className="desktop-icon-image">
        <PixelIcon type={icon} size={44} />
      </div>
      <span className="desktop-icon-label">{label}</span>
    </button>
  );
}
