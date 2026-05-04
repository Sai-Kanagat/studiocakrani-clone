## Studio Ligjore Cakrani — Professional Law Firm Website

A polished, SEO-optimized website for a prestigious Albanian law firm, with trilingual support and a refined navy/charcoal/gold visual identity.

### Pages (separate routes for SEO)
- `/` — Home: hero with Kujtim Cakrani's photo, headline, brief intro, services preview, ECHR/SPAK highlight, testimonials, CTA.
- `/services` — Full breakdown: Civil, Penal, Administrative, Corporate Law, plus prominent ECHR (Strasbourg) and SPAK sections.
- `/about` — About Kujtim Cakrani (bio, credentials, philosophy) and the firm.
- `/contact` — Contact form, phone, email, three office locations with map embeds.

Shared header (logo + nav + language switcher) and footer (contact summary, locations, copyright) on every page.

### Brand & Design
- Palette: Deep Navy (#0A1F44), Charcoal (#1F2937), Gold accent (#C8A55B), Ivory/White backgrounds.
- Typography: Serif for headings (e.g., Playfair Display / Cormorant) — authoritative, classical. Sans-serif for body (Inter).
- Visual tone: editorial, restrained, lots of whitespace, subtle gold dividers, large hero portrait, refined icons.
- Fully responsive (mobile-first), accessible contrast, dark navy header with gold underline accents.

### Hero (Home)
- Left: headline "Studio Ligjore Cakrani: Excellence in Legal Representation" + subhead + two CTAs (Contact / Our Services).
- Right: portrait photo of Kujtim Cakrani (uploaded image, copied into `src/assets/kujtim-cakrani.jpg`).
- Below: trust strip — "Cases across Albania · SPAK expertise · ECHR Strasbourg".

### Services Section
Cards for: Civil Law, Penal Law, Administrative Law, Corporate Law. Each with icon, short description, "Learn more" link to `/services`.

### Featured: ECHR & SPAK
Dedicated full-width section on home and detailed blocks on `/services`:
- Strasbourg ECHR — representation before the European Court of Human Rights.
- SPAK — significant track record in anti-corruption / organized crime cases.

### Why Choose Us / Testimonials
- 3–4 short testimonials (placeholder names, marked as illustrative — user can replace).
- "Why Choose Us": pillars (Track Record, Nationwide Reach, International Practice, Discretion).

### Contact
- Form: name, email, phone, subject, message. Client-side validation with Zod (length limits, email format). Submission shows a success toast (no backend wired yet — placeholder handler; can connect to Lovable Cloud later).
- Phone: +355 69 941 3001 (click-to-call), Email: studiocakrani@gmail.com (mailto).
- Three office cards:
  - Vlorë — Rruga Sali Hali Kokonodi
  - Tiranë — Kompleksi Kika 2
  - Fier — pranë Gjykatës së Shkallës së Parë
- Each with an embedded Google Maps iframe.

### Multilingual (SQ / EN / IT)
- Language switcher in navbar (SQ default).
- Lightweight in-house i18n: a `LanguageProvider` (React context) + `useT()` hook reading from `src/i18n/{sq,en,it}.ts` dictionaries. Persists choice in `localStorage`. SSR-safe (defaults to SQ on server).
- All visible copy goes through translation keys; three dictionaries fully populated.

### SEO
- Per-route `head()` with unique title, description, og:title, og:description.
- Keywords woven into copy & meta: "Best lawyer in Albania", "SPAK legal representation", "Strasbourg Human Rights Lawyer", "Studio Ligjore Tirane", "Avokat Vlorë", "Avokat Tiranë".
- JSON-LD `LegalService` structured data on home (name, address list, phone, email, areaServed).
- Home `og:image` set to the hero portrait.

### Technical Notes
- TanStack Start routes: `index.tsx`, `services.tsx`, `about.tsx`, `contact.tsx`, plus shared `Header`/`Footer`/`LanguageSwitcher` components in `src/components/`.
- i18n via React context (no extra dependency) — keeps bundle lean and SSR-friendly.
- Form validation with `zod` (already common in stack) + shadcn `form`/`input`/`textarea`/`sonner` for toasts.
- Image: copy uploaded portrait to `src/assets/kujtim-cakrani.jpg` and import as ES module.
- Tailwind theme tokens updated in `src/styles.css` for navy/gold palette; serif font added via Google Fonts link in root `head`.

### Out of scope (can add later)
- Real backend for contact form (email delivery via Lovable Cloud / Resend).
- CMS for editing testimonials/bio.
- Blog / news section.
