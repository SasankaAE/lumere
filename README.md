# LUMÈRE — Luxury Skincare Landing Page

A production-ready, Awwwards-style landing page for a premium botanical
skincare brand, built with Next.js 15, React 19, TypeScript, Tailwind CSS v4,
shadcn/ui primitives, Framer Motion, and GSAP (ScrollTrigger).

## Stack

- **Next.js 15** (App Router, React 19, `next/font`, `next/image`)
- **TypeScript** throughout
- **Tailwind CSS v4** using the new `@theme` token syntax in `app/globals.css`
- **Framer Motion** for scroll reveals, hover micro-interactions, and page transitions
- **GSAP + ScrollTrigger** for the hero parallax
- **Radix UI primitives** (Accordion) styled shadcn/ui-style with `class-variance-authority`
- **lucide-react** icons

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build && npm run start   # production build
```

## Structure

```
app/
  layout.tsx        Root layout, fonts, SEO metadata, JSON-LD
  page.tsx           Assembles all sections
  globals.css        Design tokens (@theme), base styles, utilities
  robots.ts / sitemap.ts
components/
  sections/          One file per landing page section
  motion/reveal.tsx   Shared scroll-reveal wrapper (Framer Motion)
  ui/button.tsx        shadcn/ui-style button (cva variants)
lib/
  data.ts            All copy/content lives here — edit this file first
  utils.ts           cn() class merge helper
```

## Content

All product copy, testimonials, FAQ, ingredients, and routine steps live in
`lib/data.ts`. Swap in real copy and photography there without touching
component logic.

## Images

Placeholder imagery uses `picsum.photos` seeded URLs so the layout is fully
functional out of the box. Replace the `image` fields in `lib/data.ts` and
the hero `src` in `components/sections/hero.tsx` with real product
photography before shipping. `next.config.ts` is already configured to allow
`images.unsplash.com` if you source images from Unsplash.

## Accessibility

- Semantic landmarks (`header`, `main`, `footer`, `nav`) and skip-to-content link
- Visible focus rings (`:focus-visible`) tuned to the brand palette
- All interactive controls have `aria-label`s; the FAQ accordion and
  testimonial carousel are fully keyboard operable
- `prefers-reduced-motion` disables scroll/parallax animation and Framer Motion easing globally

## Performance & SEO

- `next/image` with responsive `sizes` on every image
- `next/font` self-hosts Fraunces + Manrope with `display: swap`
- Metadata API: Open Graph, Twitter cards, canonical URL, JSON-LD Organization schema
- `robots.ts` / `sitemap.ts` generated at build time
