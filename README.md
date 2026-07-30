# DhiGrowth — India's Leading Digital Growth Partner

A premium, fully responsive, light-themed single-page landing application built with **React**, **Vite**, and **Tailwind CSS v4**.

Designed to showcase DhiGrowth's comprehensive suite of services spanning Web Development, Mobile App Development, AI & Automation, SEO, and Paid Advertising for businesses across India.

---

## ✨ Features

- **Maximum Light Theme:** Clean, modern, high-contrast light-themed user interface utilizing curated HSL palettes.
- **Hardware-Accelerated 60fps Custom Cursor:** Optimized lerp-based mouse tracker using GPU-accelerated CSS `translate3d()` for seamless navigation.
- **Interactive Spoke Network Skyline:** A dynamic node graph representing core services connecting to a central DhiGrowth hub, overlayed on a custom Coimbatore city skyline image.
- **Clean Navigation & CTA Actions:** Features single-tap CTAs (e.g., booking consultation popups, WhatsApp click-to-chat, and prefilled Gmail drafts).
- **Service Details Modal System:** Instantly displays details for all 13 core services when clicked from the grid.
- **AI Chatbot Strategist:** A clean circular floating chat assistant featuring glowing concentric rings and built-in interactive consultation options.
- **Responsive Layouts:** Carefully tested grids (13 Services Cards, 5 Why Us Columns, 6 Process Steps, and Industries list) scaling perfectly to mobile viewports.

---

## 🛠️ Technology Stack

* **Frontend Framework:** React 19 (Functional Components & Hooks)
* **Build Tool & Bundler:** Vite 8 (Ultra-fast Hot Module Replacement)
* **Styling Engine:** Tailwind CSS v4 (Using modern CSS variable `@theme` declarations)
* **Icons:** Lucide React
* **Compilation Linter:** Oxlint (For high-speed code quality checks)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18+) installed on your machine.

### Installation

1. Clone this repository to your local system:
   ```bash
   git clone https://github.com/srijithit/dhigrowth.git
   cd dhigrowth
   ```

2. Install the project dependencies:
   ```bash
   npm install
   ```

### Running Locally

To launch the local Vite development server:

```bash
npm run dev
```

Once running, navigate to [http://localhost:5173/](http://localhost:5173/) in your web browser.

### Production Build

To build the optimized static assets for production deployment:

```bash
npm run build
```

This compiles your assets into the `dist/` directory, ready to be hosted on Vercel, Netlify, or any static hosting service.

---

## 📁 Project Structure

```text
├── public/                 # Static assets (Favicons, Skyline image, Logo PNG)
├── src/
│   ├── components/         # Reusable React components (Navbar, Hero, Services, Chatbot, etc.)
│   ├── App.jsx             # Main container app
│   ├── main.jsx            # React client mount entrypoint
│   └── index.css           # Tailwind CSS imports & global keyframe animations
├── index.html              # HTML shell loading custom Bebas Neue & Zen Dots fonts
├── package.json            # Node project configuration & dependency scripts
└── vite.config.js          # Vite configuration with Tailwind CSS integrations
```

---

## 📄 License

© {new Date().getFullYear()} DhiGrowth. All Rights Reserved.
