# 🤖 AI Alex – Personal AI Assistant

<div align="center">

![AI Alex Logo](icons/icon-256x256.png)

**Your private, local AI personal assistant.**
*No cloud. No API. No tracking. Fully yours.*

[![PWA Ready](https://img.shields.io/badge/PWA-Ready-00d4ff?style=for-the-badge&logo=pwa&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
[![Offline First](https://img.shields.io/badge/Offline-First-7b2fff?style=for-the-badge)](https://offlinefirst.org/)
[![No Backend](https://img.shields.io/badge/Backend-None-00ff88?style=for-the-badge)](https://github.com)
[![License MIT](https://img.shields.io/badge/License-MIT-ffcc00?style=for-the-badge)](LICENSE)
[![Made with HTML CSS JS](https://img.shields.io/badge/HTML%20%2B%20CSS%20%2B%20JS-Only-ff6b35?style=for-the-badge)](https://github.com)

</div>

---

## ✨ What is AI Alex?

**AI Alex** is a browser-based personal assistant that runs **entirely on your device** — no server, no API key, no account needed. It uses rule-based logic and your own stored data to help you stay focused, productive, and on track with your goals.

Think of it as your private productivity companion: it learns what you tell it, tracks your habits, holds your goals, and motivates you — all offline.

---

## 🎯 Key Features

### 💬 Smart Chat Interface
- Conversational interface with an animated AI avatar
- Eye-blinking & mouth-movement animations
- Mood states: Ready / Thinking / Speaking
- 25 selectable avatars with custom naming

### 🧠 Memory System
- Teach Alex anything: `remember my diet is...`
- Categorized storage: diet, workout, yoga, study, goals, books, reminders
- Instant recall via natural language commands

### 🎯 Goal Tracker
- Add personal goals with progress percentage
- Interactive progress bar with live slider
- Goals sync to chat commands

### 🔄 Habit Tracker
- Daily habit check-ins
- 7-day visual dot history
- Streak counting
- Quick sidebar toggles

### 📓 Notes
- Timestamped quick notes
- Persistent across sessions

### 📊 Stats Dashboard
- Memory count, goal count, habit streaks
- Sidebar quick overview

### 📱 Full Responsive Design
- **Desktop**: 3-column layout (sidebar + chat + right panel)
- **Tablet**: 2-column layout
- **Mobile**: Bottom navigation + slide-out sidebar drawer

### ⚡ Progressive Web App
- Install on any device (Android, iOS, Windows, Mac)
- Full offline support via Service Worker
- App shortcuts for quick access
- Home screen icon

---

## 🔒 Privacy First

> All your data lives in your browser's **LocalStorage**. Nothing is ever sent anywhere.

- ❌ No cloud storage
- ❌ No external API calls
- ❌ No analytics or tracking
- ❌ No account required
- ✅ 100% local & private

---

## 🚀 Getting Started

### Option 1: GitHub Pages (Recommended)

1. **Fork this repository**
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)` folder
4. Your app will be live at `https://yourusername.github.io/ai-alex`

### Option 2: Run Locally

```bash
# Clone the repo
git clone https://github.com/yourusername/ai-alex.git
cd ai-alex

# Serve locally (any static server works)
npx serve .
# or
python3 -m http.server 8080
# or
php -S localhost:8080
```

Open `http://localhost:8080` in your browser.

> ⚠️ **Note**: Service Workers require HTTPS or localhost. For PWA install to work, use HTTPS (GitHub Pages provides this automatically).

### Option 3: Direct File
Simply open `index.html` in your browser. Note: Service Worker and PWA install won't work without a server.

---

## 💬 Chat Commands

| Command | What it does |
|---|---|
| `remember my diet is [info]` | Saves your diet plan |
| `remember my goal is to [goal]` | Saves a goal |
| `remember my workout is [info]` | Saves your workout |
| `show my diet plan` | Displays your diet |
| `show my workout` | Displays your workout |
| `show my goals` | Lists all goals |
| `show habits` | Shows today's habits |
| `show my notes` | Shows recent notes |
| `what do you know about me` | Full summary |
| `motivate me` | Sends a motivational message |
| `what's the date` | Shows current date/time |
| `help` | Shows all commands |

---

## 📂 Project Structure

```
ai-alex/
├── index.html          ← Main app (all-in-one)
├── manifest.json       ← PWA manifest
├── sw.js               ← Service Worker (offline caching)
├── favicon.ico         ← Browser favicon
├── icons/
│   ├── icon-16x16.png
│   ├── icon-32x32.png
│   ├── icon-48x48.png
│   ├── icon-72x72.png
│   ├── icon-96x96.png
│   ├── icon-128x128.png
│   ├── icon-144x144.png
│   ├── icon-152x152.png
│   ├── icon-180x180.png
│   ├── icon-192x192.png
│   ├── icon-256x256.png
│   ├── icon-384x384.png
│   ├── icon-512x512.png
│   └── apple-touch-icon.png
└── README.md
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Storage | LocalStorage API |
| Offline | Service Worker (Cache API) |
| Fonts | Google Fonts (Orbitron, Rajdhani, Share Tech Mono) |
| PWA | Web App Manifest |
| Hosting | GitHub Pages (recommended) |

**No frameworks. No dependencies. No build step.**

---

## 📱 Installing as an App

### Android (Chrome)
1. Open the app in Chrome
2. Tap the **"Install"** banner that appears
3. Or tap ⋮ → **Add to Home Screen**

### iOS (Safari)
1. Open the app in Safari
2. Tap the **Share** button (□↑)
3. Tap **Add to Home Screen**
4. Tap **Add**

### Desktop (Chrome / Edge)
1. Open the app
2. Click the **Install** icon in the address bar
3. Or use the install banner

---

## 🎨 Design System

```css
--bg:      #050a14   /* Deep space background */
--panel:   #0a1628   /* Panel background */
--cyan:    #00d4ff   /* Primary accent */
--purple:  #7b2fff   /* Secondary accent */
--green:   #00ff88   /* Success / habits done */
--yellow:  #ffcc00   /* Streaks / warnings */
```

**Fonts**: Orbitron (headings) · Rajdhani (body) · Share Tech Mono (data)

**Aesthetic**: Retro-futuristic cyberpunk · Dark mode · Glowing accents

---

## 🔮 Roadmap

- [ ] Voice input (Web Speech API)
- [ ] Voice responses (Speech Synthesis API)
- [ ] Habit reminders (Push Notifications)
- [ ] Data export/import (JSON backup)
- [ ] Analytics dashboard
- [ ] Gamified habit system with XP/levels
- [ ] IndexedDB for larger data storage
- [ ] Multiple language support
- [ ] Custom themes/accent colors
- [ ] Calendar view for habits

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/voice-input`
3. Commit your changes: `git commit -m 'Add voice input support'`
4. Push to the branch: `git push origin feature/voice-input`
5. Open a Pull Request

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

Free to use, modify, and distribute.

---

## 👨‍💻 Author

**Anshu Gupta**

Exploring ideas around personal AI assistants, privacy-first productivity tools, and intelligent web systems.

---

<div align="center">

**Built with ❤️ for privacy and productivity**

*If you find AI Alex useful, please ⭐ star the repository!*

</div>
