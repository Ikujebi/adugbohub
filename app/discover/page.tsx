
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  MessageCircle,
  Store,
  Users,
  ShieldCheck,
  ClipboardList,
  Smartphone,
  Megaphone,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Discover",
  description:
    "Discover the community features of AdugboHub, from neighbourhood announcements and conversations to local businesses and visitor management.",
};

const features = [
  {
    number: "01",
    icon: Megaphone,
    title: "Community Announcements",
    description:
      "Stay informed about important neighbourhood updates, community notices, events, and information shared by authorised community administrators.",
    image: "/images/announcements.jpg",
    imageAlt: "Community announcements and neighbourhood updates",
    color: "bg-brand-pink text-brand-red",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Neighbourhood Conversations",
    description:
      "Connect with neighbours through community conversations. Share information, ask questions, and participate in discussions.",
    image: "/images/community-chat.jpg",
    imageAlt: "Neighbours communicating with one another",
    color: "bg-brand-lavender text-brand-purple",
  },
  {
    number: "03",
    icon: Store,
    title: "Local Marketplace",
    description:
      "Discover local businesses, products, and services within your neighbourhood. Make it easier to find what you need close to home.",
    image: "/images/local-marketplace.jpg",
    imageAlt: "Local businesses and marketplace",
    color: "bg-brand-pink text-brand-red",
  },
  {
    number: "04",
    icon: ClipboardList,
    title: "Visitor Management",
    description:
      "Support organised visits with visitor passes and community entry coordination, helping residents and authorised personnel manage visitor information.",
    image: "/images/visitor-management.jpg",
    imageAlt: "Visitor management and entry coordination",
    color: "bg-brand-lavender text-brand-purple",
  },
  {
    number: "05",
    icon: Users,
    title: "Community Management",
    description:
      "Give authorised community managers tools to coordinate members, manage community information, and support everyday administration.",
    image: "/images/community-management.jpg",
    imageAlt: "Community leaders coordinating neighbourhood activities",
    color: "bg-brand-pink text-brand-red",
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Safety and SOS Alerts",
    description:
      "Use available SOS features to send alerts to the appropriate community contacts. SOS alerts support communication and do not replace emergency services.",
    image: "/images/community.jpg",
    imageAlt: "Community members supporting neighbourhood safety",
    color: "bg-brand-lavender text-brand-purple",
  },
];

const benefits = [
  {
    icon: Bell,
    title: "Stay informed",
    description:
      "Keep up with announcements and relevant community information.",
  },
  {
    icon: Users,
    title: "Stay connected",
    description:
      "Build stronger connections with neighbours and community members.",
  },
  {
    icon: MapPin,
    title: "Discover locally",
    description:
      "Explore businesses and services within your neighbourhood.",
  },
];

export default function DiscoverPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-soft">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-pink px-4 py-2 text-sm font-bold text-brand-red">
              <Smartphone size={16} />
              Discover AdugboHub
            </span>

            <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
              Everything happening around your neighbourhood.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-brand-muted">
              Discover a better way to stay informed, connect with neighbours,
              find local services, and participate in your community.
              AdugboHub brings important neighbourhood experiences together
              in one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#get-app"
                className="inline-flex items-center gap-2 rounded-full bg-brand-red px-7 py-4 text-sm font-bold text-white shadow-lg shadow-red-100 transition hover:-translate-y-1 hover:bg-brand-red-dark"
              >
                Get the App
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white px-7 py-4 text-sm font-bold text-brand-ink transition hover:border-brand-purple hover:text-brand-purple"
              >
                About AdugboHub
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-brand-lavender blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
              <Image
                src="/images/community.jpg"
                alt="People connecting within their neighbourhood"
                width={1000}
                height={800}
                priority
                className="h-[380px] w-full object-cover sm:h-[480px]"
              />
            </div>

            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-brand-border bg-white p-5 shadow-lg sm:block">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-brand-pink p-3 text-brand-red">
                  <Users size={24} />
                </div>
                <div>
                  <p className="font-bold text-brand-ink">
                    One connected community
                  </p>
                  <p className="text-sm text-brand-muted">
                    Your neighbourhood, together
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-purple">
            Explore the Platform
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
            A neighbourhood experience built around you.
          </h2>

          <p className="mt-5 text-lg leading-8 text-brand-muted">
            From everyday conversations to important community updates,
            AdugboHub helps bring the people, information, and services that
            matter closer together.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-brand-soft py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-purple">
                What You Can Discover
              </span>

              <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
                The features that bring your community together.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-brand-muted">
              Explore the tools designed to make neighbourhood communication
              and coordination easier.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.number}
                  className="group overflow-hidden rounded-[2rem] border border-brand-border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-extrabold text-brand-ink shadow-sm">
                      FEATURE {feature.number}
                    </div>
                  </div>

                  <div className="p-7 sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className={`inline-flex rounded-xl p-3 ${feature.color}`}>
                          <Icon size={25} />
                        </div>

                        <h3 className="mt-5 text-2xl font-bold text-brand-ink">
                          {feature.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-4 leading-8 text-brand-muted">
                      {feature.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-purple">
            Why AdugboHub?
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-brand-ink sm:text-4xl">
            Make more of your neighbourhood.
          </h2>

          <p className="mt-5 leading-8 text-brand-muted">
            A connected neighbourhood makes it easier to share information,
            discover opportunities, and take part in community life.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="rounded-3xl border border-brand-border bg-white p-8 transition hover:shadow-lg"
              >
                <div className="inline-flex rounded-2xl bg-brand-lavender p-4 text-brand-purple">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-brand-ink">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-brand-muted">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-brand-red to-brand-purple px-8 py-16 text-center sm:px-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white">
            <Smartphone size={32} />
          </div>

          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold text-white sm:text-4xl">
            Your neighbourhood deserves a better connection.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/85">
            Discover AdugboHub and explore a more connected way to experience
            community life.
          </p>

          <Link
            href="/#get-app"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-brand-purple transition hover:bg-brand-lavender"
          >
            Get the App
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
