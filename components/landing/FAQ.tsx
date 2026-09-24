const FAQS = [
  {
    q: "Is owner financing halal?",
    a: "It can be, when it is structured with a fixed total price agreed upfront, no interest or compounding, and clear ownership and risk. This community helps you understand and pursue those structures.",
  },
  {
    q: "How is this different from a mortgage?",
    a: "A conventional mortgage charges interest on a loan. A halal owner financing structure is based on a sale, a lease, or a partnership, with a fixed price and no interest.",
  },
  {
    q: "Do I need a scholar's review?",
    a: "Yes, for your specific deal. This community shares general education, not a ruling on your individual situation.",
  },
  {
    q: "Can the seller be non Muslim?",
    a: "Yes. The structure of the deal is what matters, not the seller's faith.",
  },
  {
    q: "What does bring Adil along for the deal mean?",
    a: "It means Adil can join you as you evaluate and structure a specific property, sharing what he has learned as an investor.",
  },
  {
    q: "Is this legal or religious advice?",
    a: "No. This is educational content only. Please see our disclaimer, and consult a qualified scholar, attorney, and licensed professionals for your situation.",
  },
  {
    q: "What if I am just curious and not ready to buy?",
    a: "That is welcome. Many members join to learn first and decide later.",
  },
  {
    q: "Is there a cost to join?",
    a: "Joining the community is free. Some services around a specific deal may be discussed separately, but nothing is billed through this signup.",
  },
];

export function FAQ() {
  return (
    <section className="bg-white/50 py-16">
      <div className="container-page max-w-3xl">
        <h2 className="text-center font-serif text-3xl font-semibold text-emerald">
          Frequently asked questions
        </h2>
        <dl className="mt-10 space-y-6">
          {FAQS.map((item) => (
            <div key={item.q} className="border-b border-emerald/10 pb-6">
              <dt className="font-semibold text-emerald">{item.q}</dt>
              <dd className="mt-2 text-ink/70">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
