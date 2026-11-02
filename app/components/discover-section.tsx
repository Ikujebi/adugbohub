
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Bell,
  MessageCircle,
  Store,
  ShieldCheck,
} from "lucide-react";

const discoveries = [
  {
    number: "01",
    title: "Community announcements",
    description:
      "Stay informed about important notices, neighbourhood news, events and updates from your community.",
    image: "/images/announcements.jpg",
    icon: Bell,
    iconColor: "bg-red-50 text-brand-red",
    tag: "Stay informed",
    href: "/#community",
  },
  {
    number: "02",
    title: "Neighbourhood conversations",
    description:
      "Connect with neighbours, exchange ideas, share useful information and build stronger relationships.",
    image: "/images/community-chat.jpg",
    icon: MessageCircle,
    iconColor: "bg-purple-50 text-brand-purple",
    tag: "Connect with people",
    href: "/#community",
  },
  {
    number: "03",
    title: "Discover local businesses",
    description:
      "Find neighbourhood shops, artisans, food vendors and services. Give local businesses more visibility.",
    image: "/images/local-marketplace.jpg",
    icon: Store,
    iconColor: "bg-orange-50 text-orange-600",
    tag: "Shop closer to home",
    href: "/#businesses",
  },
  {
    number: "04",
    title: "Community coordination",
    description:
      "Support organised neighbourhood living with visitor management, resident coordination and safety tools.",
    image: "/images/visitor-management.jpg",
    icon: ShieldCheck,
    iconColor: "bg-green-50 text-green-700",
    tag: "Organise together",
    href: "/#how-it-works",
  },
];

export default function DiscoverSection() {
  return (
    <section id="discover" className="bg-brand-soft px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1240px]">

        {/* SECTION INTRODUCTION */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-purple shadow-sm">
            <span className="h-2 w-2 rounded-full bg-brand-purple" />
            Everything closer to home
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-4xl md:text-5xl">
            Discover what makes
            <span className="text-brand-red"> your neighbourhood </span>
            special.
          </h2>

          <p className="mt-5 text-base leading-8 text-brand-muted">
            From the people around you to the businesses on your street,
            AdugboHub brings the important parts of neighbourhood life
            into one connected place.
          </p>
        </div>

        {/* DISCOVERY CARDS */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {discoveries.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.number}
                href={item.href}
                className="group overflow-hidden rounded-[26px] border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* IMAGE */}
                <div className="relative h-[210px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-ink shadow-sm">
                    {item.tag}
                  </span>
                </div>

                {/* CARD CONTENT */}
                <div className="p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.iconColor}`}
                    >
                      <Icon size={21} />
                    </span>

                    <span className="text-xs font-bold tracking-widest text-gray-300">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold leading-snug text-brand-ink transition group-hover:text-brand-red">
                    {item.title}
                  </h3>

                  <p className="mt-3 min-h-[96px] text-sm leading-7 text-brand-muted">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                    <span className="text-sm font-bold text-brand-purple">
                      Explore
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-lavender text-brand-purple transition group-hover:bg-brand-red group-hover:text-white">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* BOTTOM MESSAGE */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl bg-white p-7 shadow-sm sm:flex-row sm:px-10">
          <div>
            <h3 className="text-xl font-extrabold text-brand-ink">
              Your neighbourhood has a lot to offer.
            </h3>
            <p className="mt-2 text-sm leading-6 text-brand-muted">
              Be part of the conversations, discoveries and connections.
            </p>
          </div>

          <Link
            href="/register"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-red px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-red-dark"
          >
            Get started
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
