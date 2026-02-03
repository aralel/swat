# SWAT Pro Landing Website

Professional landing website for SWAT Pro - an advanced Soil and Water Assessment Tool application with accelerated performance and comprehensive reporting capabilities for hydrologic modeling research.

## Features

- **Bilingual** - German (index.html) and English (en.html) versions
- **Oasis Theme** - Dark nav, gradient hero, modern card effects
- **Responsive Design** - Mobile-first approach with TailwindCSS
- **Smooth Animations** - Scroll-triggered fade-in effects
- **Contact Form** - Demo request and academic license inquiries

## Quick Start

```bash
# Install dependencies
npm install

# Build CSS (required before serving)
npm run build:css

# Watch for CSS changes during development
npm run watch:css
```

Then serve with any static server:

```bash
npx serve .
# or
python -m http.server 8000
```

Open `http://localhost:8000` (or `http://localhost:3000` for serve).

## File Structure

| File | Description |
|------|-------------|
| `index.html` | German landing page |
| `en.html` | English landing page |
| `main.js` | JavaScript functionality |
| `src/input.css` | Tailwind source CSS |
| `dist/output.css` | Built CSS (minified) |
| `tailwind.config.js` | Tailwind configuration |

## Tech Stack

- HTML5
- TailwindCSS (CLI build)
- Vanilla JavaScript
- Google Fonts (DM Sans)

## Deployment

This is a static site that can be deployed to any static hosting provider:
- Netlify
- Vercel
- GitHub Pages
- AWS S3

## License

Proprietary - All rights reserved.
