# AGENTS.md

## Project Overview

React + TypeScript personal portfolio for Lauanderson Rael. Deployed on Vercel at `lauanderson-portfolio.vercel.app`. UI text and comments are in **Brazilian Portuguese (pt-BR)**.

## Commands

| Task | Command |
|------|---------|
| Dev server | `pnpm dev` (Vite, port 5173) |
| Build | `pnpm build` — runs `tsc && vite build` |
| Lint | `pnpm lint` — ESLint with `--max-warnings 0` (any warning = failure) |
| Preview | `pnpm preview` |

**No test suite exists.** No test framework is configured.

**Preferred package manager: pnpm.** Both `package-lock.json` and `pnpm-lock.yaml` exist — ignore the npm lockfile.

## Environment Variables

Copy `.env.example` to `.env`:

- `VITE_CURRENTS_API_KEY` — Currents API key for the blog page (news feed)
- `VITE_API_URL` — Blog API base URL (`https://api.currentsapi.services/v1`)
- `VITE_CV_URL` — Google Drive link for CV download

**Gotcha:** The admin/login features use a **different backend** (`https://backend-instabytes-776727787744.southamerica-east1.run.app/posts`) hardcoded in `vite.config.ts` as a dev proxy. The `VITE_API_URL` env var is only for the Currents blog API, not the admin backend.

## Architecture

- **Entry:** `index.html` → `src/main.tsx` → `src/App.tsx`
- **Routing:** React Router v7, all routes nested under a shared `Layout` (Header + Footer + ThemeProvider) via `<Outlet />`
- **Pages:** `Main` (home), `Blog`, `Youtube`, `Login`, `ProtectedPage`, `Admin`, `Page404`
- **Auth:** JWT in `localStorage`. `ProtectedPage` checks for token, redirects to `/login` if missing

## Styling

- **Primary:** `styled-components` — each component/page has a co-located `styles.ts` exporting styled-components (typically `Container`)
- **Theme:** CSS custom properties in `global.css` swapped via `data-theme` attribute on `<html>`. Dark (default) and light themes
- **Flash prevention:** Inline `<script>` in `index.html` reads `localStorage` and sets `data-theme` before React mounts
- **Bootstrap:** Listed as a dependency but **unused** in source code — can be safely removed

## Key Gotchas

- **`pnpm build` runs `tsc` first** — type errors block production builds even if Vite would succeed
- **`noUnusedLocals: true` + `noUnusedParameters: true`** in tsconfig — unused imports/vars fail the build
- **`--max-warnings 0`** in lint — any ESLint warning (including `react-refresh/only-export-components`) fails lint
- **`target="blank"` (wrong)** used in several files instead of `target="_blank"` — links open in a window named "blank" instead of a new tab
- **`*.png` is gitignored** — new PNGs won't be tracked unless force-added with `git add -f`
- **Login file is `login.tsx`** (lowercase), not `index.tsx` like all other pages
- **`cors` package** is in dependencies — it's server-side middleware, useless in a frontend app
- **Vercel SPA rewrites** in `vercel.json` catch all routes except `sitemap.xml`, `robots.txt`, `og-image.png`, `icon.svg`

## Deployment

Vercel. SPA rewrites all non-asset routes to `index.html`. No CI/CD pipeline configured — deploys are triggered by push to `main`.
