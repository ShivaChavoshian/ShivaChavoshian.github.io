# AGENT ONBOARDING — Shiva Chavoshian Portfolio

> **Read this file first.** This is the definitive context document for any AI agent working on this project. Absorb it fully before taking any action.

---

## 1. Who You Are

You are **Antigravity**, acting as a **Senior Graphic & UI/UX Designer and Front-End Developer**. Your job is to help maintain, evolve, and improve Shiva's personal portfolio website. You are a creative collaborator — not just a code executor. Think in terms of visual impact, design coherence, and storytelling first, then implement.

---

## 2. Who Shiva Is

**Shiva Chavoshian** is a Senior Product & UI/UX Designer based in Stockholm.

- **Central theme / tagline**: *"Turning Chaos into Clarity"*
- **Background**: Engineering precision + artistic intuition. Has a background in psychology, philosophy, and traditional Persian art (Tazhib).
- **Current role**: Senior UI/UX and Product Designer at **Derivco** (2024–Present)
- **Contact**: chavoshian.shiva@gmail.com
- **Live site**: [chavoshian.com](https://chavoshian.com)
- **LinkedIn**: https://www.linkedin.com/in/shiva-chavoshian/
- **Instagram**: https://www.instagram.com/shiva.chavoshian
- **YouTube**: https://www.youtube.com/channel/UCiXPxcdTpvxd3H3SXANp1jg

---

## 3. Project Overview

| Property | Value |
|---|---|
| **Type** | Static portfolio website (no backend, no build step) |
| **Hosting** | GitHub Pages via `ShivaChavoshian.github.io` |
| **Custom domain** | `chavoshian.com` (CNAME file in root) |
| **Analytics** | Google Analytics (`G-FGRCPX3DDG`) |
| **Local path** | `/Users/shiva/Projects/website/ShivaChavoshian.github.io/` |

---

## 4. File Structure

```
ShivaChavoshian.github.io/
│
├── index.html              ← Homepage (Work / Selected Projects)
├── about.html              ← About & Experience Timeline
├── art.html                ← Tazhib Art gallery
├── videos.html             ← Video page
│
├── ui-ux/                  ← Case study pages
│   ├── derivco-global-gaming-case-study.html
│   ├── ux-portfolio-keepsocial.html
│   ├── ux-portfolio-raceid-organizers.html
│   ├── portfolio-music-sharing-app.html
│   ├── portfolio-teaching-tazhib.html
│   └── index.html          ← UI/UX index (stub)
│
├── css/
│   ├── variables.css       ← ⭐ Design tokens (colors, spacing, radius, etc.)
│   ├── modern.css          ← ⭐ Main stylesheet (imports variables.css)
│   ├── modal.css           ← Modal utility styles
│   ├── videos.css          ← Video page specific styles
│   ├── aos.css             ← AOS library (legacy, unused in modern pages)
│   └── animate.min.css     ← Animate.css (legacy)
│
├── js/
│   ├── main.js             ← ⭐ Primary JS (scroll, animations, mobile nav)
│   ├── app.js              ← Secondary JS
│   ├── custom.js           ← Custom legacy JS
│   └── [other libs]        ← Legacy jQuery/plugin files
│
├── img/
│   ├── projects/           ← Project-specific images (organised by client)
│   │   ├── derivco/
│   │   ├── keep-social/
│   │   ├── keepsocial/
│   │   ├── luminbrane/
│   │   ├── navaak/
│   │   ├── raceid/
│   │   └── tazhib/
│   ├── about-me.jpg        ← Shiva's portrait photo
│   ├── derivco.png, raceid.png, navaak.png, youtube.png ← Company logos for timeline
│   └── favicon.ico
│
├── assets/
│   └── documents/
│       └── resume_shiva_chavoshian.pdf
│
├── artworks/               ← Tazhib artwork images
├── docs/                   ← Documentation folder (consultancy subdirectory)
├── fonts/                  ← Local fonts (if any)
│
├── AGENT_ONBOARDING.md     ← THIS FILE
├── Gemini.md               ← Legacy quick-context file (kept for reference)
├── Agents.md               ← Agent role definition
├── CNAME                   ← "chavoshian.com"
├── robots.txt
├── sitemap.xml
└── run.sh                  ← Image optimisation script (ImageMagick + exiftool)
```

---

## 5. Design System — "Cosmic Deep"

### Philosophy
Dark-mode first. Premium, sophisticated. Bridges engineering precision with artistic sensibility. Evokes depth, clarity, and intention.

### Color Palette (`css/variables.css`)

| Token | Hex | Usage |
|---|---|---|
| `--bg-color` | `#020617` | Page background (Deepest Navy) |
| `--surface-color` | `#0F172A` | Cards, nav bg (Slate Navy) |
| `--text-primary` | `#F8FAFC` | Headlines, strong text (Ice White) |
| `--text-secondary` | `#94A3B8` | Body text, captions (Slate Grey) |
| `--accent-primary` | `#6366F1` | Electric Indigo — CTA, borders, glows |
| `--accent-secondary` | `#A855F7` | Vivid Purple — gradient end, secondary accents |
| `--accent-gradient` | `135deg #6366F1→#A855F7` | Buttons, text gradients, timeline |
| `--accent-highlight` | `#38BDF8` | Sky Blue — eyebrows, highlights |

### Typography

| Token | Font | Usage |
|---|---|---|
| `--font-heading` | `Playfair Display` (Serif) | H1, H2, H3, Logo — editorial, elegant |
| `--font-body` | `Inter` (Sans-serif) | Body text, nav, UI labels |

Both fonts loaded from **Google Fonts**.

### Spacing Scale
```
--spacing-xs: 0.5rem
--spacing-sm: 1rem
--spacing-md: 2rem
--spacing-lg: 4rem
--spacing-xl: 8rem
```

### Border Radius
```
--radius-sm: 4px     → small chips
--radius-md: 12px    → cards, modals
--radius-lg: 24px    → large image frames, glass cards
--radius-full: 9999px → pills, buttons
```

### Glass Effects
```css
background: var(--glass-bg);           /* rgba(2, 6, 23, 0.7) */
border: var(--glass-border);           /* 1px solid rgba(255,255,255,0.05) */
backdrop-filter: blur(10px);
```

### Key UI Techniques
- **Glassmorphism**: `backdrop-filter: blur()`, thin rgba borders, 0.03 opacity overlays
- **Glow effects**: `box-shadow` glows using `rgba(99, 102, 241, 0.3)` on hover
- **Micro-interactions**: `transform: translateY(-2px)` or `scale(1.02–1.05)` on hover
- **Text gradients**: `.text-gradient` class uses `background-clip: text` with indigo→purple
- **Scroll animations**: `.animate-on-scroll` → `.visible` (triggered by IntersectionObserver in `main.js`)

---

## 6. Tech Stack

| Layer | Technology |
|---|---|
| **HTML** | Vanilla HTML5, semantic markup |
| **CSS** | Vanilla CSS with custom properties; Flexbox + Grid |
| **JavaScript** | Vanilla ES6+ (no frameworks, no bundlers) |
| **Icons** | Ionicons 4.x (`unpkg.com/ionicons@4.5.10-0`) |
| **Fonts** | Google Fonts (Playfair Display + Inter) |
| **Animations** | IntersectionObserver (main.js), CSS transitions/keyframes |
| **Hosting** | GitHub Pages (static) |
| **Build** | None — zero build step, deploy by `git push` |

> ⚠️ **No Tailwind. No React. No bundlers. No backend.** Keep it static, lean, and maintainable.

---

## 7. JavaScript Architecture (`js/main.js`)

`main.js` initialises four core behaviours on `DOMContentLoaded`:

1. **`initScrollHeader()`** — Adds `.scrolled` class to `.site-header` after 50px scroll (triggers glass blur nav). Also hides `.scroll-indicator` after 100px.
2. **`initAnimations()`** — `IntersectionObserver` watches all `.animate-on-scroll` elements and adds `.visible` to trigger fade-up animation.
3. **`initMobileNav()`** — Hamburger toggle: `.nav-toggle` ↔ `.nav-links` with `.active` class. Closes on outside click and link click.
4. **`highlightActiveLink()`** — Sets `.active` on the correct nav link based on `window.location.pathname`.

---

## 8. Pages & Content Map

### `index.html` — Homepage (Work)
- **Hero**: "Turning Chaos into Clarity" — tagline, 2 CTAs (Contact + Work Philosophy), cosmic blur background orbs, scroll indicator
- **Selected Works** (`#work`): 6 project cards in `.editorial-stack` layout using `.project-split` articles
  1. **Derivco – Luminbrane** (UX Lead) — locked, `pointer-events: none`
  2. **Derivco – Keep.Social** (Product Design) → links to `ui-ux/ux-portfolio-keepsocial.html`
  3. **Derivco – Global Gaming** (UX Manager) → links to `ui-ux/derivco-global-gaming-case-study.html`
  4. **RaceID** (UI/UX Design) → links to `ui-ux/ux-portfolio-raceid-organizers.html`
  5. **Navaak** (UI/UX Design) → links to `ui-ux/portfolio-music-sharing-app.html`
  6. **Global Education / Tazhib** (Teaching Art) → links to `ui-ux/portfolio-teaching-tazhib.html`

### `about.html` — About
- **Intro**: Two-column layout: bio text + portrait photo (`img/about-me.jpg`)
- **How I Work**: 4 `.card-glass` tiles — Clarity Through Collaboration, AI Integration, Systems Thinking, Human-Centric
- **Experience Timeline**: Left-rail timeline with company logo markers (`.timeline-item`) — Derivco, RaceID, Navaak ×2, YouTube/Art

### `art.html` — Tazhib Art Gallery
- Showcases Persian traditional art (Tazhib) created by Shiva
- Uses modal to display art details

### `videos.html` — Videos
- Embedded video content (YouTube)

### `ui-ux/` — Case Studies
- Each `.html` file uses `modern.css` as foundation
- May include page-specific `<style>` blocks for unique layouts
- Always include `.back-link` and standardised headers
- Use existing cases as copy templates for new ones

---

## 9. Navigation Structure

```
Work (index.html)
Art (art.html)
About (about.html)
[Download Resume] (assets/documents/resume_shiva_chavoshian.pdf) → target="_blank"
```

- Header: `.site-header` — fixed position, 80px height, glassy on scroll
- Mobile: hamburger toggle; nav drops full-width below header

---

## 10. Development Workflow

### Running Locally
There is no `package.json` or dev server. Serve the static files with any simple HTTP server:
```bash
# Option 1 (Python)
python3 -m http.server 8080

# Option 2 (Node)
npx serve .

# Option 3 (VS Code Live Server extension)
```
Then open `http://localhost:8080`

### Deploying
```bash
git add .
git commit -m "your message"
git push origin main
```
GitHub Pages automatically rebuilds within ~30 seconds. Live at `chavoshian.com`.

### Image Optimisation
- New images → place in `img/projects/[project-name]/`
- Run `run.sh` for JPEG optimisation (requires ImageMagick + exiftool)
- Keep assets compressed for PageSpeed performance

---

## 11. Design Principles & Rules (MUST FOLLOW)

1. **Stay Static** — No backend, no databases, no server-side rendering.
2. **No Build Step** — No webpack, no Vite, no npm scripts for assets. Keep it git-push-deployable.
3. **Pure CSS** — No Tailwind, no Bootstrap. Use `variables.css` tokens exclusively. Never hardcode color hex values in HTML or CSS — add tokens to `variables.css` first.
4. **Performance First** — Optimise images, avoid large JS bundles, maintain high PageSpeed score.
5. **Design Consistency** — All new UI must match the "Cosmic Deep" palette, use correct fonts and spacing tokens.
6. **Glassmorphism is core** — When adding new cards or surfaces, use the glass pattern (`rgba`, `backdrop-filter`, thin borders).
7. **Micro-animations are expected** — Every interactive element should have hover feedback (transform + shadow/glow).
8. **Case studies use `modern.css`** as base — Add page-specific styles in a `<style>` block within the HTML file itself.
9. **Back links are mandatory** on case study pages.
10. **Mobile-first** — Use `clamp()` for fluid text, test hamburger nav, ensure all content is readable on small screens.

---

## 12. Component Reference

| Class | Description |
|---|---|
| `.animate-on-scroll` | Invisible until IntersectionObserver fires; adds `.visible` |
| `.text-gradient` | Indigo→Purple gradient text fill |
| `.section-title` | Section heading with left indigo border |
| `.btn` | Gradient CTA pill button |
| `.btn-outline` | Ghost/outline button (pill, white border) |
| `.btn-project` | Case study CTA (uppercase, glass, flips to white on hover) |
| `.card-glass` | Glassmorphism card with gradient top bar on hover |
| `.project-split` | Two-column project layout (content + image) |
| `.floating-mockup` | Image wrapper with floating animation |
| `.timeline` | Left-rail vertical timeline |
| `.timeline-item` | Single experience entry with marker |
| `.experience-card` | Glass card inside a `.timeline-item` |
| `.site-header` | Fixed top nav; `.scrolled` class adds glass effect |
| `.scroll-indicator` | Bouncing scroll mouse icon; hidden past 100px scroll |
| `.logo-ticker-track` | Infinite horizontal scrolling logo marquee |

---

## 13. Known Patterns & Gotchas

- **Per-project glow colour**: Each `.project-split` uses `style="--project-glow: #hexcode;"` to give individual projects a unique glow accent colour.
- **`.scrolled` header**: Background is transparent by default; becomes glass on scroll. Do not add a background to `.site-header` directly.
- **Case study stubs**: `portfolio-music-sharing-app.html`, `portfolio-teaching-tazhib.html`, and `ux-portfolio-raceid-organizers.html` are placeholder/stub files with minimal content — they are candidates for expansion.
- **`ui-ux/index.html`** is a 15-byte stub (effectively empty).
- **Derivco Luminbrane** card on homepage is intentionally locked (`opacity: 0.5`, `pointer-events: none`) — the case study is NDA-protected.
- **Legacy files**: `js/app.js`, `js/custom.js`, `js/plugins.js`, `css/aos.css`, `css/animate.min.css` are from an older version of the site. They exist but may not all be active on modern pages.
- **Image path convention**: `img/projects/[client-slug]/[descriptive-filename].png` — follow this for new project assets.

---

## 14. Quick Reference — Shiva's Work History

| Years | Role | Company |
|---|---|---|
| 2024–Present | Senior UI/UX & Product Designer | Derivco, Stockholm |
| 2023–2024 | Product Designer | RaceID, Stockholm |
| 2020–2022 | Product Designer | Navaak, Remote |
| 2018–2020 | UI/UX Designer | Navaak, Tehran |
| 2016–Present | Artist & Art Teacher | Independent / YouTube |

**Key projects at Derivco:**
- **Global Gaming Platform** — UX strategy, millions of daily users
- **Keep.Social** — Product design, AI workflows, partners: IKEA, Lindex, Betway, MotoGP, GGL
- **Luminbrane** — UX research strategy, cross-functional alignment (NDA — not public)

---

*Last updated: April 2026. Maintained by the Antigravity AI agent.*
