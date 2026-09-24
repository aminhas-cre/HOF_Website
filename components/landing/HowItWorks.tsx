const steps = [
  {
    title: "Learn the structures",
    body: "Understand installment sale, ijara, and diminishing partnership models, in plain language.",
  },
  {
    title: "Find an owner financed property",
    body: "See properties that could work as a halal deal, shared with the community.",
  },
  {
    title: "Structure it halal",
    body: "Work through the terms so the deal has a fixed price, no interest, and clear ownership.",
  },
  {
    title: "Close with confidence",
    body: "Bring Adil along for support as you move toward closing.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="container-page py-16">
      <h2 className="text-center font-serif text-3xl font-semibold text-emerald">
        How it works
      </h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <div key={step.title} className="rounded-xl border border-emerald/10 bg-white/60 p-6">
            <span className="font-serif text-2xl text-gold">{i + 1}</span>
            <h3 className="mt-3 font-semibold text-emerald">{step.title}</h3>
            <p className="mt-2 text-sm text-ink/70">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
