import { useState } from "react";
import { schedule, categoryColors } from "../data/schedule.js";
import { useTheme } from "../context/ThemeContext.jsx";
import { Dot, Divider, TipBox, PillButton, ExpandCard, IconBadge, Chevron, StatCard, CategoryTag } from "./UI.jsx";

const CATEGORIES = [
  { id: "sleep",    icon: "😴" },
  { id: "meal",     icon: "🍛" },
  { id: "workout",  icon: "💪" },
  { id: "study",    icon: "📚" },
  { id: "jobs",     icon: "🎯" },
  { id: "personal", icon: "🌟" },
  { id: "work",     icon: "💼" },
];

const STATS = [
  { label: "Sleep",    value: "7h",   color: "#6366f1", icon: "😴" },
  { label: "Workout",  value: "1.5h", color: "#10b981", icon: "💪" },
  { label: "Study",    value: "2.5h", color: "#8b5cf6", icon: "📚" },
  { label: "Job Hunt", value: "1h",   color: "#ec4899", icon: "🎯" },
  { label: "Meals",    value: "5x",   color: "#f97316", icon: "🍛" },
];

export default function ScheduleTab() {
  const { theme } = useTheme();
  const [expanded, setExpanded] = useState(null);
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? schedule : schedule.filter(s => s.category === filter);

  return (
    <div>
      {/* Stats */}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 24 }}>
        {STATS.map((s, i) => (
          <StatCard key={s.label} {...s} animDelay={i * 0.06} />
        ))}
      </div>

      {/* Filter pills */}
      <div style={{
        display: "flex", gap: 7, overflowX: "auto",
        paddingBottom: 10, marginBottom: 18, scrollbarWidth: "none",
      }}>
        <PillButton active={filter === "all"} color="#6366f1" onClick={() => setFilter("all")} icon="✦">
          All
        </PillButton>
        {CATEGORIES.map(cat => (
          <PillButton
            key={cat.id}
            active={filter === cat.id}
            color={categoryColors[cat.id]}
            onClick={() => setFilter(cat.id)}
            icon={cat.icon}
          >
            {cat.id.charAt(0).toUpperCase() + cat.id.slice(1)}
          </PillButton>
        ))}
      </div>

      {/* Cards */}
      {filtered.map((item, i) => {
        const open = expanded === i;
        return (
          <ExpandCard key={`${filter}-${i}`} color={item.color} isOpen={open}
            onClick={() => setExpanded(open ? null : i)}
            animDelay={i * 0.04}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 18px" }}>
              <IconBadge color={item.color} emoji={item.emoji} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span className="font-mono" style={{ fontSize: 11, color: item.color, fontWeight: 700 }}>
                    {item.time}
                  </span>
                  <CategoryTag color={item.color}>{item.category}</CategoryTag>
                </div>
                <div style={{ fontSize: 14.5, fontWeight: 800, color: theme.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {item.label}
                </div>
                {!open && (
                  <div style={{ fontSize: 12, color: theme.textFaint, marginTop: 3 }}>
                    {item.tasks.length} tasks — tap to expand
                  </div>
                )}
              </div>
              <Chevron open={open} color={item.color} />
            </div>

            {open && (
              <div className="anim-slideDown" style={{ padding: "0 18px 18px" }}>
                <Divider color={item.color} />
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {item.tasks.map((task, ti) => (
                    <div key={ti} className="anim-fadeUp" style={{
                      animationDelay: `${ti * 0.05}s`,
                      display: "flex", gap: 12, alignItems: "flex-start",
                      padding: "9px 13px",
                      background: theme.bgInput,
                      borderRadius: 10, border: `1px solid ${theme.border}`,
                      fontSize: 13, color: theme.textSub, lineHeight: 1.5,
                    }}>
                      <Dot color={item.color} />
                      {task}
                    </div>
                  ))}
                </div>
                <TipBox color={item.color}>{item.tip}</TipBox>
              </div>
            )}
          </ExpandCard>
        );
      })}

      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: "40px 20px", color: theme.textFaint }}>
          <div style={{ fontSize: 40, marginBottom: 10 }}>🔍</div>
          <div style={{ fontSize: 14 }}>No items in this category</div>
        </div>
      )}
    </div>
  );
}