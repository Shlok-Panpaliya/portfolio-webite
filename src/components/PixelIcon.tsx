import type { ReactNode } from "react";

interface PixelIconProps {
  type: string;
  size?: number;
}

export function PixelIcon({ type, size = 48 }: PixelIconProps) {
  const icons: Record<string, ReactNode> = {
    about: (
      <svg viewBox="0 0 16 16" width={size} height={size} style={{ imageRendering: "pixelated" }}>
        <rect x="5" y="2" width="6" height="5" fill="#f4c4a0" />
        <rect x="4" y="3" width="8" height="3" fill="#2c1810" />
        <rect x="6" y="4" width="1" height="1" fill="#fff" />
        <rect x="9" y="4" width="1" height="1" fill="#fff" />
        <rect x="7" y="5" width="2" height="1" fill="#e8a090" />
        <rect x="4" y="7" width="8" height="4" fill="#4a90d9" />
        <rect x="3" y="8" width="1" height="2" fill="#4a90d9" />
        <rect x="12" y="8" width="1" height="2" fill="#4a90d9" />
        <rect x="5" y="9" width="6" height="3" fill="#2d5a8e" />
        <rect x="3" y="11" width="10" height="1" fill="#c0c0c0" />
        <rect x="4" y="12" width="8" height="2" fill="#e8e8e8" />
        <rect x="5" y="13" width="6" height="1" fill="#4a90d9" />
      </svg>
    ),
    ai: (
      <svg viewBox="0 0 16 16" width={size} height={size} style={{ imageRendering: "pixelated" }}>
        <rect x="3" y="1" width="10" height="10" fill="#1a1a2e" />
        <rect x="4" y="2" width="8" height="8" fill="#16213e" />
        <rect x="5" y="4" width="2" height="2" fill="#00ff88" />
        <rect x="9" y="4" width="2" height="2" fill="#00ff88" />
        <rect x="6" y="7" width="4" height="1" fill="#00ff88" />
        <rect x="5" y="8" width="6" height="1" fill="#00cc6a" />
        <rect x="2" y="11" width="12" height="3" fill="#0f3460" />
        <rect x="3" y="12" width="2" height="1" fill="#e94560" />
        <rect x="6" y="12" width="4" height="1" fill="#00ff88" />
        <rect x="11" y="12" width="2" height="1" fill="#e94560" />
      </svg>
    ),
    gitops: (
      <svg viewBox="0 0 16 16" width={size} height={size} style={{ imageRendering: "pixelated" }}>
        <rect x="1" y="3" width="14" height="10" fill="#326ce5" />
        <rect x="2" y="4" width="12" height="8" fill="#1a3a6e" />
        <rect x="3" y="5" width="3" height="2" fill="#00ff88" />
        <rect x="7" y="5" width="3" height="2" fill="#ff6b35" />
        <rect x="11" y="5" width="2" height="2" fill="#00ff88" />
        <rect x="3" y="8" width="10" height="1" fill="#4a9eff" />
        <rect x="3" y="9" width="6" height="2" fill="#2d5a8e" />
        <rect x="10" y="9" width="3" height="2" fill="#00ff88" />
        <rect x="6" y="1" width="4" height="2" fill="#ff6b35" />
      </svg>
    ),
    ami: (
      <svg viewBox="0 0 16 16" width={size} height={size} style={{ imageRendering: "pixelated" }}>
        <rect x="2" y="2" width="12" height="9" fill="#2d3436" />
        <rect x="3" y="3" width="10" height="7" fill="#0984e3" />
        <rect x="4" y="4" width="8" height="5" fill="#74b9ff" />
        <rect x="5" y="5" width="6" height="3" fill="#dfe6e9" />
        <rect x="6" y="6" width="4" height="1" fill="#0984e3" />
        <rect x="7" y="11" width="2" height="3" fill="#636e72" />
        <rect x="5" y="14" width="6" height="1" fill="#636e72" />
        <rect x="12" y="1" width="3" height="3" fill="#00b894" />
        <rect x="13" y="2" width="1" height="1" fill="#fff" />
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 16 16" width={size} height={size} style={{ imageRendering: "pixelated" }}>
        <rect x="4" y="1" width="8" height="2" fill="#6c5ce7" />
        <rect x="3" y="3" width="10" height="2" fill="#5a4bd1" />
        <rect x="2" y="5" width="12" height="3" fill="#4a3ab8" />
        <rect x="3" y="8" width="10" height="3" fill="#3a2a9e" />
        <rect x="4" y="11" width="8" height="2" fill="#2a1a84" />
        <rect x="6" y="13" width="4" height="2" fill="#1a0a6a" />
        <rect x="6" y="5" width="4" height="4" fill="#00cec9" />
        <rect x="7" y="6" width="2" height="2" fill="#fff" />
      </svg>
    ),
    compliance: (
      <svg viewBox="0 0 16 16" width={size} height={size} style={{ imageRendering: "pixelated" }}>
        <rect x="3" y="1" width="10" height="13" fill="#f8f9fa" />
        <rect x="4" y="2" width="8" height="11" fill="#fff" />
        <rect x="5" y="3" width="6" height="1" fill="#2d3436" />
        <rect x="5" y="5" width="4" height="1" fill="#636e72" />
        <rect x="5" y="7" width="5" height="1" fill="#636e72" />
        <rect x="5" y="9" width="3" height="1" fill="#636e72" />
        <rect x="9" y="10" width="4" height="4" fill="#00b894" />
        <rect x="10" y="11" width="2" height="2" fill="#fff" />
        <rect x="10" y="12" width="1" height="1" fill="#00b894" />
        <rect x="11" y="11" width="1" height="1" fill="#00b894" />
      </svg>
    ),
    globe: (
      <svg viewBox="0 0 16 16" width={size} height={size} style={{ imageRendering: "pixelated" }}>
        <rect x="4" y="2" width="8" height="12" fill="#0984e3" />
        <rect x="3" y="4" width="10" height="8" fill="#74b9ff" />
        <rect x="2" y="6" width="12" height="4" fill="#0984e3" />
        <rect x="5" y="3" width="6" height="10" fill="#55efc4" />
        <rect x="3" y="7" width="10" height="2" fill="#00b894" />
        <rect x="7" y="2" width="2" height="12" fill="#2d3436" opacity="0.3" />
        <rect x="2" y="7" width="12" height="2" fill="#2d3436" opacity="0.3" />
        <rect x="6" y="5" width="2" height="2" fill="#00b894" />
        <rect x="9" y="8" width="2" height="2" fill="#00b894" />
      </svg>
    ),
    terraform: (
      <svg viewBox="0 0 16 16" width={size} height={size} style={{ imageRendering: "pixelated" }}>
        <rect x="1" y="4" width="5" height="4" fill="#7b42bc" />
        <rect x="1" y="9" width="5" height="4" fill="#7b42bc" />
        <rect x="7" y="2" width="5" height="4" fill="#5c4ee5" />
        <rect x="7" y="7" width="5" height="4" fill="#5c4ee5" />
        <rect x="10" y="11" width="5" height="4" fill="#844fba" />
      </svg>
    ),
    metrics: (
      <svg viewBox="0 0 16 16" width={size} height={size} style={{ imageRendering: "pixelated" }}>
        <rect x="1" y="1" width="14" height="11" fill="#2d3436" />
        <rect x="2" y="2" width="12" height="9" fill="#1a1a2e" />
        <rect x="3" y="8" width="2" height="2" fill="#00ff88" />
        <rect x="6" y="6" width="2" height="4" fill="#ff6b35" />
        <rect x="9" y="4" width="2" height="6" fill="#00ff88" />
        <rect x="12" y="5" width="1" height="5" fill="#4a9eff" />
        <rect x="2" y="12" width="12" height="3" fill="#636e72" />
        <rect x="3" y="13" width="3" height="1" fill="#00ff88" />
        <rect x="7" y="13" width="3" height="1" fill="#ff6b35" />
      </svg>
    ),
    k8s: (
      <svg viewBox="0 0 16 16" width={size} height={size} style={{ imageRendering: "pixelated" }}>
        <rect x="7" y="1" width="2" height="14" fill="#326ce5" />
        <rect x="1" y="7" width="14" height="2" fill="#326ce5" />
        <rect x="3" y="3" width="4" height="4" fill="#326ce5" />
        <rect x="9" y="3" width="4" height="4" fill="#326ce5" />
        <rect x="3" y="9" width="4" height="4" fill="#326ce5" />
        <rect x="9" y="9" width="4" height="4" fill="#326ce5" />
        <rect x="4" y="4" width="2" height="2" fill="#fff" />
        <rect x="10" y="4" width="2" height="2" fill="#fff" />
        <rect x="4" y="10" width="2" height="2" fill="#fff" />
        <rect x="10" y="10" width="2" height="2" fill="#fff" />
      </svg>
    ),
    pipeline: (
      <svg viewBox="0 0 16 16" width={size} height={size} style={{ imageRendering: "pixelated" }}>
        <rect x="1" y="6" width="3" height="4" fill="#e17055" />
        <rect x="5" y="6" width="2" height="4" fill="#fdcb6e" />
        <rect x="8" y="6" width="3" height="4" fill="#00b894" />
        <rect x="12" y="6" width="3" height="4" fill="#0984e3" />
        <rect x="3" y="7" width="2" height="2" fill="#fff" />
        <rect x="9" y="7" width="2" height="2" fill="#fff" />
        <rect x="13" y="7" width="1" height="2" fill="#fff" />
        <rect x="4" y="3" width="8" height="2" fill="#636e72" />
        <rect x="6" y="2" width="4" height="1" fill="#2d3436" />
        <rect x="4" y="11" width="8" height="2" fill="#636e72" />
      </svg>
    ),
    ml: (
      <svg viewBox="0 0 16 16" width={size} height={size} style={{ imageRendering: "pixelated" }}>
        <rect x="3" y="2" width="10" height="8" fill="#6c5ce7" />
        <rect x="4" y="3" width="8" height="6" fill="#a29bfe" />
        <rect x="5" y="4" width="2" height="2" fill="#fff" />
        <rect x="9" y="4" width="2" height="2" fill="#fff" />
        <rect x="6" y="7" width="4" height="1" fill="#2d3436" />
        <rect x="2" y="10" width="12" height="4" fill="#2d3436" />
        <rect x="3" y="11" width="2" height="2" fill="#00ff88" />
        <rect x="6" y="11" width="2" height="2" fill="#ff6b35" />
        <rect x="9" y="11" width="2" height="2" fill="#4a9eff" />
        <rect x="12" y="11" width="1" height="2" fill="#e94560" />
      </svg>
    ),
    home: (
      <svg viewBox="0 0 16 16" width={size} height={size} style={{ imageRendering: "pixelated" }}>
        <rect x="6" y="2" width="4" height="2" fill="#e17055" />
        <rect x="4" y="4" width="8" height="2" fill="#d63031" />
        <rect x="2" y="6" width="12" height="7" fill="#fdcb6e" />
        <rect x="4" y="8" width="4" height="5" fill="#6c5ce7" />
        <rect x="9" y="8" width="3" height="3" fill="#74b9ff" />
      </svg>
    ),
    work: (
      <svg viewBox="0 0 16 16" width={size} height={size} style={{ imageRendering: "pixelated" }}>
        <rect x="2" y="5" width="12" height="9" fill="#636e72" />
        <rect x="3" y="6" width="10" height="7" fill="#2d3436" />
        <rect x="5" y="2" width="6" height="4" fill="#636e72" />
        <rect x="6" y="3" width="4" height="2" fill="#b2bec3" />
        <rect x="4" y="8" width="3" height="2" fill="#00ff88" />
        <rect x="8" y="8" width="4" height="1" fill="#74b9ff" />
        <rect x="8" y="10" width="4" height="1" fill="#74b9ff" />
      </svg>
    ),
    skills: (
      <svg viewBox="0 0 16 16" width={size} height={size} style={{ imageRendering: "pixelated" }}>
        <rect x="2" y="2" width="12" height="12" fill="#2d3436" />
        <rect x="3" y="3" width="10" height="10" fill="#1a1a2e" />
        <rect x="4" y="5" width="8" height="1" fill="#00ff88" />
        <rect x="4" y="7" width="6" height="1" fill="#4a9eff" />
        <rect x="4" y="9" width="7" height="1" fill="#ff6b35" />
        <rect x="4" y="11" width="5" height="1" fill="#e94560" />
      </svg>
    ),
    contact: (
      <svg viewBox="0 0 16 16" width={size} height={size} style={{ imageRendering: "pixelated" }}>
        <rect x="1" y="4" width="14" height="9" fill="#e17055" />
        <rect x="2" y="5" width="12" height="7" fill="#fff" />
        <rect x="2" y="4" width="14" height="3" fill="#d63031" />
        <rect x="4" y="8" width="8" height="1" fill="#636e72" />
        <rect x="4" y="10" width="6" height="1" fill="#b2bec3" />
      </svg>
    ),
    resume: (
      <svg viewBox="0 0 16 16" width={size} height={size} style={{ imageRendering: "pixelated" }}>
        <rect x="3" y="1" width="10" height="14" fill="#f8f9fa" />
        <rect x="4" y="2" width="8" height="12" fill="#fff" />
        <rect x="5" y="3" width="6" height="2" fill="#0984e3" />
        <rect x="5" y="6" width="6" height="1" fill="#636e72" />
        <rect x="5" y="8" width="5" height="1" fill="#b2bec3" />
        <rect x="5" y="10" width="6" height="1" fill="#b2bec3" />
        <rect x="5" y="12" width="4" height="1" fill="#b2bec3" />
      </svg>
    ),
    security: (
      <svg viewBox="0 0 16 16" width={size} height={size} style={{ imageRendering: "pixelated" }}>
        <rect x="2" y="2" width="12" height="12" fill="#2d3436" />
        <rect x="3" y="3" width="10" height="10" fill="#e17055" />
        <rect x="5" y="5" width="6" height="6" fill="#d63031" />
        <rect x="6" y="6" width="4" height="4" fill="#fff" />
        <rect x="7" y="7" width="2" height="2" fill="#00b894" />
        <rect x="12" y="1" width="3" height="3" fill="#00ff88" />
        <rect x="13" y="2" width="1" height="1" fill="#fff" />
      </svg>
    ),
    cost: (
      <svg viewBox="0 0 16 16" width={size} height={size} style={{ imageRendering: "pixelated" }}>
        <rect x="3" y="2" width="10" height="12" fill="#00b894" />
        <rect x="4" y="3" width="8" height="10" fill="#55efc4" />
        <rect x="6" y="5" width="4" height="6" fill="#00b894" />
        <rect x="7" y="4" width="2" height="1" fill="#2d3436" />
        <rect x="5" y="11" width="6" height="1" fill="#2d3436" />
        <rect x="1" y="13" width="3" height="2" fill="#fdcb6e" />
        <rect x="12" y="13" width="3" height="2" fill="#fdcb6e" />
      </svg>
    ),
    tooling: (
      <svg viewBox="0 0 16 16" width={size} height={size} style={{ imageRendering: "pixelated" }}>
        <rect x="2" y="6" width="12" height="3" fill="#636e72" />
        <rect x="4" y="4" width="3" height="5" fill="#b2bec3" />
        <rect x="9" y="4" width="3" height="5" fill="#b2bec3" />
        <rect x="6" y="2" width="4" height="2" fill="#fdcb6e" />
        <rect x="7" y="9" width="2" height="5" fill="#636e72" />
        <rect x="5" y="13" width="6" height="2" fill="#2d3436" />
        <rect x="11" y="1" width="4" height="4" fill="#0984e3" />
        <rect x="12" y="2" width="2" height="2" fill="#74b9ff" />
      </svg>
    ),
    tenant: (
      <svg viewBox="0 0 16 16" width={size} height={size} style={{ imageRendering: "pixelated" }}>
        <rect x="1" y="3" width="6" height="10" fill="#6c5ce7" />
        <rect x="9" y="3" width="6" height="10" fill="#a29bfe" />
        <rect x="2" y="4" width="4" height="8" fill="#fff" />
        <rect x="10" y="4" width="4" height="8" fill="#fff" />
        <rect x="7" y="6" width="2" height="4" fill="#2d3436" />
        <rect x="3" y="6" width="2" height="2" fill="#74b9ff" />
        <rect x="11" y="6" width="2" height="2" fill="#74b9ff" />
        <rect x="7" y="1" width="2" height="2" fill="#e17055" />
      </svg>
    ),
    leadership: (
      <svg viewBox="0 0 16 16" width={size} height={size} style={{ imageRendering: "pixelated" }}>
        <rect x="6" y="1" width="4" height="4" fill="#f4c4a0" />
        <rect x="5" y="2" width="6" height="2" fill="#2c1810" />
        <rect x="4" y="5" width="8" height="4" fill="#e17055" />
        <rect x="1" y="7" width="4" height="3" fill="#4a90d9" />
        <rect x="11" y="7" width="4" height="3" fill="#4a90d9" />
        <rect x="2" y="8" width="2" height="1" fill="#fff" />
        <rect x="12" y="8" width="2" height="1" fill="#fff" />
        <rect x="3" y="10" width="10" height="1" fill="#fdcb6e" />
        <rect x="5" y="11" width="6" height="4" fill="#6c5ce7" />
        <rect x="6" y="12" width="4" height="2" fill="#a29bfe" />
      </svg>
    ),
  };

  return icons[type] ?? icons.about;
}
