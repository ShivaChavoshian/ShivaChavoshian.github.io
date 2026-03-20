# Gemini Context: Shiva Chavoshian Portfolio

## Project Overview
This is a professional static portfolio website for **Shiva Chavoshian**, a Senior Product ui/ux Designer. The site is designed to showcase high-level UI/UX design capabilities to hiring managers and recruiters to find a new job.

### Core Philosophy
- **"Turning Chaos into Clarity"**: The central theme of bridging engineering precision with artistic intuition.
- **The North Star**: A design metaphor for navigation and consistency throughout the user journey.

## Design System: "Cosmic Deep"
The visual language is modern, premium, and sophisticated, utilizing a dark-mode first aesthetic with vibrant accents.

### Color Palette
- **Background**: Deep Navy (`#020617`), Surface Slate (`#0F172A`).
- **Text**: Ice White (`#F8FAFC`), Slate Grey (`#94A3B8`).
- **Accents**: Electric Indigo (`#6366F1`), Vivid Purple (`#A855F7`), Sky Blue (`#38BDF8`).
- **Gradients**: Linear 135deg transitions from Indigo to Purple.

### Typography
- **Headings**: `Playfair Display` (Serif) – for an elegant, editorial feel.
- **Body**: `Inter` (Sans-serif) – for modern readability and technical precision.

### UI Techniques
- **Glassmorphism**: High use of `backdrop-filter: blur()`, thin borders (`rgba(255,255,255,0.05)`), and 0.03 opacity overlays.
- **Glow Effects**: Subtle `box-shadow` glows on hover for buttons and cards.
- **Micro-interactions**: Scale transforms (typically `1.02` or `1.05`) and Y-axis shifts on hover.

## Technical Architecture
- **Tech Stack**: Vanilla HTML5, Modern CSS (Variables, Flexbox, Grid), and Vanilla ES6+ JavaScript.
- **Animations**: Driven by `IntersectionObserver` in `js/main.js`, triggering the `.visible` class on `.animate-on-scroll` elements.
- **Responsive Strategy**: Fluid typography using `clamp()` and mobile-first navigation with a hamburger toggle.
- **Case Study Pattern**: Individual HTML files in `ui-ux/` utilizing `modern.css` but often containing page-specific `<style>` blocks for unique layout needs (e.g., specific grid ratios or animation overrides).

## Maintenance Workflow
1. **Asset Management**: Images should be optimized and placed in `img/projects/[project-name]/`.
2. **New Case Studies**: Use existing items in `ui-ux/` as templates. Ensure `back-link` and standardized headers are maintained.
3. **Styles**: Prefer adding tokens to `css/variables.css` rather than hardcoding values.
4. **No Build Step**: Content is updated manually; avoid adding heavy bundlers or complex CI/CD dependencies to keep the site lightweight and easily editable.

## Constraints & Rules
- **Stay Static**: All features must work without a backend.
- **Pure Styles**: Avoid utility frameworks like Tailwind unless explicitly requested.
- **Performance**: Maintain high PageSpeed scores through optimized assets and minimal JS dependencies.
