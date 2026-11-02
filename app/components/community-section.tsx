
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Store,
  Users,
} from "lucide-react";

const communities = [
  {
    title: "For Residents",
    subtitle: "Make your neighbourhood feel like home.",
    description:
      "Stay connected with your neighbours, receive important updates, discover local services and participate in community life.",
    image: "/images/resident.jpg",
    icon: Users,
    iconStyle: "bg-red-50 text-brand-red",
    benefits: [
      "Connect with neighbours",
      "Receive community updates",
      "Discover nearby services",
    ],
    href: "/register",
    linkText: "Join your community",
  },
  {
    title: "For Estate & Community Managers",
    subtitle: "Bring your community together.",
    description:
      "Make community administration easier with tools for resident coordination, announcements, visitor management and everyday operations.",
    image: "/images/community-management.jpg",
    icon: Building2,
    iconStyle: "bg-purple-50 text-brand-purple",
    benefits: [
      "Manage residents and memberships",
      "Coordinate visitors",
      "Share important announcements",
    ],
    href: "/register",
    linkText: "Manage your community",
  },
  {
    title: "For Local Businesses",
    subtitle: "Let your neighbourhood discover you.",
    description:
      "Put your products and services in front of people nearby and build stronger relationships with customers in your community.",
    image: "/images/local-marketplace.jpg",
    icon: Store,
    iconStyle: "bg-orange-50 text-orange-600",
    benefits: [
      "Showcase your products and services",
      "Reach nearby customers",
      "Grow your local visibility",
    ],
    href: "/register",
    linkText: "Grow your business",
  },
];

export default function CommunitySection() {
  return (
    <section
      id="community"
      className="bg-white px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-[1240px]">

        {/* SECTION HEADING */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-purple">
              <Users size={14} />
              Made for everyone in the neighbourhood
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-4xl md:text-5xl">
              Different people.
              <br />
              <span className="text-brand-red">
                One connected community.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-brand-muted md:text-base">
            Whether you live in a neighbourhood, manage an estate or run
            a local business, AdugboHub helps you stay connected to the
            people and opportunities around you.
          </p>
        </div>

        {/* COMMUNITY AUDIENCE CARDS */}
        <div className="grid gap-7 lg:grid-cols-3">
          {communities.map((community, index) => {
            const Icon = community.icon;

            return (
              <article
                key={community.title}
                className="group overflow-hidden rounded-[28px] border border-brand-border bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* IMAGE */}
                <div className="relative h-[230px] overflow-hidden">
                  <Image
                    src={community.image}
                    alt={community.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                  <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-brand-ink shadow-lg">
                    <Icon size={21} />
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-7">
                  <span
                    className={`inline-flex rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider ${community.iconStyle}`}
                  >
                    {community.title}
                  </span>

                  <h3 className="mt-4 text-xl font-extrabold text-brand-ink">
                    {community.subtitle}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-brand-muted">
                    {community.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {community.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3 text-sm font-medium text-gray-600"
                      >
                        <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            className="h-3 w-3"
                          >
                            <path
                              d="m4 10 4 4 8-8"
                              stroke="currentColor"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={community.href}
                    className="mt-7 inline-flex items-center gap-2 border-t border-gray-100 pt-5 text-sm font-bold text-brand-red transition hover:gap-3"
                  >
                    {community.linkText}
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* COMMUNITY MESSAGE */}
        <div className="mt-14 overflow-hidden rounded-[28px] bg-brand-ink px-7 py-10 text-white md:px-12 md:py-12">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-[2px] text-red-300">
                The AdugboHub community
              </span>

              <h3 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl">
                Better neighbourhoods begin with better connections.
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/70">
                Bring people, information, local businesses and community
                activities closer together.
              </p>
            </div>

            <Link
              href="/register"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-brand-ink transition hover:bg-red-50"
            >
              Become part of it
              <ArrowRight size={18} className="text-brand-red" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
