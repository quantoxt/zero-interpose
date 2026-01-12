# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Zero Interpose is a Nuxt 4 application that provides direct-to-reader websites for authors. Authors can bypass restrictive publishing platforms, keep 100% of earnings, and connect directly with readers.

**Core Value:** Skip the middleman. Authors get full-stack websites with Stripe payments, book sales, and a coin system for serialized content.

## Tech Stack

- **Framework:** Nuxt 4 (app directory structure)
- **UI Components:** Shadcn Vue (via `shadcn-nuxt` module)
- **Styling:** Tailwind CSS v4 + tw-animate-css
- **Icons:** Lucide Vue Next
- **Tables:** Tanstack Vue Table
- **Utilities:** VueUse, clsx, tailwind-merge, class-variance-authority
- **Backend/DB:** Supabase
- **Payments:** Stripe (planned)

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint (via @nuxt/eslint)
# ESLint config extends auto-generated .nuxt/eslint.config.mjs
```

## Architecture

### Directory Structure

```
app/
├── assets/css/
│   ├── tailwind.css     # Tailwind v4 theme with CSS variables
│   └── default.css      # Global default styles (transitions)
├── components/ui/       # Shadcn components (auto-generated, no prefix)
├── layouts/
│   ├── default.vue      # Main layout wrapper
│   └── dashboard.vue    # Author dashboard layout (planned)
├── pages/               # File-based routing
│   ├── index.vue        # Landing page
│   └── ...
└── app.vue              # Root component with NuxtLayout + NuxtPage

content/                 # Project documentation, specs
├── info.md              # Brand & MVP summary
├── mvp-goals.md
├── advanced-goals.md
└── ...
```

### Shadcn Integration

- Components in `app/components/ui/` have no prefix (config: `prefix: ''`)
- Import pattern: Use `UiButton`, `UiCard`, etc. (Nuxt auto-imports with `Ui` prefix for components in `ui/` directory)
- Each component folder has an `index.ts` barrel export

### Tailwind CSS v4 Setup

- Uses `@import "tailwindcss"` (not PostCSS plugin config)
- Theme defined via `@theme inline` block
- CSS variables for colors in `:root` (light) and `.dark` (dark)
- Use `bg-(--primary)`, `text-(--foreground)`, etc. for theme colors
- Avoid `bg-primary` style classes - use CSS variable syntax

### Key Design Patterns

1. **Layout System:** `app.vue` wraps everything in `<NuxtLayout>`, pages render via `<NuxtPage />`
2. **Component Styling:** Use `<style lang="css" scoped>` with `@reference "tailwindcss";` in Vue components
3. **Color System:** Read `app/assets/css/tailwind.css` for available CSS variables
4. **Transitions:** Global `transition: all 0.3s ease` in `default.css`

## MVP Features (Planned)

1. Author Dashboard – sales, buyers, payouts
2. Public Book Showcase – responsive book cards
3. Direct eBook Purchase – Stripe integration
4. Reader Library – re-download completed books, read unlocked chapters
5. Coin System – buy/spend coins on serialized content

## Hybrid Book Access Model

- **Serializing books:** Readers buy coins → unlock chapters → online reading only
- **Completed books:** Purchase once → downloadable forever
- Authors control book status (`serializing` ↔ `completed`) in dashboard
