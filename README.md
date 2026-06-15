# ☕ Kahel Café

A single-page, multi-section website for **Kahel Café**, a specialty coffee shop in Bacoor City, Cavite. Built with plain HTML, CSS, and JavaScript — no frameworks or build tools required.

## ✨ Features

- Responsive, premium-styled layout with warm citrus-inspired color palette
- Custom animated navigation bar with mobile drawer menu
- Home, About, Menu, Barista, Gallery, and Contact sections (single-page app style navigation)
- Interactive menu with category pills and dropdown groups
- Cozy, animated photo gallery with filters, hover tilt effects, and a lightbox viewer
- Smooth page transitions and scroll-reveal animations
- SEO and Open Graph / Twitter meta tags included

## 📁 Project Structure

```
├── index.html      # Main HTML file (all page sections)
├── source/
│   ├── style.css   # All styling
│   └── script.js   # Page navigation, gallery, menu, and animation logic
└── asset/
    ├── kahel-logo.png
    └── Quesha-gndR.ttf
```

> **Note:** `index.html` references `source/style.css`, `source/script.js`, and files inside an `asset/` folder (logo and custom font). Make sure these folders exist with the correct files when uploading to GitHub, or update the paths in `index.html` to match your repo structure.

## 🚀 Getting Started

1. Clone or download this repository.
2. Make sure the folder structure above is preserved (`source/` and `asset/` folders alongside `index.html`).
3. Open `index.html` directly in your browser — no server or build step needed.

### Optional: Run with a local server
For best results with fonts and assets, serve the folder with a simple local server:

```bash
# Using Python
python3 -m http.server 8000

# Then open
http://localhost:8000
```

## 🌐 Deploying

This site is static and can be hosted for free on:
- **GitHub Pages** — push to a repo and enable Pages in repo settings
- **Netlify** / **Vercel** — drag-and-drop deploy
- Any standard web host

## 🖼️ Image Credits

Gallery images are sourced from [Unsplash](https://unsplash.com).

## 📄 License

This project is provided as-is for Kahel Café. Feel free to adapt for your own café/restaurant website.
