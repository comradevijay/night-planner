import { useState } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext.jsx";
import ScheduleTab from "./components/ScheduleTab.jsx";
import StudyTab    from "./components/StudyTab.jsx";
import MealTab     from "./components/MealTab.jsx";

const TABS = [
  { label: "Schedule", icon: "📅", color: "#6366f1" },
  { label: "IT Study",  icon: "💻", color: "#8b5cf6" },
  { label: "Meals",     icon: "🥗", color: "#f97316" },
];

const BADGES = [
  { emoji: "🌙", label: "Night Shift", color: "#6366f1" },
  { emoji: "💪", label: "Fitness",     color: "#10b981" },
  { emoji: "💻", label: "IT Prep",     color: "#8b5cf6" },
  { emoji: "🎯", label: "Job Hunt",    color: "#ec4899" },
];

function Inner() {
  const { theme, toggle } = useTheme();
  const [tab, setTab] = useState(0);
  const isDark = theme.name === "dark";

  return (
    <div style={{
      minHeight: "100vh",
      background: theme.bg,
      color: theme.text,
      transition: "background 0.35s, color 0.3s",
    }}>

      {/* ── HERO ── */}
      <div style={{
        background: theme.bgHero,
        padding: "40px 20px 32px",
        textAlign: "center",
        borderBottom: `1px solid ${theme.borderStrong}`,
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Animated glow blobs */}
        <div style={{
          position: "absolute", top: -100, left: "20%", width: 300, height: 300,
          background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)",
          borderRadius: "50%", pointerEvents: "none",
          animation: "floatBob 6s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", top: -60, right: "15%", width: 200, height: 200,
          background: "radial-gradient(circle, rgba(16,185,129,0.14) 0%, transparent 70%)",
          borderRadius: "50%", pointerEvents: "none",
          animation: "floatBob 8s ease-in-out infinite reverse",
        }} />

        {/* Theme toggle */}
        <button onClick={toggle} title={isDark ? "Light mode" : "Dark mode"} style={{
          position: "absolute", top: 16, right: 16, zIndex: 5,
          width: 42, height: 42, borderRadius: 14,
          border: `1px solid ${theme.border}`,
          background: theme.bgCard,
          cursor: "pointer", fontSize: 19,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: theme.shadowCard,
          transition: "all 0.2s",
        }}>
          {isDark ? "☀️" : "🌙"}
        </button>

        {/* Hero icon */}
        <div style={{
          width: 70, height: 70, borderRadius: 22,
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 34, margin: "0 auto 16px",
          boxShadow: "0 8px 30px rgba(139,92,246,0.45)",
          animation: "floatBob 4s ease-in-out infinite",
        }}>🌙</div>

        <h1 className="gradient-text" style={{
          margin: "0 0 10px",
          fontSize: "clamp(22px, 5vw, 32px)",
          fontWeight: 900, letterSpacing: "-0.8px",
          lineHeight: 1.1,
        }}>
          Night Shift Life Planner
        </h1>

        <p style={{ margin: "0 0 20px", fontSize: 14, color: theme.textFaint, letterSpacing: 0.2 }}>
          Work 10PM→8AM · Workout · Study IT · Apply Jobs · Eat Right
        </p>

        {/* Badges */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap" }}>
          {BADGES.map(b => (
            <span key={b.label} className="anim-popIn" style={{
              background: b.color + "18",
              border: `1px solid ${b.color}35`,
              borderRadius: 99, padding: "6px 14px",
              fontSize: 12, color: b.color, fontWeight: 700,
              display: "flex", alignItems: "center", gap: 5,
            }}>
              {b.emoji} {b.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── TAB BAR ── */}
      <div style={{
        display: "flex",
        background: isDark ? "rgba(6,9,17,0.9)" : "rgba(255,255,255,0.95)",
        backdropFilter: "blur(16px)",
        borderBottom: `1px solid ${theme.borderStrong}`,
        position: "sticky", top: 0, zIndex: 50,
        boxShadow: isDark ? "0 4px 24px rgba(0,0,0,0.3)" : "0 4px 24px rgba(0,0,0,0.06)",
      }}>
        {TABS.map((t, i) => {
          const active = tab === i;
          return (
            <button key={i} onClick={() => setTab(i)} style={{
              flex: 1, padding: "14px 6px 12px",
              border: "none", cursor: "pointer",
              background: "transparent",
              color: active ? t.color : theme.textFaint,
              fontWeight: active ? 800 : 600,
              fontSize: "clamp(11px, 2.8vw, 13px)",
              transition: "all 0.2s",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
              position: "relative",
            }}>
              <span style={{ fontSize: 18, transition: "transform 0.2s", transform: active ? "scale(1.15)" : "scale(1)" }}>
                {t.icon}
              </span>
              <span>{t.label}</span>
              {/* Active underline */}
              <span style={{
                position: "absolute", bottom: 0, left: "20%", right: "20%",
                height: 3, borderRadius: "3px 3px 0 0",
                background: active ? `linear-gradient(90deg, ${t.color}, ${t.color}88)` : "transparent",
                boxShadow: active ? `0 0 8px ${t.color}80` : "none",
                transition: "all 0.25s",
              }} />
            </button>
          );
        })}
      </div>

      {/* ── CONTENT ── */}
      <div style={{ maxWidth: 740, margin: "0 auto", padding: "22px 16px 72px" }}>
        {tab === 0 && <ScheduleTab key="schedule" />}
        {tab === 1 && <StudyTab   key="study"    />}
        {tab === 2 && <MealTab    key="meals"    />}
      </div>

      {/* Footer */}
      <div style={{
        textAlign: "center", padding: "0 16px 28px",
        color: theme.textGhost, fontSize: 12,
        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
      }}>
        <span style={{ flex: 1, height: 1, background: theme.border, maxWidth: 80 }} />
        Stay consistent · Results come in 90 days 🚀
        <span style={{ flex: 1, height: 1, background: theme.border, maxWidth: 80 }} />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Inner />
    </ThemeProvider>
  );
}