import Link from "next/link";

export function Hero() {
  return (
    <section className="container-page grid gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
      <div>
        <h1 className="font-serif text-4xl font-semibold leading-tight text-emerald sm:text-5xl">
          Own your home without riba. The halal way, done right.
        </h1>
        <p className="mt-6 text-lg text-ink/80">
          You have been told to choose between a mortgage full of interest and
          renting forever. There is a third way. This community teaches
          American Muslims how to structure owner financing correctly, so the
          deal is halal and the paperwork holds up, led by an Imam who is
          also a real estate investor.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/signup" className="btn-primary">
            Join the community (free)
          </Link>
          <a href="#how-it-works" className="btn-secondary">
            See how it works
          </a>
        </div>
      </div>
      <div className="rounded-2xl border border-gold/30 bg-white/60 p-8 shadow-sm">
        <p className="font-serif text-xl text-emerald">
          &ldquo;Every family deserves a path to owning a home that does not
          ask them to compromise their Deen to get there.&rdquo;
        </p>
        <p className="mt-4 text-sm text-ink/60">
          Imam Adil, founder of Owner Financing the Halal Way
        </p>
      </div>
    </section>
  );
}
