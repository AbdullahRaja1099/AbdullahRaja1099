# HeptaBugs Website

A Next.js 15 + Tailwind CSS site implementing a Twingate-inspired design, populated with HeptaBugs content.

## Development

```bash
npm install
npm run dev
```
- App runs at http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## Project Structure
- `src/app/page.tsx`: Homepage implementation
- `src/app/layout.tsx`: Global metadata and layout
- `src/app/globals.css`: Global styles and utility classes
- `public/`: Static assets (favicon, images)

## Deploy
- Vercel (recommended):
  - Import this repo in Vercel and deploy with defaults
- Node server:
  - Build with `npm run build`
  - Start with `npm run start`

## Notes
- Uses Next.js Turbopack build
- TailwindCSS via `@tailwindcss/postcss` (Next 15)
