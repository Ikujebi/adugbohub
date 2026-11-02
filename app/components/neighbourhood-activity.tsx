
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  CalendarDays,
  MessageCircle,
  MapPin,
  Store,
  Users,
} from "lucide-react";

const activities = [
  {
    category: "ANNOUNCEMENT",
    title: "Community meeting this weekend",
    description:
      "Residents are invited to our upcoming neighbourhood meeting. Let's come together and discuss matters that affect our community.",
    time: "Community update",
    icon: Bell,
    iconStyle: "bg-red-50 text-brand-red",
    accent: "border-l-brand-red",
  },
  {
    category: "COMMUNITY",
    title: "Let's welcome our new neighbours!",
    description:
      "A warm welcome to everyone who recently joined our neighbourhood. We are glad to have you here.",
    time: "Neighbourhood conversation",
    icon: Users,
    iconStyle: "bg-purple-50 text-brand-purple",
    accent: "border-l-brand-purple",
  },
];

const quickLinks = [
  {
    icon: MessageCircle,
    title: "Community chat",
    description: "Stay connected with neighbours.",
    color: "bg-purple-50 text-brand-purple",
  },
  {
    icon: Store,
    title: "Local marketplace",
    description: "Discover businesses nearby.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: CalendarDays,
    title: "Community events",
    description: "Keep up with what's happening.",
    color: "bg-red-50 text-brand-red",
  },
];

export default function NeighbourhoodActivity() {
  return (
    <section className="bg-brand-soft px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1240px]">

        {/* HEADING */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-red shadow-sm">
            <span className="h-2 w-2 rounded-full bg-brand-red" />
            Life around your neighbourhood
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl md:text-5xl">
            There's always something
            <span className="text-brand-red"> happening.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-brand-muted">
            Important updates, friendly conversations, local discoveries
            and activities. Stay in touch with the things that matter
            around your neighbourhood.
          </p>
        </div>

        {/* ACTIVITY LAYOUT */}
        <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">

          {/* LEFT: COMMUNITY FEED */}
          <div className="rounded-[28px] border border-gray-100 bg-white p-5 shadow-sm sm:p-8">

            <div className="flex items-center justify-between border-b border-gray-100 pb-5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-brand-red">
                    <Users size={20} />
                  </span>

                  <div>
                    <h3 className="font-extrabold text-brand-ink">
                      Community feed
                    </h3>
                    <p className="mt-1 text-xs text-brand-muted">
                      A glimpse of neighbourhood life
                    </p>
                  </div>
                </div>
              </div>

              <span className="rounded-full bg-green-50 px-3 py-1.5 text-[10px] font-bold text-green-700">
                PREVIEW
              </span>
            </div>

            {/* ACTIVITY ITEMS */}
            <div className="space-y-6 py-7">
              {activities.map((activity) => {
                const Icon = activity.icon;

                return (
                  <article
                    key={activity.title}
                    className={`rounded-2xl border border-gray-100 border-l-[4px] ${activity.accent} p-5`}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${activity.iconStyle}`}
                      >
                        <Icon size={20} />
                      </span>

                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-extrabold tracking-widest text-brand-muted">
                          {activity.category}
                        </span>

                        <h4 className="mt-2 text-base font-extrabold text-brand-ink">
                          {activity.title}
                        </h4>

                        <p className="mt-2 text-sm leading-7 text-brand-muted">
                          {activity.description}
                        </p>

                        <p className="mt-4 text-xs font-semibold text-brand-purple">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* SAMPLE DISCUSSION */}
            <div className="rounded-2xl bg-brand-soft p-5">
              <div className="flex items-center gap-2 text-brand-purple">
                <MessageCircle size={17} />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Neighbourhood conversation
                </span>
              </div>

              <p className="mt-3 text-sm font-semibold leading-6 text-brand-ink">
                "Does anyone know a reliable plumber around the area?"
              </p>

              <p className="mt-2 text-xs text-brand-muted">
                A simple question. A helpful neighbour. That's community.
              </p>
            </div>

            <p className="mt-5 text-center text-[11px] text-gray-400">
              Illustrative preview — not live community posts.
            </p>
          </div>

          {/* RIGHT: DISCOVER MORE */}
          <div className="space-y-6">

            {/* IMAGE CARD */}
            <div className="group relative h-[250px] overflow-hidden rounded-[28px] shadow-sm">
              <Image
                src="/images/community.jpg"
                alt="Neighbours spending time together"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-white/80">
                  Together is better
                </span>

                <h3 className="mt-2 max-w-sm text-2xl font-extrabold leading-tight">
                  Make your neighbourhood a better place to live.
                </h3>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm sm:p-7">
              <h3 className="text-lg font-extrabold text-brand-ink">
                Explore your community
              </h3>

              <p className="mt-2 text-sm leading-6 text-brand-muted">
                Everything you need to stay connected, all in one place.
              </p>

              <div className="mt-6 space-y-5">
                {quickLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-center gap-4"
                    >
                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.color}`}
                      >
                        <Icon size={21} />
                      </span>

                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-bold text-brand-ink">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-xs text-brand-muted">
                          {item.description}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="shrink-0 text-gray-400"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* LOCATION MESSAGE */}
            <div className="flex items-center gap-4 rounded-2xl border border-purple-100 bg-brand-lavender p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-purple">
                <MapPin size={21} />
              </span>

              <div>
                <h4 className="text-sm font-bold text-brand-ink">
                  Your neighbourhood matters.
                </h4>
                <p className="mt-1 text-xs leading-5 text-brand-muted">
                  Build stronger connections, one community at a time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/register"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-red px-8 py-4 text-sm font-bold text-white shadow-lg shadow-red-100 transition hover:-translate-y-1 hover:bg-brand-red-dark"
          >
            Join AdugboHub
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
