export function AboutFounder() {
  return (
    <section className="container-page py-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <div
          aria-hidden="true"
          className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-dashed border-gold/50 bg-white/50 text-xs text-ink/40"
        >
          Photo placeholder
        </div>
        <h2 className="font-serif text-2xl font-semibold text-emerald">
          About the founder
        </h2>
        <p className="text-ink/70">
          Adil is an Imam and a real estate investor. He works in data and
          analytics by day and invests in rental property on the side. He
          started this community after seeing how many Muslim families wanted
          a path to homeownership that did not involve interest, and did not
          know where to start.
        </p>
        <p className="text-sm text-ink/50">
          [Placeholder bio, replace with Adil&apos;s final write up]
        </p>
      </div>
    </section>
  );
}
