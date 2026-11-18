<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f172a,100:a78bfa&height=170&section=header&text=OG%20Meta%20Preview&fontColor=ffffff&fontSize=38&animation=fadeIn" width="100%" alt="OG Meta Preview banner"/>
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&duration=2800&pause=900&color=a78bfa&center=true&vCenter=true&width=650&lines=OG%20Meta%20Preview%3BPreview%20social%20cards%20from%20HTML%20you%20already%20have.%3BLocal-first%20tools%20for%20focused%20work." alt="Typing introduction"/>
<p>Preview social cards from HTML you already have.</p>
<p><img src="https://img.shields.io/github/license/CyberLoop-dev/og-meta-preview?style=for-the-badge" alt="License"/> <img src="https://img.shields.io/github/languages/top/CyberLoop-dev/og-meta-preview?style=for-the-badge" alt="Language"/> <img src="https://img.shields.io/github/stars/CyberLoop-dev/og-meta-preview?style=for-the-badge" alt="Stars"/> <img src="https://img.shields.io/github/last-commit/CyberLoop-dev/og-meta-preview?style=for-the-badge" alt="Last commit"/></p>
<img src="assets/icon.svg" width="112" alt="OG Meta Preview icon"/>
</div>

## ✨ Overview
A local browser tool for inspecting Open Graph and Twitter card tags in an HTML snippet. It never fetches the source URL or uploads the snippet.

## 🚀 Features
- ✨ Read title, description, image, URL, and site name metadata
- ✨ Preview a compact social-card layout while editing HTML
- ✨ Show fallback values when tags are missing
- ✨ Process snippets entirely in the browser
- ✨ Run with Node.js built-ins only

## 🎬 Demo
Start the local server, open the page, and paste a page's HTML head into the editor.

## ⚡ Quick Start
```bash
npm start
# Open http://127.0.0.1:4173
```

## 🧰 Tech Stack
Node.js built-in HTTP server plus browser-native HTML parsing, CSS, and JavaScript. No npm dependencies.

## 🗂️ Folder Structure
```text
.
├── package.json
├── server.js
├── public/index.html
├── public/app.js
└── public/styles.css
├── assets/icon.svg
├── .gitignore
└── LICENSE
```

## 🧭 Roadmap
- [ ] Add a downloadable metadata report
- [ ] Add more card-size presets
- [ ] Add a tag completeness checklist

## 🤝 Contributing
Issues and focused pull requests are welcome. Explain the problem, keep changes small, and update tests when behavior changes.

## 📄 License
Released under the [MIT License](LICENSE).

<div align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f172a,100:a78bfa&height=100&section=footer" width="100%" alt="Animated wave footer"/></div>
