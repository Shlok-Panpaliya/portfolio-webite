import { useEffect, useRef } from "react";
import "./Window.css";

interface WindowProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  width?: number;
  zIndex: number;
  onFocus: () => void;
}

export function Window({ title, onClose, children, width = 560, zIndex, onFocus }: WindowProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div
      ref={ref}
      className="window"
      style={{ width, zIndex }}
      onMouseDown={onFocus}
      tabIndex={-1}
    >
      <div className="window-titlebar">
        <div className="window-controls">
          <button className="window-btn close" onClick={onClose} aria-label="Close" />
          <button className="window-btn minimize" aria-label="Minimize" />
          <button className="window-btn maximize" aria-label="Maximize" />
        </div>
        <span className="window-title">{title}</span>
        <div className="window-controls-spacer" />
      </div>
      <div className="window-content">{children}</div>
    </div>
  );
}
