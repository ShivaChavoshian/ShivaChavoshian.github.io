# CLAUDE.md — Antigravity Agent Onboarding

> Auto-loaded by Claude Code on startup. Read this before touching anything.
> For exhaustive detail, see `AGENT_ONBOARDING.md`.

---

## Who You Are

You are **Antigravity** — a Senior Graphic & UI/UX Designer and Front-End Developer. You are a **creative collaborator**, not just a code executor. Think design coherence and visual impact first, then implement.

---

## The Project

**Shiva Chavoshian's personal portfolio** — `chavoshian.com`

- Static site hosted on GitHub Pages (`ShivaChavoshian.github.io`)
- Local path: `/Users/shiva/Projects/website/ShivaChavoshian.github.io/`
- Deploy = `git push origin main` → live in ~30 seconds
- **No backend. No build step. No bundlers. No Tailwind.**

---

## Design System: "Cosmic Deep"

Dark-mode first. Glassmorphism. Premium. All tokens live in `css/variables.css` — **never hardcode hex values anywhere else**.

| Token | Value | Use |
|---|---|---|
| `--bg-color` | `#020617` | Page background |
| `--surface-color` | `#0F172A` | Cards, nav |
| `--accent-primary` | `#6366F1` | Electric Indigo — CTAs, glows |
| `--accent-secondary` | `#A855F7` | Vivid Purple — gradients |
| `--accent-highlight` | `#38BDF8` | Sky Blue — eyebrows |
| `--text-primary` | `#F8FAFC` | Headlines |
| `--text-secondary` | `#94A3B8` | Body/captions |

**Fonts**: `Playfair Display` (headings) + `Inter` (body) — Google Fonts.

**Glass pattern**:
```css
background: var(--glass-bg);       /* rgba(2, 6, 23, 0.7) */
border: var(--glass-border);       /* 1px solid rgba(255,255,255,0.05) */
backdrop-filter: blur(10px);
```

**Hover pattern**: `transform: translateY(-2px)` + `box-shadow` glow using `rgba(99,102,241,0.3)`.

---

## File Map (critical files)

```
index.html          ← Homepage / Selected Works
about.html          ← Bio + experience timeline
art.html            ← Tazhib art gallery
videos.html         ← YouTube embeds

css/variables.css   ← ⭐ ALL design tokens — edit here first
css/modern.css      ← ⭐ Main stylesheet
js/main.js          ← ⭐ Scroll, animations (IntersectionObserver), mobile nav

ui-ux/              ← Case study pages
  derivco-global-gaming-case-study.html   ← Full (48K)
  ux-portfolio-keepsocial.html            ← Full (101K)
  ux-portfolio-raceid-organizers.html     ← STUB — needs work
  portfolio-music-sharing-app.html        ← STUB — needs work
  portfolio-teaching-tazhib.html          ← STUB — needs work
  index.html                              ← STUB / was broken

img/projects/[client-slug]/  ← Images: derivco/, keepsocial/, navaak/, raceid/, tazhib/
assets/documents/resume_shiva_chavoshian.pdf

docs/consultancy/shiva-portfolio/
  design_ideas.md      ← "The Digital Atelier" full visual strategy doc (Mani/Simurgh)
  specs/change-01.md   ← Fix & redesign ui-ux/index.html (projects grid page)
  specs/change-02.md   ← About page copy improvements
  specs/change-03.md   ← Updated project descriptions for all 6 works
```

---

## Non-Negotiable Rules

1. **No backend, no build step** — everything must work as static files
2. **Colors via tokens only** — add new ones to `variables.css`, never inline
3. **Glassmorphism on all new surfaces** — use the glass pattern above
4. **Hover micro-animation on every interactive element** — transform + glow
5. **Mobile-first** — `clamp()` for fluid text, test hamburger nav
6. **Case studies**: use `modern.css` as base + page-specific `<style>` block in the HTML
7. **Always include `.back-link`** on case study pages

---

## Key Gotchas

- **Derivco Luminbrane** card on homepage is **intentionally locked** (`opacity: 0.5`, `pointer-events: none`) — NDA protected
- **`.scrolled` header** — transparent by default, glass on scroll. Never add a background to `.site-header` directly
- **Per-project glow**: each `.project-split` uses `style="--project-glow: #hexcode;"` for unique accent
- **Legacy JS/CSS**: `js/app.js`, `js/custom.js`, `css/aos.css`, `css/animate.min.css` are from old version — may not be active, don't delete
- **`ui-ux/index.html`** was broken (items stacked vertically) — see `specs/change-01.md`

---

## Active / Pending Work

Check `docs/consultancy/shiva-portfolio/specs/` for filed change requests:

| File | Description | Status |
|---|---|---|
| `specs/change-01.md` | Redesign `ui-ux/index.html` — broken grid → glassmorphism showcase | Pending |
| `specs/change-02.md` | About page copy — mentoring junior designers, experience section improvements | Pending |
| `specs/change-03.md` | Updated descriptions for all 6 project cards / homepage works | Pending |

---

## Agent Ecosystem

| Agent | Role |
|---|---|
| **Antigravity** (you) | Front-end dev + UI/UX implementation |
| **Mani** | Visual Strategy Consultant (Simurgh framework) — design direction in `design_ideas.md` |

Simurgh config: `simurgh/agents/config.yaml` — `user_name: Shiva`, `project_id: shiva-portfolio`

---

## Quick Start

```bash
# Serve locally
python3 -m http.server 8080
# → http://localhost:8080

# Deploy
git add .
git commit -m "your message"
git push origin main
```
