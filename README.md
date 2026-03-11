# 🌙 Night Planner

A beautifully designed personal productivity planner built with React + Vite. Plan your nights with style — track your schedule, meals, workouts, study sessions, and more, all in one place.

**🔗 Live Demo:** [night-planner.vercel.app](https://night-planner.vercel.app)

---

## ✨ Features

- 📅 **Schedule Tab** — View your full daily routine with expandable time-blocked cards
- 🍛 **Meal Tab** — Track your meals and nutrition throughout the day
- 📚 **Study Tab** — Organize your study sessions and learning goals
- 🎨 **Dark / Light Theme** — Toggle between a sleek dark mode and a clean light mode
- 🔍 **Category Filtering** — Filter tasks by Sleep, Meal, Workout, Study, Jobs, Personal, and Work
- 📊 **Stats Overview** — Quick summary of your daily time allocations
- 💫 **Smooth Animations** — Polished UI with fade and slide transitions
- 📱 **Responsive Design** — Works great on both mobile and desktop

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev) | UI Framework |
| [Vite](https://vitejs.dev) | Build Tool & Dev Server |
| [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Language |
| [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) | Styling & Animations |
| [Vercel](https://vercel.com) | Deployment |

---

## 📁 Project Structure

```
night-planner/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── MealTab.jsx
│   │   ├── ScheduleTab.jsx
│   │   ├── StudyTab.jsx
│   │   └── Ui.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   ├── meals.js
│   │   ├── schedule.js
│   │   └── studyPlan.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/comradevijay/night-planner.git

# Navigate into the project
cd night-planner

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder.

---

## 🌐 Deployment

This project is deployed on **Vercel**. Every push to the `main` branch triggers an automatic re-deployment.

To deploy your own copy:

```bash
npm install -g vercel
vercel
```

---

## 📸 Screenshots

> _Add screenshots of your app here_

---

## 🙌 Author

**Vijay** — [@comradevijay](https://github.com/comradevijay)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).