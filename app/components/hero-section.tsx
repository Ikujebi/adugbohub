
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Store,
  Users,
} from "lucide-react";

const highlights = [
  {
    icon: MessageCircle,
    label: "Neighbourhood conversations",
    color: "bg-purple-100 text-brand-purple",
  },
  {
    icon: Bell,
    label: "Local news and announcements",
    color: "bg-red-100 text-brand-red",
  },
  {
    icon: Store,
    label: "Discover nearby businesses",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: ShieldCheck,
    label: "Better community coordination",
    color: "bg-green-100 text-green-700",
  },
];

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:gap-16">

        {/* LEFT CONTENT */}
        <div className="animate-fade-up">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-red" />
            <span className="text-xs font-bold tracking-wide text-brand-red">
              YOUR NEIGHBOURHOOD, BETTER CONNECTED
            </span>
          </div>

          <h1 className="max-w-[650px] text-4xl font-extrabold leading-[1.12] tracking-tight text-brand-ink sm:text-5xl lg:text-[60px]">
            Your community.
            <br />
            Your people.
            <br />
            <span className="text-brand-red">One connected place.</span>
          </h1>

          <p className="mt-7 max-w-[540px] text-base leading-8 text-brand-muted sm:text-lg">
            From neighbourhood announcements and friendly conversations
            to local businesses and visitor coordination, AdugboHub brings
            your community closer together.
          </p>

          {/* ACTIONS */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-red px-7 py-4 text-sm font-bold text-white shadow-lg shadow-red-100 transition hover:-translate-y-1 hover:bg-brand-red-dark"
            >
              Join your community
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#discover"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-7 py-4 text-sm font-bold text-brand-ink transition hover:border-brand-purple hover:text-brand-purple"
            >
              Explore AdugboHub
              <ArrowUpRight size={17} />
            </Link>
          </div>

          {/* HIGHLIGHTS */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3"
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.color}`}
                  >
                    <Icon size={19} />
                  </span>

                  <span className="text-sm font-semibold text-gray-700">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
          <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-brand-lavender blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-52 w-52 rounded-full bg-brand-pink blur-3xl" />

          <div className="relative overflow-hidden rounded-[32px] border-[8px] border-white shadow-2xl shadow-gray-200/80">
            <Image
              src="/images/community.jpg"
              alt="Neighbours enjoying their community together"
              width={900}
              height={1050}
              priority
              className="h-[420px] w-full object-cover sm:h-[540px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/80">
                <MapPin size={15} />
                Community starts here
              </div>

              <h2 className="max-w-sm text-2xl font-bold leading-tight sm:text-3xl">
                Good neighbours make great communities.
              </h2>
            </div>
          </div>

          {/* FLOATING COMMUNITY CARD */}
          <div className="absolute -left-5 top-12 hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-xl sm:block md:-left-12">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-brand-purple">
                <Users size={22} />
              </div>

              <div>
                <p className="text-sm font-extrabold text-brand-ink">
                  Stronger together
                </p>
                <p className="mt-1 text-xs text-brand-muted">
                  One neighbourhood at a time
                </p>
              </div>
            </div>
          </div>

          {/* FLOATING LOCAL BUSINESS CARD */}
          <div className="absolute -bottom-5 -right-3 hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-xl sm:block md:-right-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-brand-red">
                <Store size={20} />
              </div>

              <div>
                <p className="text-sm font-bold text-brand-ink">
                  Shop local
                </p>
                <p className="mt-1 text-xs text-brand-muted">
                  Support businesses nearby
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
