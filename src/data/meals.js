export const meals = [
  {
    time: "3:30–4:00 PM",
    name: "Breakfast (Meal 1)",
    emoji: "🍳",
    color: "#f97316",
    desc: "First meal after waking. Light to medium — you work out in 30 minutes.",
    options: [
      {
        name: "Option A",
        items: [
          "3 boiled eggs / egg bhurji",
          "2 whole wheat toast",
          "1 banana",
          "1 glass milk",
        ],
      },
      {
        name: "Option B",
        items: [
          "1 bowl oats + honey + nuts",
          "1 fruit (banana/apple)",
          "1 glass milk or protein shake",
        ],
      },
      {
        name: "Option C",
        items: [
          "Poha / Upma (1 plate)",
          "1 boiled egg",
          "1 fruit",
          "Green tea",
        ],
      },
    ],
    macros: { protein: "25–30g", carbs: "40–50g", fat: "10–15g" },
    note: "Eat 30 min before workout. Don't skip — you need fuel to train.",
  },
  {
    time: "6:00–6:30 PM",
    name: "Lunch (Meal 2 — Biggest Meal)",
    emoji: "🍛",
    color: "#ef4444",
    desc: "Post-workout. Your most important meal. Prioritize protein + complex carbs for muscle recovery.",
    options: [
      {
        name: "Option A",
        items: [
          "2 cup rice / 3–4 roti",
          "150g chicken / 100g paneer / 2 eggs",
          "1 cup dal",
          "Mixed vegetable sabzi",
          "Salad: cucumber + tomato + onion",
        ],
      },
      {
        name: "Option B",
        items: [
          "Chicken rice bowl: rice + grilled chicken + veggies + sauce",
          "1 cup curd / raita",
          "1 fruit",
        ],
      },
      {
        name: "Option C (Veg)",
        items: [
          "3 roti + rajma/chole + vegetable sabzi",
          "1 bowl curd",
          "1 glass buttermilk",
        ],
      },
    ],
    macros: { protein: "40–50g", carbs: "70–90g", fat: "15–20g" },
    note: "Biggest plate of the day. Don't skip protein — your muscles need it after the gym.",
  },
  {
    time: "9:00–9:30 PM",
    name: "Dinner (Meal 3)",
    emoji: "🍽️",
    color: "#8b5cf6",
    desc: "Before your work shift. Medium-light meal. Heavy dinner = energy crash at 2 AM.",
    options: [
      {
        name: "Option A",
        items: ["2 roti + egg curry / dal + 1 sabzi", "1 small bowl curd"],
      },
      {
        name: "Option B",
        items: ["1 cup rice + dal + vegetable sabzi", "Salad on side"],
      },
      {
        name: "Option C (Light)",
        items: [
          "Vegetable khichdi (rice + dal together)",
          "1 glass buttermilk",
        ],
      },
    ],
    macros: { protein: "25–30g", carbs: "50–60g", fat: "10–15g" },
    note: "No heavy fried food. Oil will make you drowsy at work. Keep it clean.",
  },
  {
    time: "1:00–2:00 AM",
    name: "Mid-Shift Snack",
    emoji: "🌙",
    color: "#06b6d4",
    desc: "During work. Light snack only — your digestion is very slow at this hour.",
    options: [
      {
        name: "Option A",
        items: ["1 banana + handful mixed nuts (almonds, cashews, walnuts)"],
      },
      { name: "Option B", items: ["2 boiled eggs + 1 whole wheat bread"] },
      {
        name: "Option C",
        items: [
          "Greek yogurt / curd + a few biscuits",
          "OR 1 peanut butter sandwich",
        ],
      },
    ],
    macros: { protein: "10–15g", carbs: "20–30g", fat: "5–10g" },
    note: "Never eat heavy meals 12 AM–4 AM. Your body will crash and you will want to sleep at your desk.",
  },
  {
    time: "7:30–8:00 AM",
    name: "Pre-Sleep Snack (Optional)",
    emoji: "🥛",
    color: "#10b981",
    desc: "Right before bed. Small and sleep-promoting.",
    options: [
      {
        name: "Option A",
        items: ["1 glass warm milk (tryptophan helps sleep)"],
      },
      { name: "Option B", items: ["1 small banana + 5 almonds"] },
      { name: "Option C", items: ["Skip if not hungry — do not force it"] },
    ],
    macros: { protein: "5–10g", carbs: "15–20g", fat: "5g" },
    note: "Warm milk genuinely helps sleep — science-backed. Try it.",
  },
];

export const hydrationTips = [
  "Wake up (3:30 PM): 2 glasses immediately",
  "Pre-workout (4:15 PM): 1 glass",
  "During workout: 500ml to 1 litre",
  "Post workout + lunch: 2 glasses",
  "Study sessions: sip regularly",
  "During night shift: 1 glass every 90 min",
  "Total target: 3 to 4 litres per day",
];

export const hydrationPlan = [
  "Wake up (3:30 PM): 2 glasses immediately — rehydrate after sleep",
  "Pre-workout (3:45 PM): 1 glass 15 min before training",
  "During workout: 500ml – 1 litre depending on sweat",
  "Post-workout + lunch (5:30 PM): 2 glasses with food",
  "Study sessions (6–10 PM): sip 1 glass per hour",
  "Start of night shift (10 PM): 1 glass — begin shift hydrated",
  "During night shift: 1 glass every 90 min minimum",
  "End of shift (7:30 AM): 1 glass before eating pre-sleep snack",
  "Daily TOTAL TARGET: 3 – 4 litres",
];
