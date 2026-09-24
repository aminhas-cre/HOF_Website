import Link from "next/link";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";

export const metadata = { title: `Terms of Use | ${SITE_NAME}` };

export default function TermsPage() {
  return (
    <main className="container-page max-w-2xl py-12 sm:py-16">
      <Link href="/" className="font-serif text-sm text-emerald">
        &larr; {SITE_NAME}
      </Link>
      <h1 className="mt-4 font-serif text-3xl font-semibold text-emerald">Terms of Use</h1>
      <div className="mt-6 space-y-4 text-ink/70">
        <p>[Placeholder, pending Adil&apos;s review]</p>
        <p>
          By signing up for {SITE_NAME}, you agree to use the community and
          any content shared here for personal, educational purposes. You
          agree not to misrepresent yourself when signing up.
        </p>
        <p>
          Content shared through this site, WhatsApp, Instagram, or Facebook
          is provided as is, without warranty of any kind. See our{" "}
          <Link href="/disclaimer" className="underline">
            Disclaimer
          </Link>{" "}
          for more on the limits of this content.
        </p>
        <p>
          We may update these terms from time to time. Continued use of the
          community after an update means you accept the revised terms.
        </p>
        <p>
          Questions can be sent to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </div>
    </main>
  );
}
