# Les Dunes Berbères

A premium landing page for a luxury coffee brand inspired by the Sahara Desert and Amazigh
heritage — built with React (Vite), Tailwind CSS, Framer Motion, and Lucide React.

## Getting Started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`) in your browser.

## Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/   Reusable UI sections (Navbar, Hero, OurStory, SignatureCoffee, ...)
  data/         Static content separated from UI (menu, gallery, testimonials, features)
  hooks/        Custom hooks (useScrollPosition)
  assets/       Static assets
  App.jsx       Composes all sections
  main.jsx      React entry point
  index.css     Tailwind directives + global styles
```

## Notes

- Images are pulled from Unsplash/Randomuser placeholder URLs — swap in your own brand
  photography before shipping to production.
- Fonts (Cormorant Garamond + Poppins) are loaded via Google Fonts in `index.html`.
- Respects `prefers-reduced-motion` for accessibility.
