"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import type { LeadBucket, LeadPayload } from "@/lib/types";
import { SOCIAL_LINKS } from "@/lib/constants";

const TOTAL_STEPS = 4;

const TIMELINE_OPTIONS = ["0 to 3 months", "3 to 6 months", "6 to 12 months", "12+ months"];
const BUDGET_OPTIONS = ["Under $200k", "$200k to $350k", "$350k to $500k", "$500k to $750k", "$750k+"];
const DOWN_PAYMENT_OPTIONS = ["Under 5%", "5% to 10%", "10% to 20%", "20%+"];
const HOUSEHOLD_OPTIONS = ["1 to 2 people", "3 to 4 people", "5 or more people"];
const INVESTOR_EXPERIENCE_OPTIONS = [
  "New to investing",
  "1 to 3 properties",
  "4 to 10 properties",
  "10+ properties",
];
const DEAL_COUNT_OPTIONS = ["1 property", "2 to 3 properties", "4+ properties or a portfolio"];
const EXPLORING_INTEREST_OPTIONS = [
  "Halal financing basics",
  "Specific structures (ijara, musharaka, etc.)",
  "Finding a property",
  "Working with a scholar",
  "Something else",
];
const CONTENT_FORMAT_OPTIONS = ["Short videos", "Articles and guides", "Live sessions", "One on one conversations"];
const HOW_HEARD_OPTIONS = ["WhatsApp", "Instagram", "Facebook", "Masjid announcement", "Friend or family", "Other"];

const BUCKETS: { value: LeadBucket; label: string; body: string }[] = [
  {
    value: "investor",
    label: "Investor",
    body: "I want to acquire property using structures that stay free of riba.",
  },
  {
    value: "primary_home",
    label: "Looking for a primary home",
    body: "I want a home for my family, without an interest based mortgage.",
  },
  {
    value: "exploring",
    label: "Just exploring",
    body: "I am learning first. I am not ready to decide yet, and that is fine.",
  },
];

type FormState = Omit<LeadPayload, "opt_in_updates" | "agreed_disclaimer" | "company_website"> & {
  opt_in_updates: boolean;
  agreed_disclaimer: boolean;
  company_website: string;
};

const initialState: FormState = {
  full_name: "",
  email: "",
  phone: "",
  state: "",
  city: "",
  bucket: "" as LeadBucket,
  timeline: "",
  budget_range: "",
  down_payment_range: "",
  household_size: "",
  investor_experience: "",
  deal_count_interest: "",
  exploring_interest: "",
  content_format_pref: "",
  how_heard: "",
  opt_in_updates: false,
  agreed_disclaimer: false,
  company_website: "",
};

