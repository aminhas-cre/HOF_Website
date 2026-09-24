import Link from "next/link";

export function Hero() {
  return (
    <section className="container-page grid gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
      <div>
        <h1 className="font-serif text-4xl font-semibold leading-tight text-emerald sm:text-5xl">
          Buy a home without riba. Learn owner financing the halal way.
        </h1>
        <p className="mt-6 text-lg text-ink/80">
          A growing community for Muslims across the U.S. learning how to
          structure home purchases through owner financing, free of interest,
          with clarity and confidence.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/signup" className="btn-primary">
            Join the community (free)
          </Link>
          <a href="#how-it-works" className="btn-secondary">
            How it works
          </a>
        </div>
      </div>
      <div className="rounded-2xl border border-gold/30 bg-white/60 p-8 shadow-sm">
        <p className="font-serif text-xl text-emerald">
          &ldquo;Every family deserves a path to homeownership that does not
          compromise their faith.&rdquo;
        </p>
        <p className="mt-4 text-sm text-ink/60">
          Imam Adil, founder of Owner Financing the Halal Way
        </p>
      </div>
    </section>
  );
}
