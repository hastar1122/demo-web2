# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static, no-build marketing website (Vietnamese) for a dermatology clinic ("Phòng Khám Da Liễu Bác Sĩ Tân"). Plain HTML/CSS/vanilla JS — no npm, no bundler, no package manager, no build/lint/test tooling.

- `index.html` — home page (hero, about, services, doctors, gallery, testimonials, booking, footer)
- `dich-vu.html` — services listing page
- `dich-vu-chi-tiet.html` — service detail page; reads a `?slug=` query param and looks it up in `SERVICES_DATA` (requires JS to render — opening it directly without a slug shows placeholder content)
- `tin-tuc.html` — news/blog page
- `services-data.js` — single source of truth (`const SERVICES_DATA = [...]`) consumed by both the services listing and detail pages via slug lookup; add/edit services here, not by duplicating markup
- `script.js` — vanilla JS: scroll animations, counters, before/after slider, lightbox, drag/swipe carousel, accordion, booking logic, mobile nav
- `style.css` — all styling; CSS custom properties defined in `:root` (colors, shadows, radii, transitions)

## Preview

Use VS Code's Live Server extension to preview locally. There is no dev server command to run from the CLI.

## Code style

- 2-space indentation across HTML, CSS, and JS
- JS: `const`/arrow functions, camelCase naming (e.g. `initDragCarousel`)
- CSS: kebab-case custom properties (e.g. `--primary`, `--shadow-md`, `--radius-lg`)
- HTML: `lang="vi"`, section boundaries marked with `<!-- === Header === -->`-style comments

## Linting

ESLint (JS) and Stylelint (CSS) are configured. Run `npm run lint` (or `npm run lint:js` / `npm run lint:css` individually). Config lives in `eslint.config.js` and `.stylelintrc.json` — several stylelint-config-standard rules are disabled because they conflict with the existing code style (e.g. `rgba()` notation, vendor prefixes needed for Safari, the `.sr-only` `clip` accessibility pattern).

## Placeholder business data

The domain (`dalieubacsitan.vn`), phone number, and address used throughout the site are explicitly marked in comments as placeholders, not real production data. Do not change these unless the user explicitly asks you to update them.
