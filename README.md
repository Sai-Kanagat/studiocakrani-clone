# Studio Cakrani Clone

## Local development

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build for production: `npm run build`
- Preview production build: `npm run preview`

## Deploy to Vercel

This project builds a static client bundle to `dist/client` and uses an SPA rewrite in `vercel.json`.

1. Import the GitHub repo in Vercel and allow framework auto-detection (Vite/Other).
2. Set **Build Command** to `npm run build` and **Output Directory** to `dist/client`.
3. Add the environment variables from the repo root `.env` (or your Supabase project values) in Vercel Project Settings. `VITE_`-prefixed values are exposed to the client, while non-prefixed values are for server/runtime usage.
   - `SUPABASE_PUBLISHABLE_KEY`
   - `SUPABASE_URL`
   - `VITE_SUPABASE_PROJECT_ID`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
   - `VITE_SUPABASE_URL`
4. Deploy and verify client-side routing works (the rewrite in `vercel.json` sends all paths to `index.html`).
