# 🎨 Modern Portfolio & CV Generator

A sleek, responsive web-based portfolio and CV application built with React. Features multi-language support (EN/AR/FR), dark mode, and one-click PDF export with professional formatting.

![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite)

## ✨ Features

- **🌍 Multi-language**: English, Arabic, and French with instant switching
- **🎭 Dark Mode**: Modern theme switcher with localStorage persistence
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop
- **📄 PDF Export**: Professional one-page CV generation with modern styling
- **⚡ Performance**: Optimized bundle (30KB gzipped), lazy-loaded components, public asset serving
- **🎯 Modern Design**: Contemporary UI with gradients, glassmorphism, and smooth animations
- **♿ Accessible**: ARIA labels, semantic HTML, keyboard navigation
- **🔍 ATS-Ready**: CV structured for Applicant Tracking Systems
- **📊 SEO Optimized**: Meta tags, structured data, fast loading

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | React 18, TypeScript, Tailwind CSS 3 |
| **Build** | Vite 5, ESBuild minification |
| **PDF** | @react-pdf/renderer 3 |
| **Icons** | lucide-react (tree-shakeable) |
| **i18n** | JSON-based translations |
| **Styling** | CSS Grid, Flexbox, Animations |

## 📦 Bundle Analysis

- Main chunk: **29.26 kB** (gzipped: 11.07 kB)
- React PDF: **79.45 kB** (gzipped: 24.26 kB) - lazy-loaded
- Icons: **10.03 kB** (gzipped: 2.63 kB)
- CSS: **36.13 kB** (gzipped: 6.53 kB)

Images served from `/public/assets` (not bundled) for better caching.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ & npm 7+

### Installation

```bash
# Clone repository
git clone https://github.com/ABDALLAH-ATGUIRI/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start dev server (http://localhost:5174)
npm run dev

# Format code
npm run format

# Lint with ESLint
npm run lint
```

### Production

```bash
# Build optimized bundle
npm run build

# Preview build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── pdf/            # PDF CV sections & styles
│   ├── global/         # Shared UI (buttons, chips, etc.)
│   └── layouts/        # Page layouts
├── config/             # Configuration (assets, constants)
├── context/            # React context (translations)
├── data/               # Content & metadata
├── hooks/              # Custom hooks (useTranslation)
├── langs/              # i18n files (en.json, ar.json, fr.json)
├── providers/          # Context providers
├── types/              # TypeScript interfaces
└── assets/             # Local fonts (images in /public)

public/
├── assets/images/      # Optimized images (served via HTTP)
│   ├── companies/      # Company logos
│   ├── flags/          # Language flags
│   └── projects/       # Project screenshots
└── favicon.svg
```

## 🎯 Customization

### Update Personal Info
Edit `src/data/index.ts`:
```typescript
export const me: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  image: assetPaths.images.profile,
  location: "City, Country",
  phone: "+1234567890",
  email: "you@example.com",
};
```

### Add/Edit Projects
Modify the `projects` array in `src/data/index.ts`:
```typescript
export const projects: Project[] = [
  {
    key: "project_key",
    technologies: ["React", "TypeScript", "Tailwind"],
    images: [assetPaths.images.projects.yourImage],
    github: "https://github.com/...",
    demo: "https://...",
  },
];
```

### Manage Translations
Edit `src/langs/{en,ar,fr}.json`:
```json
{
  "developer": {
    "name": "John Doe",
    "role": "Full Stack Developer"
  }
}
```

### Customize Styling
- **Colors**: Modify `tailwind.config.js` (primary, secondary, accent)
- **Typography**: Adjust font sizes in `src/components/pdf/PDFStyle.ts`
- **Animations**: Update keyframes in `src/index.css`

## 🔄 CV Optimization

The PDF CV is optimized for:
- **Single-page format** with professional spacing
- **Expert typography** (20pt headers, 10.5pt body)
- **Modern color scheme** (Cyan-700 accents, Slate palette)
- **ATS compatibility** (clean semantic structure)

## ⚡ Performance Features

✅ Code splitting with lazy-loaded components
✅ Public asset serving (no images in bundle)
✅ Optimized Tailwind CSS (36KB gzipped)
✅ Memoized translations & animations
✅ RequestAnimationFrame throttling
✅ ESBuild minification
✅ Gzip compression ready

## 🌐 Deployment

### GitHub Pages
```bash
npm run deploy
```

### Other Platforms
```bash
npm run build
# Upload `dist/` folder to your hosting
```

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/name`
3. Commit changes: `git commit -m 'feat: description'`
4. Push and open a PR

## 📝 License

MIT License - See LICENSE file for details.

## 👤 Author

**Abdallah ATGUIRI**
- 🌐 [Portfolio](https://abdallah-atguiri.github.io/portfolio)
- 💼 [LinkedIn](https://linkedin.com/in/abdallah-atguiri)
- 🐙 [GitHub](https://github.com/ABDALLAH-ATGUIRI)
- 📧 [Email](mailto:abdallah.atguiri@gmail.com)

---

**Made with ❤️ and ☕**
