# Biniyam Abera — Portfolio

> **Live site:** [biniyam.com](https://biniyam.com)  
> **Repository:** [github.com/binicode/biniyam-portfolio](https://github.com/binicode/biniyam-portfolio)

A production-grade personal portfolio built from scratch — designed to target remote and Web3 startups. Built with modern web technologies, accessibility in mind, and optimized for performance.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Sections](#sections)
- [Features](#features)
- [Performance](#performance)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Roadmap](#roadmap)

---

## Overview

This portfolio was built to represent a full-stack developer transitioning from civil engineering to software engineering. The design philosophy is: **confident, minimal, purposeful** — every element earns its place.

The target audience is remote-first and Web3 startups — teams that value sharp thinking, modern tech, and developers who can ship independently.

---

## Tech Stack

### Framework
**Next.js 16 (App Router)**  
Chosen for its production-grade capabilities, built-in image optimization, server-side rendering, file-based routing, and seamless Vercel deployment. The App Router provides a modern React architecture with React Server Components.

### Language
**TypeScript**  
Every component, data file, and utility is fully typed. TypeScript catches errors at compile time, makes refactoring safer, and signals professional code quality to hiring teams.

### Styling
**Tailwind CSS v4**  
Utility-first CSS framework. Chosen for its speed, consistency, and the ability to build complex responsive layouts without leaving the component file. Dark mode is implemented using Tailwind's `dark:` variant strategy with `next-themes`.

### Animation
**Framer Motion**  
Used for scroll-triggered fade-up animations on all sections and staggered entrance animations on the Hero. Animations are subtle and purposeful — they guide the eye without distracting from content.

### Icons
**Lucide React**  
Clean, consistent, and tree-shakeable icon library. Used throughout the navbar, contact section, hero social links, and timeline.

### Contact Form
**EmailJS**  
Sends emails directly from the browser without a backend server. Integrated with a custom HTML email template. Environment variables keep API keys secure and out of the repository.

### Theme
**next-themes**  
Handles light/dark mode with system preference detection. Light mode uses a warm Off-White + Amber palette (Option D). Dark mode uses a Dark Slate + Cyan palette (Option B).

### Image Optimization
**Next.js Image + Sharp**  
Profile picture uses the `next/image` component for automatic format conversion (WebP/AVIF), lazy loading, and responsive sizing. Sharp is installed as the image processing engine.

### Utilities
- **clsx + tailwind-merge** — for clean conditional className merging via a `cn()` utility function
- **@emailjs/browser** — EmailJS browser SDK for contact form

---

## Project Structure

```
biniyam-portfolio/
├── public/
│   ├── images/
│   │   ├── profile-picture.webp    # Profile photo
│   │   └── hero_bg.jpg             # Hero background image
│   └── favicon.svg                 # Custom B favicon
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css             # Tailwind import + dark variant config
│   │   ├── layout.tsx              # Root layout with metadata + providers
│   │   └── page.tsx                # Main page with lazy-loaded sections
│   ├── components/
│   │   ├── sections/               # One file per page section
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Timeline.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/                     # Global layout components
│   │       ├── Navbar.tsx
│   │       ├── Footer.tsx
│   │       └── ThemeProvider.tsx
│   ├── data/
│   │   └── portfolio.ts            # All content in one place
│   ├── lib/
│   │   ├── animations.ts           # Reusable Framer Motion variants
│   │   └── utils.ts                # cn() utility function
│   └── types/
│       └── index.ts                # TypeScript interfaces
```

---

## Sections

### Hero
- Staircase typography headline — "I engineer / digital / products"
- SVG wave background in light mode, dark gradient in dark mode
- Syntax-highlighted TypeScript code block on desktop and tablet
- Compact terminal badge on mobile
- Available for opportunities badge in the Navbar
- CTA buttons with smooth scroll

### About
- Profile photo with location badge overlay
- Expandable bio with Read more / Read less toggle
- Trait cards spanning full width
- Download Resume and View Projects CTAs

### Skills
- Grouped by category: Frontend, Backend, Database, DevOps, AI & Web3
- Skill pills with hover accent colors
- Accent line before each category label

### Projects
- 5 featured projects with large numbered cards
- Stack pills, description, Source and Live Demo links
- Hover effects — title color change, border highlight, shadow
- "In Progress" status badge

### Journey
- Two-column grid layout
- Completed vs In Progress visual differentiation
- Each milestone as a card with date, title, and description

### Contact
- EmailJS-powered contact form with loading, success, and error states
- Contact info cards for Email, GitHub, and LinkedIn
- Form inputs with focus states matching the theme accent

### Navbar
- Sticky with scroll-triggered background
- Active section detection via IntersectionObserver
- Accessible mobile menu with focus trap and keyboard navigation
- Dark/light mode toggle
- Available for opportunities pulsing dot

### Footer
- Warm dark stone background for visual contrast
- Logo, copyright, nav links, and social icons

---

## Features

- ✅ **Dark / Light mode** — system preference + manual toggle
- ✅ **Fully responsive** — mobile, tablet, desktop
- ✅ **Accessible** — ARIA labels, semantic HTML, focus management, keyboard navigation
- ✅ **SEO optimized** — Open Graph, Twitter Card, meta description, keywords
- ✅ **Smooth scroll** — native CSS scroll-behavior
- ✅ **Lazy loading** — sections loaded on demand with Next.js dynamic imports
- ✅ **Image optimization** — next/image with Sharp
- ✅ **Custom favicon** — SVG "B" mark in amber
- ✅ **Contact form** — EmailJS without a backend
- ✅ **Atomic commits** — clean Git history

---

## Performance

Lighthouse scores (production):

| Metric | Desktop | Mobile |
|--------|---------|--------|
| Performance | 85% | 43% |
| Accessibility | 96% | 96% |
| Best Practices | 100% | 100% |
| SEO | 100% | 100% |

Mobile performance is impacted by Framer Motion animations and the hero background image on slow 3G simulation. Real-world performance on 4G/WiFi is significantly faster.

---

## Getting Started

### Prerequisites
- Node.js v18+
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/binicode/biniyam-portfolio.git

# Navigate into the project
cd biniyam-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Create a `.env.local` file in the root of the project:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these values from your [EmailJS dashboard](https://emailjs.com).

---

## Deployment

The portfolio is deployed on **Vercel** with automatic deployments on every push to the `main` branch.

```bash
# Deploy by pushing to main
git push origin main
```

Custom domain `biniyam.com` is connected via Namecheap DNS with:
- `A` record pointing to Vercel's IP
- `CNAME` record for `www` subdomain

---

## Roadmap

- [ ] Add LinkedIn profile link
- [ ] Upload real resume PDF
- [ ] Replace project placeholders with live projects:
  - [ ] SaaS Dashboard — Next.js, Node.js, MongoDB
  - [ ] AI-Powered App — OpenAI API, Next.js
  - [ ] Web3 DApp — ethers.js, Solidity
  - [ ] REST API + DevOps — Docker, GitHub Actions
  - [ ] Real-Time App — Socket.io, Node.js
- [ ] Add Open Graph image for social sharing
- [ ] Improve mobile Lighthouse performance score

---

## Author

**Biniyam Abera**  
Full-Stack Developer — Addis Ababa, Ethiopia  
[biniyam.com](https://biniyam.com) · [github.com/binicode](https://github.com/binicode) · myrita099@gmail.com
