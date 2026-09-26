# Owner Financing the Halal Way

A landing page and signup questionnaire for building the "Owner Financing the
Halal Way" community. Visitors learn what the community is about, see CTAs
for the WhatsApp Group, Instagram, and Facebook Group, and can sign up
through a short questionnaire that buckets them into **Investor**, **Looking
for a primary home**, or **Just exploring**. Every signup is saved to a
Supabase database.

This is intentionally scoped as a fast lead-capture site, not the full member
platform (auth, property showcase, document library, admin panel) described
in the original project brief. That stays a separate future phase.

## Stack

- **Next.js 14 (App Router) + TypeScript** — the page and the API route that
  saves leads, in one project, deployed with zero server config.
- **Tailwind CSS** — styling, using the brand palette (emerald, sand, gold).
- **Supabase (Postgres)** — stores signups in a `leads` table. Free tier is
  enough for this. View, filter, and export leads to CSV directly from the
  Supabase table editor, no admin panel needed.
- **Vercel** — hosting, deploys on every push to the main branch.

## Local setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a free project at [supabase.com](https://supabase.com).
3. In the Supabase dashboard, open the SQL editor and run the contents of
   `supabase/migrations/0001_leads.sql`. This creates the `leads` table.
4. In Supabase, go to Project Settings -> API and copy:
   - Project URL
   - `anon` public key
   - `service_role` key (keep this secret, server-side only)
5. Copy `.env.example` to `.env.local` and fill in the Supabase values:
   ```bash
   cp .env.example .env.local
   ```
6. Run the dev server:
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000`.

## Adding your community links

`NEXT_PUBLIC_WHATSAPP_URL`, `NEXT_PUBLIC_INSTAGRAM_URL`, and
`NEXT_PUBLIC_FACEBOOK_GROUP_URL` in `.env.local` (and in Vercel's
environment variables once deployed) control the CTA buttons on the landing
page and the post-signup thank you screen. Leave any of them blank and the
site shows "Coming soon" instead of a broken link. Once you've created the
WhatsApp group, Instagram account, and Facebook Group, drop their invite/
profile links in and redeploy.

The "Start with these, free" section works the same way:
`NEXT_PUBLIC_TRAINING_VIDEOS_URL`, `NEXT_PUBLIC_RESOURCES_URL`, and
`NEXT_PUBLIC_CALENDLY_URL` control those three cards, "Coming soon" until
set. The training videos link only appears after someone signs up via the
"Enroll free" button (`/signup?magnet=training`) — it is not shown on the
landing page itself. The calculator card links to the separate
`aminhas-cre/mortgage-investment-calculator` project by default; override
with `NEXT_PUBLIC_CALCULATOR_URL` if that ever moves.

## Viewing signups

Every signup lands in the `leads` table in Supabase. In the Supabase
dashboard, go to Table Editor -> `leads`. You can sort or filter by the
`bucket` column (`investor`, `primary_home`, `exploring`) and export any view
to CSV.

## Deploying to Vercel

1. Push this repository to GitHub (already set up if you're reading this from
   the repo).
2. Go to [vercel.com](https://vercel.com), import the repository.
3. In the Vercel project's Environment Variables settings, add the same
   variables from `.env.local` (Supabase URL, anon key, service role key,
   social links, contact email).
4. Deploy. Vercel redeploys automatically on every push to the main branch.

## Project structure

- `app/page.tsx` — landing page, assembled from `components/landing/*`.
- `app/signup/page.tsx` + `components/signup/SignupForm.tsx` — the
  multi-step questionnaire with the Investor / Primary Home / Exploring
  branching logic.
- `app/api/leads/route.ts` — validates and saves a signup to Supabase.
  Includes a honeypot field check for basic spam protection.
- `lib/supabase.ts` — server-only Supabase client (uses the service role
  key, never sent to the browser).
- `lib/constants.ts` — social links and contact email, read from env vars.
- `supabase/migrations/0001_leads.sql` — the `leads` table schema.
- `app/privacy`, `app/terms`, `app/disclaimer` — legal stub pages with
  placeholder text marked for Adil's review.
