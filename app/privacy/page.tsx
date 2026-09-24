import Link from "next/link";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";

export const metadata = { title: `Privacy Policy | ${SITE_NAME}` };

export default function PrivacyPage() {
  return (
    <main className="container-page max-w-2xl py-12 sm:py-16">
      <Link href="/" className="font-serif text-sm text-emerald">
        &larr; {SITE_NAME}
      </Link>
      <h1 className="mt-4 font-serif text-3xl font-semibold text-emerald">Privacy Policy</h1>
      <div className="mt-6 space-y-4 text-ink/70">
        <p>[Placeholder, pending Adil&apos;s review]</p>
        <p>
          When you sign up, we collect the information you provide in the
          questionnaire, including your name, email, phone number if given,
          location, and your answers about your goals and timeline. We use
          this to understand who is in our community, to follow up about
          properties or resources relevant to you, and to improve what we
          share.
        </p>
        <p>
          We do not sell your information. We do not share it with third
          parties except as needed to operate this site (for example, our
          database provider).
        </p>
        <p>
          If you opted in to email updates, you can unsubscribe at any time.
          You can request that we delete your information by emailing{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </div>
    </main>
  );
}
