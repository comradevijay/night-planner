import { useState } from "react";
import { meals, hydrationPlan } from "../data/meals.js";
import { useTheme } from "../context/ThemeContext.jsx";
import { Dot, Divider, ExpandCard, IconBadge, Chevron } from "./UI.jsx";

const MACRO_COLORS = { Protein: "#ef4444", Carbs: "#f59e0b", Fat: "#3b82f6" };

function MacroBadge({ label, value }) {
  const color = MACRO_COLORS[label];
  return (
    <div style={{
      flex: 1, padding: "10px 8px",
      background: `linear-gradient(135deg, ${color}15, ${color}06)`,
      borderRadius: 12, textAlign: "center",
      border: `1px solid ${color}25`,
    }}>
      <div className="font-mono" style={{ fontSize: 14, fontWeight: 900, color }}>{value}</div>
      <div style={{ fontSize: 10, color, marginTop: 3, fontWeight: 700, opacity: 0.8 }}>{label}</div>
    </div>
  );
}

export default function MealTab() {
  const { theme } = useTheme();
  const [open, setOpen] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState({});

  return (
    <div>
      {/* Banner */}
      <div className="anim-fadeUp" style={{
        padding: "14px 16px",
        background: "linear-gradient(135deg, rgba(249,115,22,0.14), rgba(249,115,22,0.05))",
        border: "1px solid rgba(249,115,22,0.3)",
        borderRadius: 14, marginBottom: 20,
        fontSize: 13, color: "#fb923c", lineHeight: 1.6,
        display: "flex", gap: 10, alignItems: "flex-start",
      }}>
        <span style={{ fontSize: 20, flexShrink: 0 }}>⚡</span>
        <span>Your meal times are <strong>shifted</strong> from normal schedules. Eat when your body needs fuel — ignore old clock habits.</span>
      </div>

      {/* Meal timeline strip */}
      <div className="anim-fadeUp" style={{
        display: "flex", alignItems: "center", gap: 0,
        marginBottom: 22, padding: "14px 16px",
        background: theme.bgCard, borderRadius: 14,
        border: `1px solid ${theme.border}`,
        overflowX: "auto", scrollbarWidth: "none",
        boxShadow: theme.shadowCard,
      }}>
        {meals.map((meal, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <button onClick={() => setOpen(i)} style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
              padding: "6px 10px", borderRadius: 10, border: "none", cursor: "pointer",
              background: open === i ? meal.color + "20" : "transparent",
              transition: "background 0.2s",
            }}>
              <span style={{ fontSize: 22 }}>{meal.emoji}</span>
              <span className="font-mono" style={{ fontSize: 9, color: open === i ? meal.color : theme.textFaint, fontWeight: 700 }}>
                {meal.time.split("–")[0].trim()}
              </span>
            </button>
            {i < meals.length - 1 && (
              <div style={{ width: 20, height: 1.5, background: theme.border, flexShrink: 0 }} />
            )}
          </div>
        ))}
      </div>

      {/* Meal cards */}
      {meals.map((meal, i) => {
        const isOpen = open === i;
        const chosen = selectedOpt[i] ?? null;
        return (
          <ExpandCard key={i} color={meal.color} isOpen={isOpen} onClick={() => setOpen(isOpen ? null : i)} animDelay={i * 0.06}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 18px" }}>
              <IconBadge color={meal.color} emoji={meal.emoji} size={46} />
              <div style={{ flex: 1 }}>
                <div className="font-mono" style={{ fontSize: 11, color: meal.color, fontWeight: 700, marginBottom: 3 }}>{meal.time}</div>
                <div style={{ fontSize: 15, fontWeight: 800, color: theme.text }}>{meal.name}</div>
                {!isOpen && (
                  <div style={{ fontSize: 11, color: theme.textFaint, marginTop: 2 }}>
                    {meal.options.length} meal options · tap to view
                  </div>
                )}
              </div>
              <Chevron open={isOpen} color={meal.color} />
            </div>

            {isOpen && (
              <div className="anim-slideDown" style={{ padding: "0 18px 18px" }}>
                <Divider color={meal.color} />
                <p style={{ fontSize: 13, color: theme.textMuted, margin: "0 0 16px", lineHeight: 1.6 }}>{meal.desc}</p>

                {/* Macros row */}
                <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
                  <MacroBadge label="Protein" value={meal.macros.protein} />
                  <MacroBadge label="Carbs"   value={meal.macros.carbs} />
                  <MacroBadge label="Fat"     value={meal.macros.fat} />
                </div>

                {/* Option selector tabs */}
                <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
                  {meal.options.map((opt, oi) => (
                    <button key={oi}
                      onClick={e => { e.stopPropagation(); setSelectedOpt(p => ({ ...p, [i]: oi === chosen ? null : oi })); }}
                      className="pill-btn"
                      style={{
                        flex: 1, padding: "7px", borderRadius: 10, border: "none",
                        cursor: "pointer", fontSize: 12, fontWeight: 700,
                        background: chosen === oi
                          ? `linear-gradient(135deg, ${meal.color}, ${meal.color}bb)`
                          : theme.bgInput,
                        color: chosen === oi ? "#fff" : theme.textMuted,
                        boxShadow: chosen === oi ? `0 3px 10px ${meal.color}35` : "none",
                        transition: "all 0.2s",
                      }}>
                      {opt.name}
                    </button>
                  ))}
                </div>

                {/* Show chosen or all options */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {(chosen !== null ? [meal.options[chosen]] : meal.options).map((opt, oi) => (
                    <div key={oi} className="anim-fadeUp" style={{
                      padding: "12px 14px",
                      background: theme.bgInput,
                      borderRadius: 12, border: `1px solid ${theme.border}`,
                    }}>
                      <div style={{ fontSize: 11, fontWeight: 800, color: meal.color, marginBottom: 8, letterSpacing: 0.6 }}>
                        {opt.name}
                      </div>
                      {opt.items.map((item, ii) => (
                        <div key={ii} style={{ display: "flex", gap: 10, marginBottom: 6, fontSize: 13, color: theme.textSub, alignItems: "flex-start" }}>
                          <Dot color={meal.color} />
                          {item}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Note */}
                <div style={{
                  marginTop: 14, padding: "11px 14px",
                  background: `linear-gradient(135deg, ${meal.color}12, ${meal.color}05)`,
                  borderRadius: 10, border: `1px solid ${meal.color}30`,
                  fontSize: 12.5, color: meal.color, lineHeight: 1.6,
                  display: "flex", gap: 8,
                }}>
                  <span>⚠️</span>
                  <span>{meal.note}</span>
                </div>
              </div>
            )}
          </ExpandCard>
        );
      })}

      {/* Hydration card */}
      <div className="anim-fadeUp" style={{
        padding: "18px", marginTop: 4,
        background: "linear-gradient(135deg, rgba(6,182,212,0.12), rgba(6,182,212,0.04))",
        border: "1px solid rgba(6,182,212,0.25)",
        borderRadius: 16,
        boxShadow: "0 4px 16px rgba(6,182,212,0.08)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <div style={{
            width: 38, height: 38, borderRadius: 10,
            background: "rgba(6,182,212,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 20,
          }}>💧</div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#22d3ee" }}>Daily Hydration Plan</div>
            <div style={{ fontSize: 11, color: "#64748b" }}>Target: 3–4 litres/day</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {hydrationPlan.map((line, i) => (
            <div key={i} className="anim-fadeUp" style={{
              animationDelay: `${i * 0.04}s`,
              display: "flex", gap: 10, padding: "8px 12px",
              background: "rgba(6,182,212,0.06)", borderRadius: 9,
              fontSize: 12.5, color: "#94a3b8", alignItems: "flex-start",
            }}>
              <span style={{ color: "#22d3ee", fontSize: 12, flexShrink: 0, marginTop: 1 }}>◆</span>
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}