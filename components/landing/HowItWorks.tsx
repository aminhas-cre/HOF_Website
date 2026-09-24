const steps = [
  {
    title: "Learn the structures",
    body: "Understand installment sale, ijara, and diminishing partnership models, explained in plain language, not fiqh jargon.",
  },
  {
    title: "Find an owner financed property",
    body: "See properties shared with the community that could work as a genuinely halal deal.",
  },
  {
    title: "Structure it halal",
    body: "Work through the terms so the price is fixed upfront, there is no interest, and ownership and risk are clear.",
  },
  {
    title: "Close with confidence",
    body: "Bring Adil along as you move toward closing, knowing the structure was reviewed with your Deen in mind.",
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
            <span className="font-serif text-2xl font-semibold text-gold-ink">{i + 1}</span>
            <h3 className="mt-3 font-semibold text-emerald">{step.title}</h3>
            <p className="mt-2 text-sm text-ink/70">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