function RadioGroup({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: string[];
  value: string | undefined;
  onChange: (value: string) => void;
}) {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {options.map((option) => (
        <label
          key={option}
          className={`cursor-pointer rounded-lg border px-4 py-3 text-sm transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-emerald has-[:focus-visible]:ring-offset-2 ${
            value === option
              ? "border-emerald bg-emerald/10 font-medium text-emerald"
              : "border-emerald/20 text-ink/70 hover:border-emerald/40"
          }`}
        >
          <input
            type="radio"
            name={name}
            value={option}
            checked={value === option}
            onChange={(e) => onChange(e.target.value)}
            className="sr-only"
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export function SignupForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function canAdvance() {
    if (step === 1) {
      return form.full_name.trim() && form.email.trim() && form.state.trim();
    }
    if (step === 2) {
      return Boolean(form.bucket);
    }
    return true;
  }

  function next() {
    setError(null);
    if (!canAdvance()) {
      setError("Please fill in the required fields before continuing.");
      return;
    }
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }

  function back() {
    setError(null);
    setStep((s) => Math.max(s - 1, 1));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (!form.agreed_disclaimer) {
      setError("You must agree to the terms and disclaimer to continue.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }
      setDone(true);
    } catch {
      setError("Something went wrong. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-emerald/20 bg-white/70 p-8 text-center">
        <h2 className="font-serif text-2xl font-semibold text-emerald">
          You are in. Welcome.
        </h2>
        <p className="mt-3 text-ink/70">
          Thank you for signing up. Here is where the community lives right
          now.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            { name: "WhatsApp Group", url: SOCIAL_LINKS.whatsapp },
            { name: "Instagram", url: SOCIAL_LINKS.instagram },
            { name: "Facebook Group", url: SOCIAL_LINKS.facebookGroup },
          ].map((c) =>
            c.url ? (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                {c.name}
              </a>
            ) : (
              <span
                key={c.name}
                className="inline-flex items-center justify-center rounded-full border border-emerald/20 px-6 py-3 text-sm text-ink/40"
              >
                {c.name} coming soon
              </span>
            )
          )}
        </div>
        <Link href="/" className="mt-8 inline-block text-sm text-emerald underline underline-offset-2">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-emerald/20 bg-white/70 p-6 sm:p-8">
      <div className="mb-6 flex items-center gap-2">
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full ${i < step ? "bg-emerald" : "bg-emerald/15"}`}
          />
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <h2 className="font-serif text-xl font-semibold text-emerald">Tell us about you</h2>
          <div>
            <label className="block text-sm font-medium text-ink/80">Full name *</label>
            <input
              type="text"
              required
              value={form.full_name}
              onChange={(e) => update("full_name", e.target.value)}
              className="mt-1 w-full rounded-lg border border-emerald/20 px-4 py-2 focus:border-emerald focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink/80">Email *</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="mt-1 w-full rounded-lg border border-emerald/20 px-4 py-2 focus:border-emerald focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink/80">Phone (optional)</label>
            <input
              type="tel"
              inputMode="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="mt-1 w-full rounded-lg border border-emerald/20 px-4 py-2 focus:border-emerald focus:outline-none"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-ink/80">State *</label>
              <input
                type="text"
                required
                placeholder="e.g. Colorado"
                value={form.state}
                onChange={(e) => update("state", e.target.value)}
                className="mt-1 w-full rounded-lg border border-emerald/20 px-4 py-2 focus:border-emerald focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink/80">City (optional)</label>
              <input
                type="text"
                value={form.city}
                onChange={(e) => update("city", e.target.value)}
                className="mt-1 w-full rounded-lg border border-emerald/20 px-4 py-2 focus:border-emerald focus:outline-none"
              />
            </div>
          </div>
          {/* Honeypot field, hidden from real users via CSS, left blank by them. */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company_website">Company website</label>
            <input
              id="company_website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.company_website}
              onChange={(e) => update("company_website", e.target.value)}
            />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h2 className="font-serif text-xl font-semibold text-emerald">What brings you to this community?</h2>
          <div className="space-y-3">
            {BUCKETS.map((bucket) => (
              <label
                key={bucket.value}
                className={`block cursor-pointer rounded-lg border px-4 py-3 transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-emerald has-[:focus-visible]:ring-offset-2 ${
                  form.bucket === bucket.value
                    ? "border-emerald bg-emerald/10"
                    : "border-emerald/20 hover:border-emerald/40"
                }`}
              >
                <input
                  type="radio"
                  name="bucket"
                  value={bucket.value}
                  checked={form.bucket === bucket.value}
                  onChange={() => update("bucket", bucket.value)}
                  className="sr-only"
                />
                <span className="font-medium text-emerald">{bucket.label}</span>
                <p className="mt-1 text-sm text-ink/60">{bucket.body}</p>
              </label>
            ))}
          </div>
        </div>
      )}

      {step === 3 && form.bucket === "investor" && (
        <div className="space-y-5">
          <h2 className="font-serif text-xl font-semibold text-emerald">A bit more about your investing</h2>
          <div>
            <p className="mb-2 text-sm font-medium text-ink/80">Experience level</p>
            <RadioGroup
              name="investor_experience"
              options={INVESTOR_EXPERIENCE_OPTIONS}
              value={form.investor_experience}
              onChange={(v) => update("investor_experience", v)}
            />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-ink/80">How many properties are you interested in?</p>
            <RadioGroup
              name="deal_count_interest"
              options={DEAL_COUNT_OPTIONS}
              value={form.deal_count_interest}
              onChange={(v) => update("deal_count_interest", v)}
            />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-ink/80">Budget range</p>
            <RadioGroup
              name="budget_range"
              options={BUDGET_OPTIONS}
              value={form.budget_range}
              onChange={(v) => update("budget_range", v)}
            />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-ink/80">Timeline</p>
            <RadioGroup
              name="timeline"
              options={TIMELINE_OPTIONS}
              value={form.timeline}
              onChange={(v) => update("timeline", v)}
            />
          </div>
        </div>
      )}

      {step === 3 && form.bucket === "primary_home" && (
        <div className="space-y-5">
          <h2 className="font-serif text-xl font-semibold text-emerald">A bit more about your home search</h2>
          <div>
            <p className="mb-2 text-sm font-medium text-ink/80">Purchase timeline</p>
            <RadioGroup
              name="timeline"
              options={TIMELINE_OPTIONS}
              value={form.timeline}
              onChange={(v) => update("timeline", v)}
            />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-ink/80">Household size</p>
            <RadioGroup
              name="household_size"
              options={HOUSEHOLD_OPTIONS}
              value={form.household_size}
              onChange={(v) => update("household_size", v)}
            />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-ink/80">Budget range</p>
            <RadioGroup
              name="budget_range"
              options={BUDGET_OPTIONS}
              value={form.budget_range}
              onChange={(v) => update("budget_range", v)}
            />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-ink/80">Down payment available</p>
            <RadioGroup
              name="down_payment_range"
              options={DOWN_PAYMENT_OPTIONS}
              value={form.down_payment_range}
              onChange={(v) => update("down_payment_range", v)}
            />
          </div>
        </div>
      )}

      {step === 3 && form.bucket === "exploring" && (
        <div className="space-y-5">
          <h2 className="font-serif text-xl font-semibold text-emerald">A bit more about what you are curious about</h2>
          <div>
            <p className="mb-2 text-sm font-medium text-ink/80">What are you most interested in?</p>
            <RadioGroup
              name="exploring_interest"
              options={EXPLORING_INTEREST_OPTIONS}
              value={form.exploring_interest}
              onChange={(v) => update("exploring_interest", v)}
            />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-ink/80">Preferred content format</p>
            <RadioGroup
              name="content_format_pref"
              options={CONTENT_FORMAT_OPTIONS}
              value={form.content_format_pref}
              onChange={(v) => update("content_format_pref", v)}
            />
          </div>
        </div>
      )}

      {step === 3 && !form.bucket && (
        <p className="text-sm text-ink/60">Please go back and choose what brings you here.</p>
      )}

      {step === 4 && (
        <div className="space-y-5">
          <h2 className="font-serif text-xl font-semibold text-emerald">Almost done</h2>
          <div>
            <p className="mb-2 text-sm font-medium text-ink/80">How did you hear about us?</p>
            <RadioGroup
              name="how_heard"
              options={HOW_HEARD_OPTIONS}
              value={form.how_heard}
              onChange={(v) => update("how_heard", v)}
            />
          </div>
          <label className="flex items-start gap-3 text-sm text-ink/70">
            <input
              type="checkbox"
              checked={form.opt_in_updates}
              onChange={(e) => update("opt_in_updates", e.target.checked)}
              className="mt-1"
            />
            Send me occasional email updates about the community and new
            content.
          </label>
          <label className="flex items-start gap-3 text-sm text-ink/70">
            <input
              type="checkbox"
              required
              checked={form.agreed_disclaimer}
              onChange={(e) => update("agreed_disclaimer", e.target.checked)}
              className="mt-1"
            />
            I agree to the{" "}
            <Link href="/terms" className="underline">
              Terms
            </Link>{" "}
            and have read the{" "}
            <Link href="/disclaimer" className="underline">
              Disclaimer
            </Link>
            . *
          </label>
        </div>
      )}

      {error && <p className="mt-4 text-sm text-red-700">{error}</p>}

      <div className="mt-8 flex justify-between">
        {step > 1 ? (
          <button type="button" onClick={back} className="btn-secondary">
            Back
          </button>
        ) : (
          <span />
        )}
        {step < TOTAL_STEPS ? (
          <button type="button" onClick={next} className="btn-primary">
            Continue
          </button>
        ) : (
          <button type="submit" disabled={submitting} className="btn-primary disabled:opacity-60">
            {submitting ? "Submitting..." : "Join the community"}
          </button>
        )}
      </div>
    </form>
  );
}
