import { SOCIAL_LINKS } from "@/lib/constants";

const CHANNELS = [
  {
    key: "whatsapp",
    name: "WhatsApp Group",
    body: "Where the real conversation happens. Ask a question about a property or a structure and get an answer the same day.",
    url: SOCIAL_LINKS.whatsapp,
  },
  {
    key: "instagram",
    name: "Instagram",
    body: "Short, clear explainers on halal structures and glossary terms you can actually use in a conversation with a seller.",
    url: SOCIAL_LINKS.instagram,
  },
  {
    key: "facebookGroup",
    name: "Facebook Group",
    body: "Longer discussions, deal breakdowns, and a place to search past questions before asking your own.",
    url: SOCIAL_LINKS.facebookGroup,
  },
] as const;

export function CommunityChannels() {
  return (
    <section className="bg-emerald-dark py-16">
      <div className="container-page">
        <h2 className="text-center font-serif text-3xl font-semibold text-sand">
          Join the community
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sand/70">
          Sign up below and you will get the links to each of these right
          away.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {CHANNELS.map((channel) => {
            const isLive = Boolean(channel.url);
            return (
              <div
                key={channel.key}
                className="rounded-xl border border-sand/20 bg-emerald p-6 text-sand"
              >
                <h3 className="font-semibold">{channel.name}</h3>
                <p className="mt-2 text-sm text-sand/70">{channel.body}</p>
                {isLive ? (
                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block cursor-pointer text-sm font-semibold text-gold-light underline underline-offset-2"
                  >
                    Join now
                  </a>
                ) : (
                  <span className="mt-4 inline-block text-sm font-semibold text-sand/50">
                    Coming soon
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
