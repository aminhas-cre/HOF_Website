export type LeadBucket = "investor" | "primary_home" | "exploring";

export interface LeadPayload {
  full_name: string;
  email: string;
  phone?: string;
  state: string;
  city?: string;
  bucket: LeadBucket;
  timeline?: string;
  budget_range?: string;
  down_payment_range?: string;
  household_size?: string;
  investor_experience?: string;
  deal_count_interest?: string;
  exploring_interest?: string;
  content_format_pref?: string;
  how_heard?: string;
  opt_in_updates: boolean;
  agreed_disclaimer: boolean;
  // Honeypot: real users never fill this in. Bots that auto-fill every
  // field will, and the API silently drops the submission when it's set.
  company_website?: string;
}
