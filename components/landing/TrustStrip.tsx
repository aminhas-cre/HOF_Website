// Placeholder social proof. Swap the count and quotes for real numbers and
// member quotes once there is enough history to share honestly.
const PLACEHOLDER_QUOTES = [
  {
    quote:
      "I finally understood the difference between a real halal structure and just relabeled interest.",
    attribution: "Community member, Texas",
  },
  {
    quote:
      "Having an Imam who actually invests made me trust the process from day one.",
    attribution: "Community member, Colorado",
  },
];

export function TrustStrip() {
  return (
    <section className="container-page py-12">
      <p className="text-center text-sm font-semibold uppercase tracking-wide text-gold-ink">
        [Placeholder] Growing with families across the U.S.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {PLACEHOLDER_QUOTES.map((item) => (
          <blockquote
            key={item.attribution}
            className="rounded-xl border border-emerald/10 bg-white/60 p-6"
          >
            <p className="text-ink/80">&ldquo;{item.quote}&rdquo;</p>
            <footer className="mt-3 text-sm text-ink/50">{item.attribution}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
