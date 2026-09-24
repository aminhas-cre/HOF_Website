import { SOCIAL_LINKS } from "@/lib/constants";

const CHANNELS = [
  {
    key: "whatsapp",
    name: "WhatsApp Group",
    body: "Daily conversation, quick questions, and updates on new properties.",
    url: SOCIAL_LINKS.whatsapp,
  },
  {
    key: "instagram",
    name: "Instagram",
    body: "Short lessons on halal structures and community stories.",
    url: SOCIAL_LINKS.instagram,
  },
  {
    key: "facebookGroup",
    name: "Facebook Group",
    body: "Longer discussions, Q&A, and announcements.",
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
          Sign up below and you will get direct links to each of these once
          you are in.
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
                    className="mt-4 inline-block text-sm font-semibold text-gold-light underline underline-offset-2"
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
