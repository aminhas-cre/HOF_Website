-- Run this once in your Supabase project's SQL editor.
-- Stores every signup from the /signup questionnaire, bucketed into
-- investor / primary_home / exploring so Adil can filter and export by intent.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  full_name text not null,
  email text not null,
  phone text,
  state text not null,
  city text,

  bucket text not null check (bucket in ('investor', 'primary_home', 'exploring')),

  timeline text,
  budget_range text,
  down_payment_range text,
  household_size text,
  investor_experience text,
  deal_count_interest text,
  exploring_interest text,
  content_format_pref text,

  how_heard text,
  opt_in_updates boolean not null default false,
  agreed_disclaimer boolean not null default false
);

create index if not exists leads_bucket_idx on public.leads (bucket);
create index if not exists leads_created_at_idx on public.leads (created_at desc);

-- Row level security: no client-side access. All inserts go through the
-- server-side API route using the service role key, which bypasses RLS.
alter table public.leads enable row level security;
