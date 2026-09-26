import Link from "next/link";
import { FREE_OFFERS } from "@/lib/constants";

export function FreeOffers() {
  return (
    <section className="bg-white/50 py-16">
      <div className="container-page">
        <h2 className="text-center font-serif text-3xl font-semibold text-emerald">
          Start with these, free
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-ink/70">
          No cost, no catch. Pick whichever helps you take the next step.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col rounded-xl border border-emerald/10 bg-white/80 p-6">
            <h3 className="font-semibold text-emerald">
              Owner Financing 101
            </h3>
            <p className="mt-2 flex-1 text-sm text-ink/70">
              Free training videos covering the basics of halal owner
              financing, from structure to close.
            </p>
            <Link href="/signup?magnet=training" className="btn-primary mt-4 self-start">
              Enroll free
            </Link>
          </div>

          <div className="flex flex-col rounded-xl border border-emerald/10 bg-white/80 p-6">
            <h3 className="font-semibold text-emerald">
              Free materials &amp; resources
            </h3>
            <p className="mt-2 flex-1 text-sm text-ink/70">
              Templates, checklists, and guides you can use directly in your
              own owner financing deal.
            </p>
            {FREE_OFFERS.resources ? (
              <a
                href={FREE_OFFERS.resources}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-4 self-start"
              >
                Get the resources
              </a>
            ) : (
              <span className="mt-4 inline-block text-sm font-semibold text-ink/40">
                Coming soon
              </span>
            )}
          </div>

          <div className="flex flex-col rounded-xl border border-emerald/10 bg-white/80 p-6">
            <h3 className="font-semibold text-emerald">
              Free 15 minute consultation
            </h3>
            <p className="mt-2 flex-1 text-sm text-ink/70">
              Bring your questions or a specific deal and talk it through
              with Adil directly.
            </p>
            {FREE_OFFERS.calendly ? (
              <a
                href={FREE_OFFERS.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-4 self-start"
              >
                Book a time
              </a>
            ) : (
              <span className="mt-4 inline-block text-sm font-semibold text-ink/40">
                Coming soon
              </span>
            )}
          </div>

          <div className="flex flex-col rounded-xl border border-emerald/10 bg-white/80 p-6">
            <h3 className="font-semibold text-emerald">
              Mortgage vs. halal financing calculator
            </h3>
            <p className="mt-2 flex-1 text-sm text-ink/70">
              See side by side which path actually builds more net worth for
              your numbers.
            </p>
            <a
              href={FREE_OFFERS.calculator}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-4 self-start"
            >
              Run the numbers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
