import { useTheme } from "../context/ThemeContext.jsx";

export function Dot({ color }) {
  return (
    <span style={{
      width: 6, height: 6, borderRadius: "50%", background: color,
      display: "inline-block", flexShrink: 0, marginTop: 7,
    }} />
  );
}

export function Divider({ color }) {
  return (
    <div style={{
      height: 1,
      background: `linear-gradient(90deg, ${color}60, ${color}20, transparent)`,
      margin: "0 0 16px 0",
    }} />
  );
}

export function TipBox({ color, children }) {
  return (
    <div style={{
      marginTop: 14, padding: "11px 14px",
      background: `linear-gradient(135deg, ${color}12, ${color}06)`,
      borderRadius: 10, border: `1px solid ${color}30`,
      fontSize: 12.5, color, lineHeight: 1.6,
      display: "flex", gap: 8, alignItems: "flex-start",
    }}>
      <span style={{ fontSize: 14, flexShrink: 0 }}>💡</span>
      <span>{children}</span>
    </div>
  );
}

export function SectionLabel({ children }) {
  const { theme } = useTheme();
  return (
    <div style={{
      fontSize: 10, color: theme.textFaint, fontWeight: 800,
      letterSpacing: 1.5, marginBottom: 10, textTransform: "uppercase",
      display: "flex", alignItems: "center", gap: 8,
    }}>
      <span style={{ flex: 1, height: 1, background: theme.border, display: "block" }} />
      {children}
      <span style={{ flex: 1, height: 1, background: theme.border, display: "block" }} />
    </div>
  );
}

export function PillButton({ active, color, onClick, children, icon }) {
  const { theme } = useTheme();
  return (
    <button onClick={onClick} className="pill-btn" style={{
      padding: "7px 16px", borderRadius: 99, border: "none",
      cursor: "pointer", fontSize: 12, fontWeight: 700, whiteSpace: "nowrap",
      background: active
        ? `linear-gradient(135deg, ${color}, ${color}cc)`
        : theme.bgInput,
      color: active ? "#fff" : theme.textMuted,
      boxShadow: active ? `0 4px 14px ${color}40` : "none",
      display: "flex", alignItems: "center", gap: 5,
    }}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}

export function ExpandCard({ color, isOpen, onClick, children, animDelay = 0 }) {
  const { theme } = useTheme();
  return (
    <div
      onClick={onClick}
      className="card-hover anim-fadeUp"
      style={{
        animationDelay: `${animDelay}s`,
        background: isOpen
          ? `linear-gradient(135deg, ${color}10 0%, ${theme.bgCard} 100%)`
          : theme.bgCard,
        border: `1px solid ${isOpen ? color + "40" : theme.border}`,
        borderRadius: 16, marginBottom: 10,
        cursor: "pointer", overflow: "hidden",
        boxShadow: isOpen ? `0 4px 24px ${color}20, ${theme.shadowCard}` : theme.shadowCard,
        transition: "border-color 0.2s, box-shadow 0.2s, background 0.2s",
      }}
    >
      {children}
    </div>
  );
}

export function IconBadge({ color, emoji, size = 44 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: 12,
      background: `linear-gradient(135deg, ${color}28, ${color}12)`,
      border: `1px solid ${color}35`,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: size * 0.46, flexShrink: 0,
      boxShadow: `0 2px 8px ${color}20`,
    }}>
      {emoji}
    </div>
  );
}

export function Chevron({ open, color }) {
  const { theme } = useTheme();
  return (
    <div style={{
      width: 26, height: 26, borderRadius: 8,
      background: open ? (color + "20") : theme.bgInput,
      display: "flex", alignItems: "center", justifyContent: "center",
      color: open ? color : theme.textFaint,
      fontSize: 13, fontWeight: 700,
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.25s, background 0.2s, color 0.2s",
      flexShrink: 0,
    }}>
      ▾
    </div>
  );
}

export function ResourceBadges({ resource, leetcode }) {
  const { theme } = useTheme();
  return (
    <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
      <div className="anim-fadeIn" style={{
        flex: 1, minWidth: 140, padding: "10px 13px",
        background: theme.resourceBg, borderRadius: 10,
        border: `1px solid ${theme.resourceBorder}`,
      }}>
        <div style={{ fontSize: 10, color: theme.resourceLabel, fontWeight: 800, marginBottom: 5, letterSpacing: 0.8 }}>
          📺 RESOURCE
        </div>
        <div style={{ fontSize: 12, color: theme.resourceText, lineHeight: 1.5, fontWeight: 500 }}>{resource}</div>
      </div>
      <div className="anim-fadeIn" style={{
        flex: 1, minWidth: 140, padding: "10px 13px",
        background: theme.leetBg, borderRadius: 10,
        border: `1px solid ${theme.leetBorder}`,
      }}>
        <div style={{ fontSize: 10, color: theme.leetLabel, fontWeight: 800, marginBottom: 5, letterSpacing: 0.8 }}>
          🟩 LEETCODE
        </div>
        <div style={{ fontSize: 12, color: theme.leetText, lineHeight: 1.5, fontWeight: 500 }}>{leetcode}</div>
      </div>
    </div>
  );
}

export function StatCard({ label, value, color, icon }) {
  const { theme } = useTheme();
  return (
    <div className="card-hover anim-popIn" style={{
      background: theme.bgCard,
      border: `1px solid ${color}30`,
      borderRadius: 14, padding: "14px 16px",
      textAlign: "center", flex: "1 1 80px",
      boxShadow: `0 4px 16px ${color}15`,
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, ${color}, ${color}88)`,
        borderRadius: "14px 14px 0 0",
      }} />
      <div style={{ fontSize: 20, marginBottom: 4 }}>{icon}</div>
      <div style={{ fontSize: 18, fontWeight: 900, color, fontFamily: "'JetBrains Mono', monospace" }}>{value}</div>
      <div style={{ fontSize: 11, color: theme.textFaint, marginTop: 3, fontWeight: 600 }}>{label}</div>
    </div>
  );
}

export function ProgressBar({ value, max, color, label }) {
  const { theme } = useTheme();
  const pct = Math.round((value / max) * 100);
  return (
    <div style={{ marginBottom: 8 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
        <span style={{ fontSize: 12, color: theme.textMuted, fontWeight: 600 }}>{label}</span>
        <span style={{ fontSize: 12, color, fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }}>{pct}%</span>
      </div>
      <div style={{ height: 7, background: theme.bgInput, borderRadius: 99, overflow: "hidden" }}>
        <div className="progress-fill" style={{
          height: "100%", borderRadius: 99,
          background: `linear-gradient(90deg, ${color}, ${color}bb)`,
          "--target-width": `${pct}%`,
          boxShadow: `0 0 8px ${color}60`,
        }} />
      </div>
    </div>
  );
}

export function CategoryTag({ color, children }) {
  return (
    <span style={{
      padding: "3px 9px", borderRadius: 99,
      background: color + "18", border: `1px solid ${color}35`,
      fontSize: 10, fontWeight: 700, color,
      letterSpacing: 0.5, textTransform: "uppercase",
    }}>
      {children}
    </span>
  );
}