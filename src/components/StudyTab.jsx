import { useState } from "react";
import { weeklyStudyPlan } from "../data/studyPlan.js";
import { useTheme } from "../context/ThemeContext.jsx";
import { Divider, SectionLabel, ExpandCard, Chevron, ResourceBadges, ProgressBar } from "./UI.jsx";

const MONTH_ICONS = ["🌱", "🔧", "🚀"];

// Build a flat list of all week keys for progress tracking
const ALL_WEEKS = weeklyStudyPlan.flatMap((m, mi) =>
  m.weeks.map((w, wi) => `${mi}-${wi}`)
);

function DayCard({ session, weekColor, isOpen, onToggle, idx, checkedItems, onCheck }) {
  const { theme } = useTheme();
  const total   = session.items.length;
  const checked = checkedItems.filter(Boolean).length;
  const allDone = checked === total;

  return (
    <ExpandCard color={weekColor} isOpen={isOpen} onClick={onToggle} animDelay={idx * 0.05}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px" }}>
        {/* Day badge */}
        <div style={{
          width: 42, height: 42, borderRadius: 12,
          background: allDone
            ? `linear-gradient(135deg, #10b981, #059669)`
            : isOpen
              ? `linear-gradient(135deg, ${weekColor}, ${weekColor}99)`
              : `linear-gradient(135deg, ${weekColor}25, ${weekColor}10)`,
          border: `1px solid ${allDone ? "#10b98160" : weekColor + "50"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 12, fontWeight: 900,
          color: (allDone || isOpen) ? "#fff" : weekColor,
          flexShrink: 0, transition: "all 0.25s",
          boxShadow: allDone ? "0 4px 12px rgba(16,185,129,0.4)" : isOpen ? `0 4px 12px ${weekColor}40` : "none",
        }}>
          {allDone ? "✓" : session.day}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 14.5, fontWeight: 800, color: theme.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {session.title}
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 4, alignItems: "center" }}>
            {/* Mini progress */}
            <span style={{ fontSize: 11, color: allDone ? "#10b981" : theme.textFaint, fontWeight: 600 }}>
              {checked}/{total} done
            </span>
            {/* Mini progress bar */}
            <div style={{ flex: 1, maxWidth: 80, height: 4, background: theme.bgInput, borderRadius: 99, overflow: "hidden" }}>
              <div style={{
                height: "100%", borderRadius: 99, transition: "width 0.3s",
                width: `${total > 0 ? (checked / total) * 100 : 0}%`,
                background: allDone
                  ? "linear-gradient(90deg,#10b981,#34d399)"
                  : `linear-gradient(90deg,${weekColor},${weekColor}88)`,
              }} />
            </div>
            {session.leetcode && !session.leetcode.startsWith("None") && (
              <span style={{
                fontSize: 10, fontWeight: 700, color: "#4ade80",
                background: "rgba(74,222,128,0.12)", padding: "2px 7px",
                borderRadius: 99, border: "1px solid rgba(74,222,128,0.25)",
              }}>🟩 LC</span>
            )}
          </div>
        </div>
        <Chevron open={isOpen} color={weekColor} />
      </div>

      {isOpen && (
        <div className="anim-slideDown" style={{ padding: "0 16px 16px" }}>
          <Divider color={weekColor} />
          <div style={{ fontSize: 11, color: weekColor, fontWeight: 700, marginBottom: 10, letterSpacing: 0.8 }}>
            TODAY'S CHECKLIST
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {session.items.map((item, ii) => {
              const isDone = checkedItems[ii] ?? false;
              return (
                <div
                  key={ii}
                  className="anim-fadeUp"
                  style={{ animationDelay: `${ii * 0.04}s` }}
                  /* Stop the click from bubbling up to ExpandCard */
                  onClick={e => e.stopPropagation()}
                >
                  <label style={{
                    display: "flex", gap: 11, alignItems: "flex-start",
                    padding: "9px 12px",
                    background: isDone ? weekColor + "12" : theme.bgInput,
                    borderRadius: 10,
                    border: `1px solid ${isDone ? weekColor + "40" : theme.border}`,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}>
                    {/* Hidden native checkbox */}
                    <input
                      type="checkbox"
                      checked={isDone}
                      onChange={e => {
                        e.stopPropagation();
                        onCheck(ii, e.target.checked);
                      }}
                      style={{ display: "none" }}
                    />
                    {/* Custom checkbox visual */}
                    <span style={{
                      width: 18, height: 18, borderRadius: 5, flexShrink: 0,
                      marginTop: 1,
                      border: `2px solid ${isDone ? weekColor : weekColor + "50"}`,
                      background: isDone ? weekColor : weekColor + "10",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 11, color: "#fff", fontWeight: 900,
                      transition: "all 0.2s",
                    }}>
                      {isDone ? "✓" : ""}
                    </span>
                    <span style={{
                      fontSize: 13, color: isDone ? theme.textFaint : theme.textSub,
                      lineHeight: 1.5,
                      textDecoration: isDone ? "line-through" : "none",
                      transition: "all 0.2s",
                    }}>
                      {item}
                    </span>
                  </label>
                </div>
              );
            })}
          </div>
          <ResourceBadges resource={session.resource} leetcode={session.leetcode} />
        </div>
      )}
    </ExpandCard>
  );
}

export default function StudyTab() {
  const { theme } = useTheme();
  const [activeMonth, setActiveMonth] = useState(0);
  const [activeWeek,  setActiveWeek]  = useState(0);
  const [activeDay,   setActiveDay]   = useState(null);

  // Track completed weeks (set of "mi-wi" keys)
  const [completedWeeks, setCompletedWeeks] = useState(new Set());

  // Track checkbox state per day: { "mi-wi-di": [bool, bool, ...] }
  const [checkState, setCheckState] = useState({});

  const month = weeklyStudyPlan[activeMonth];
  const week  = month.weeks[activeWeek];

  // When all items in a day are checked, auto-mark the week done
  function handleCheck(mi, wi, di, itemIdx, val) {
    const key = `${mi}-${wi}-${di}`;
    const session = weeklyStudyPlan[mi].weeks[wi].sessions[di];
    const prev = checkState[key] ?? Array(session.items.length).fill(false);
    const next = [...prev];
    next[itemIdx] = val;
    setCheckState(s => ({ ...s, [key]: next }));

    // Check if entire week is fully checked
    const weekKey = `${mi}-${wi}`;
    const sessions = weeklyStudyPlan[mi].weeks[wi].sessions;
    const allWeekDone = sessions.every((sess, dIdx) => {
      const k = `${mi}-${wi}-${dIdx}`;
      const arr = dIdx === di
        ? next
        : (checkState[k] ?? Array(sess.items.length).fill(false));
      return arr.every(Boolean);
    });

    setCompletedWeeks(prev => {
      const s = new Set(prev);
      if (allWeekDone) s.add(weekKey); else s.delete(weekKey);
      return s;
    });
  }

  // Count total checked items across all weeks for overall progress
  const totalItems = weeklyStudyPlan.flatMap(m => m.weeks.flatMap(w => w.sessions)).reduce((a, s) => a + s.items.length, 0);
  const checkedItems = Object.values(checkState).flat().filter(Boolean).length;

  return (
    <div>
      {/* ── Overall Progress ── */}
      <div className="anim-fadeUp" style={{
        padding: "18px", background: theme.bgCard,
        border: `1px solid ${theme.border}`, borderRadius: 16,
        marginBottom: 20, boxShadow: theme.shadowCard,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <span style={{ fontSize: 14, fontWeight: 800, color: theme.text }}>📊 12-Week Roadmap Progress</span>
          <span className="font-mono" style={{ fontSize: 13, color: "#a78bfa", fontWeight: 700 }}>
            {checkedItems} / {totalItems} tasks
          </span>
        </div>

        {/* Overall task progress */}
        <ProgressBar
          value={checkedItems}
          max={totalItems}
          color="#a78bfa"
          label="Tasks completed"
        />

        {/* Week completion dots */}
        <div style={{ marginTop: 14 }}>
          <div style={{ fontSize: 11, color: theme.textFaint, fontWeight: 700, marginBottom: 8, letterSpacing: 0.8 }}>
            WEEK COMPLETION
          </div>
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
            {ALL_WEEKS.map((key, i) => {
              const [mi, wi] = key.split("-").map(Number);
              const m = weeklyStudyPlan[mi];
              const w = m.weeks[wi];
              const isDone = completedWeeks.has(key);
              const isCurrent = mi === activeMonth && wi === activeWeek;
              return (
                <button
                  key={key}
                  onClick={() => { setActiveMonth(mi); setActiveWeek(wi); setActiveDay(null); }}
                  title={`${w.week}: ${w.topic}`}
                  style={{
                    width: 28, height: 28, borderRadius: 8, border: "none",
                    cursor: "pointer", fontSize: 10, fontWeight: 800,
                    background: isDone
                      ? "linear-gradient(135deg,#10b981,#059669)"
                      : isCurrent
                        ? `linear-gradient(135deg,${w.color},${w.color}99)`
                        : theme.bgInput,
                    color: isDone || isCurrent ? "#fff" : theme.textGhost,
                    boxShadow: isCurrent ? `0 3px 10px ${w.color}50` : "none",
                    transition: "all 0.2s",
                    transform: isCurrent ? "scale(1.15)" : "scale(1)",
                  }}
                >
                  {isDone ? "✓" : i + 1}
                </button>
              );
            })}
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 10, fontSize: 11, color: theme.textFaint }}>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ width: 10, height: 10, borderRadius: 3, background: "#10b981", display: "inline-block" }} />
              Completed ({completedWeeks.size})
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ width: 10, height: 10, borderRadius: 3, background: "#8b5cf6", display: "inline-block" }} />
              Current
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ width: 10, height: 10, borderRadius: 3, background: theme.bgInput, border: `1px solid ${theme.border}`, display: "inline-block" }} />
              Upcoming ({ALL_WEEKS.length - completedWeeks.size - 1})
            </span>
          </div>
        </div>
      </div>

      {/* ── Month selector ── */}
      <SectionLabel>Choose Month</SectionLabel>
      <div style={{ display: "flex", gap: 10, marginBottom: 18, flexWrap: "wrap" }}>
        {weeklyStudyPlan.map((m, i) => {
          const active = activeMonth === i;
          const weeksDone = m.weeks.filter((_, wi) => completedWeeks.has(`${i}-${wi}`)).length;
          return (
            <button key={i} className="pill-btn" onClick={() => { setActiveMonth(i); setActiveWeek(0); setActiveDay(null); }}
              style={{
                flex: 1, minWidth: 110, padding: "12px 14px", borderRadius: 14,
                border: `1px solid ${active ? m.color + "60" : theme.border}`,
                background: active ? `linear-gradient(135deg, ${m.color}20, ${m.color}08)` : theme.bgCard,
                cursor: "pointer", textAlign: "left",
                boxShadow: active ? `0 4px 16px ${m.color}20` : theme.shadowCard,
                transition: "all 0.2s",
              }}>
              <div style={{ fontSize: 22, marginBottom: 6 }}>{MONTH_ICONS[i]}</div>
              <div style={{ fontSize: 12, fontWeight: 800, color: active ? m.color : theme.text }}>
                {m.month.split("—")[0].trim()}
              </div>
              <div style={{ fontSize: 10, color: theme.textFaint, marginTop: 2 }}>
                {weeksDone}/{m.weeks.length} weeks done
              </div>
            </button>
          );
        })}
      </div>

      {/* ── Week selector ── */}
      <SectionLabel>Choose Week</SectionLabel>
      <div style={{ display: "flex", gap: 8, overflowX: "auto", scrollbarWidth: "none", paddingBottom: 8, marginBottom: 18 }}>
        {month.weeks.map((w, i) => {
          const active = activeWeek === i;
          const done   = completedWeeks.has(`${activeMonth}-${i}`);
          return (
            <button key={i} className="pill-btn"
              onClick={() => { setActiveWeek(i); setActiveDay(null); }}
              style={{
                padding: "8px 14px", borderRadius: 10, border: "none",
                cursor: "pointer", whiteSpace: "nowrap",
                background: done
                  ? "linear-gradient(135deg,#10b981,#059669)"
                  : active
                    ? `linear-gradient(135deg, ${w.color}, ${w.color}cc)`
                    : theme.bgInput,
                color: (active || done) ? "#fff" : theme.textMuted,
                fontSize: 12, fontWeight: 700,
                boxShadow: active ? `0 4px 12px ${w.color}40` : done ? "0 4px 12px rgba(16,185,129,0.3)" : "none",
                transition: "all 0.2s",
              }}>
              {done && <span style={{ marginRight: 4 }}>✓</span>}
              <span style={{ opacity: 0.85, marginRight: 4 }}>{w.week}:</span>{w.topic}
            </button>
          );
        })}
      </div>

      {/* ── Week header ── */}
      <div className="anim-popIn" style={{
        padding: "16px 18px", marginBottom: 16,
        background: `linear-gradient(135deg, ${week.color}20, ${week.color}06)`,
        border: `1px solid ${week.color}40`, borderRadius: 16,
        boxShadow: `0 4px 16px ${week.color}15`,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 42, height: 42, borderRadius: 12,
            background: `linear-gradient(135deg, ${week.color}, ${week.color}bb)`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 20, boxShadow: `0 4px 12px ${week.color}40`,
          }}>📅</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 900, color: week.color }}>{week.week}</div>
            <div style={{ fontSize: 13, color: theme.textMuted, marginTop: 1 }}>{week.topic}</div>
          </div>
          {/* Week task progress */}
          {(() => {
            const sessions = week.sessions;
            const total = sessions.reduce((a, s) => a + s.items.length, 0);
            const done  = sessions.reduce((a, s, di) => {
              const k = `${activeMonth}-${activeWeek}-${di}`;
              return a + (checkState[k] ?? []).filter(Boolean).length;
            }, 0);
            return (
              <div style={{ textAlign: "right" }}>
                <div className="font-mono" style={{ fontSize: 18, fontWeight: 900, color: week.color }}>{done}</div>
                <div style={{ fontSize: 10, color: theme.textFaint }}>/ {total} tasks</div>
              </div>
            );
          })()}
        </div>
      </div>

      {/* ── Day cards ── */}
      {week.sessions.map((s, di) => {
        const ck = `${activeMonth}-${activeWeek}-${di}`;
        const checks = checkState[ck] ?? Array(s.items.length).fill(false);
        return (
          <DayCard
            key={`${activeMonth}-${activeWeek}-${di}`}
            session={s}
            weekColor={week.color}
            idx={di}
            isOpen={activeDay === di}
            onToggle={() => setActiveDay(activeDay === di ? null : di)}
            checkedItems={checks}
            onCheck={(itemIdx, val) => handleCheck(activeMonth, activeWeek, di, itemIdx, val)}
          />
        );
      })}
    </div>
  );
}