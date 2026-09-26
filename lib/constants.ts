// Community links. These are empty until Adil creates the real accounts.
// The landing page shows a "Coming soon" state for any link left blank.
export const SOCIAL_LINKS = {
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL || "",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
  facebookGroup: process.env.NEXT_PUBLIC_FACEBOOK_GROUP_URL || "",
};

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@ownerfinancinghalalway.com";

// Free offers. Same "Coming soon" fallback behavior as SOCIAL_LINKS.
export const FREE_OFFERS = {
  trainingVideos: process.env.NEXT_PUBLIC_TRAINING_VIDEOS_URL || "",
  resources: process.env.NEXT_PUBLIC_RESOURCES_URL || "",
  calendly: process.env.NEXT_PUBLIC_CALENDLY_URL || "",
};

export const SITE_NAME = "Owner Financing the Halal Way";
