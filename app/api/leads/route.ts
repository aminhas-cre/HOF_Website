import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase";
import type { LeadBucket, LeadPayload } from "@/lib/types";

const VALID_BUCKETS: LeadBucket[] = ["investor", "primary_home", "exploring"];

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: NextRequest) {
  let body: Partial<LeadPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: a real visitor never sees or fills this field. A bot that
  // fills every input will. Report success without writing anything.
  if (body.company_website) {
    return NextResponse.json({ ok: true });
  }

  if (!body.full_name?.trim() || !body.email?.trim() || !body.state?.trim()) {
    return NextResponse.json(
      { error: "Full name, email, and state are required." },
      { status: 400 }
    );
  }

  if (!isEmail(body.email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  if (!body.bucket || !VALID_BUCKETS.includes(body.bucket)) {
    return NextResponse.json({ error: "Select what brings you here." }, { status: 400 });
  }

  if (!body.agreed_disclaimer) {
    return NextResponse.json(
      { error: "You must agree to the terms and disclaimer to continue." },
      { status: 400 }
    );
  }

  let supabase;
  try {
    supabase = getSupabaseServerClient();
  } catch (err) {
    console.error(err instanceof Error ? err.message : err);
    return NextResponse.json(
      { error: "Signups are not configured yet. Please try again later." },
      { status: 500 }
    );
  }

  const { error } = await supabase.from("leads").insert({
    full_name: body.full_name.trim(),
    email: body.email.trim().toLowerCase(),
    phone: body.phone?.trim() || null,
    state: body.state.trim(),
    city: body.city?.trim() || null,
    bucket: body.bucket,
    timeline: body.timeline || null,
    budget_range: body.budget_range || null,
    down_payment_range: body.down_payment_range || null,
    household_size: body.household_size || null,
    investor_experience: body.investor_experience || null,
    deal_count_interest: body.deal_count_interest || null,
    exploring_interest: body.exploring_interest || null,
    content_format_pref: body.content_format_pref || null,
    how_heard: body.how_heard || null,
    opt_in_updates: Boolean(body.opt_in_updates),
    agreed_disclaimer: Boolean(body.agreed_disclaimer),
  });

  if (error) {
    console.error("Failed to insert lead:", error.message);
    return NextResponse.json(
      { error: "Something went wrong saving your signup. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
