import Link from "next/link";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";

export const metadata = { title: `Disclaimer | ${SITE_NAME}` };

export default function DisclaimerPage() {
  return (
    <main className="container-page max-w-2xl py-12 sm:py-16">
      <Link href="/" className="font-serif text-sm text-emerald">
        &larr; {SITE_NAME}
      </Link>
      <h1 className="mt-4 font-serif text-3xl font-semibold text-emerald">Disclaimer</h1>
      <div className="mt-6 space-y-4 text-ink/70">
        <p>
          [Placeholder, pending Adil&apos;s review] The content shared by{" "}
          {SITE_NAME} is for educational purposes only. It is not legal,
          financial, tax, or religious advice, and it does not constitute a
          religious ruling (fatwa).
        </p>
        <p>
          {SITE_NAME} is not a lender, broker, or financial institution, and
          does not originate, fund, or guarantee any loan or financing
          arrangement.
        </p>
        <p>
          Before entering into any owner financing agreement, members should
          consult a qualified scholar for guidance on the religious
          permissibility of a specific transaction, a licensed attorney for
          the legal terms, and other licensed professionals as needed, such
          as a tax advisor or real estate agent.
        </p>
        <p>
          Any information about specific properties or deal structures shared
          in this community reflects our own research and opinions at the
          time it was shared, and may not be complete, current, or accurate.
        </p>
        <p>
          Questions about this disclaimer can be sent to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </div>
    </main>
  );
}
