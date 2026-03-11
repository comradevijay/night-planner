import { createContext, useContext, useState } from "react";

export const themes = {
  dark: {
    name: "dark",
    bg:             "#060911",
    bgSecondary:    "#0d1117",
    bgCard:         "rgba(255,255,255,0.045)",
    bgCardHover:    "rgba(255,255,255,0.07)",
    bgInput:        "rgba(255,255,255,0.07)",
    bgTabBar:       "rgba(6,9,17,0.92)",
    bgHero:         "linear-gradient(160deg, #0d1b2e 0%, #0a0e1f 55%, #060911 100%)",
    border:         "rgba(255,255,255,0.08)",
    borderStrong:   "rgba(255,255,255,0.05)",
    text:           "#f1f5f9",
    textSub:        "#cbd5e1",
    textMuted:      "#94a3b8",
    textFaint:      "#64748b",
    textGhost:      "#475569",
    textFooter:     "#1e293b",
    badge:          "rgba(255,255,255,0.06)",
    glow:           "rgba(139,92,246,0.15)",
    shadow:         "0 4px 24px rgba(0,0,0,0.4)",
    shadowCard:     "0 2px 16px rgba(0,0,0,0.3)",
    resourceBg:     "rgba(30,58,138,0.25)",
    resourceBorder: "rgba(59,130,246,0.25)",
    resourceText:   "#93c5fd",
    resourceLabel:  "#60a5fa",
    leetBg:         "rgba(5,46,22,0.35)",
    leetBorder:     "rgba(22,163,74,0.25)",
    leetText:       "#86efac",
    leetLabel:      "#4ade80",
    statBorder:     "rgba(255,255,255,0.06)",
  },
  light: {
    name: "light",
    bg:             "#f8fafc",
    bgSecondary:    "#f1f5f9",
    bgCard:         "#ffffff",
    bgCardHover:    "#f8fafc",
    bgInput:        "#f1f5f9",
    bgTabBar:       "rgba(255,255,255,0.95)",
    bgHero:         "linear-gradient(160deg, #e0e7ff 0%, #ede9fe 40%, #fdf4ff 100%)",
    border:         "rgba(0,0,0,0.08)",
    borderStrong:   "rgba(0,0,0,0.06)",
    text:           "#0f172a",
    textSub:        "#1e293b",
    textMuted:      "#334155",
    textFaint:      "#64748b",
    textGhost:      "#94a3b8",
    textFooter:     "#e2e8f0",
    badge:          "rgba(0,0,0,0.06)",
    glow:           "rgba(139,92,246,0.08)",
    shadow:         "0 4px 24px rgba(0,0,0,0.08)",
    shadowCard:     "0 2px 12px rgba(0,0,0,0.06)",
    resourceBg:     "#eff6ff",
    resourceBorder: "#bfdbfe",
    resourceText:   "#1d4ed8",
    resourceLabel:  "#2563eb",
    leetBg:         "#f0fdf4",
    leetBorder:     "#bbf7d0",
    leetText:       "#166534",
    leetLabel:      "#16a34a",
    statBorder:     "rgba(0,0,0,0.06)",
  },
};

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState("dark");
  const theme = themes[mode];
  const toggle = () => setMode(m => m === "dark" ? "light" : "dark");
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() { return useContext(ThemeContext); }