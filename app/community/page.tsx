
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  Building2,
  MessageCircle,
  ShieldCheck,
  Users,
  Store,
  ClipboardList,
  HeartHandshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Discover how AdugboHub helps residents, community leaders, estate managers and local businesses stay connected.",
};

const audiences = [
  {
    icon: Users,
    title: "Residents",
    description:
      "Stay connected with neighbours, receive community announcements, participate in conversations, and discover useful local services.",
    image: "/images/resident.jpg",
    alt: "Resident participating in community life",
    color: "bg-brand-pink text-brand-red",
  },
  {
    icon: Building2,
    title: "Estate and Community Managers",
    description:
      "Support everyday community administration with tools for member coordination, announcements, visitor management, and community information.",
    image: "/images/community-management.jpg",
    alt: "Community management and coordination",
    color: "bg-brand-lavender text-brand-purple",
  },
  {
    icon: Store,
    title: "Local Businesses",
    description:
      "Help residents discover nearby businesses, products, and services while making your business more visible within the community.",
    image: "/images/local-marketplace.jpg",
    alt: "Local businesses serving their neighbourhood",
    color: "bg-brand-pink text-brand-red",
  },
];

const communityTools = [
  {
    icon: Bell,
    title: "Community Announcements",
    description:
      "Share important updates, notices, and information with relevant community members.",
  },
  {
    icon: MessageCircle,
    title: "Neighbourhood Conversations",
    description:
      "Encourage communication and information sharing among neighbours.",
  },
  {
    icon: ClipboardList,
    title: "Visitor Coordination",
    description:
      "Support organised visitor information and entry coordination.",
  },
  {
    icon: ShieldCheck,
    title: "SOS Communication",
    description:
      "Provide an additional way to send alerts to designated community contacts. This does not replace emergency services.",
  },
];

const values = [
  {
    number: "01",
    title: "Connection",
    description:
      "We believe neighbourhoods work better when people can communicate and stay informed.",
  },
  {
    number: "02",
    title: "Participation",
    description:
      "A strong community grows when residents and local organisations can take part.",
  },
  {
    number: "03",
    title: "Convenience",
    description:
      "Useful community information and services should be easier to discover.",
  },
];

export default function CommunityPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-soft">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-lavender px-4 py-2 text-sm font-bold text-brand-purple">
              <HeartHandshake size={17} />
              Built for Community
            </span>

            <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
              Stronger neighbourhoods begin with connection.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-brand-muted">
              AdugboHub brings residents, community leaders, estate managers,
              and local businesses closer together through better
              neighbourhood communication and coordination.
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
                href="/discover"
                className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white px-7 py-4 text-sm font-bold text-brand-ink transition hover:border-brand-purple hover:text-brand-purple"
              >
                Explore Features
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-brand-lavender blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
              <Image
                src="/images/community.jpg"
                alt="People coming together in their neighbourhood"
                width={1000}
                height={800}
                priority
                className="h-[380px] w-full object-cover sm:h-[480px]"
              />
            </div>

            <div className="absolute -bottom-6 -left-4 hidden max-w-xs rounded-2xl border border-brand-border bg-white p-5 shadow-lg sm:block">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-brand-pink p-3 text-brand-red">
                  <Users size={24} />
                </div>
                <div>
                  <p className="font-bold text-brand-ink">
                    One neighbourhood
                  </p>
                  <p className="text-sm text-brand-muted">
                    Many people. One community.
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
            A Place for Everyone
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
            Different roles. One connected community.
          </h2>

          <p className="mt-5 text-lg leading-8 text-brand-muted">
            Every neighbourhood has people who make it work. AdugboHub is
            designed to support the different people and organisations that
            contribute to everyday community life.
          </p>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="bg-brand-soft py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-purple">
              Who We Serve
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
              Designed around the people who make a neighbourhood.
            </h2>

            <p className="mt-5 leading-8 text-brand-muted">
              Whether you live in a neighbourhood, help manage it, or run a
              business there, AdugboHub aims to make community connections
              easier.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience) => {
              const Icon = audience.icon;

              return (
                <article
                  key={audience.title}
                  className="overflow-hidden rounded-[2rem] border border-brand-border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-64">
                    <Image
                      src={audience.image}
                      alt={audience.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="p-7">
                    <div className={`inline-flex rounded-xl p-3 ${audience.color}`}>
                      <Icon size={25} />
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-brand-ink">
                      {audience.title}
                    </h3>

                    <p className="mt-4 leading-8 text-brand-muted">
                      {audience.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMMUNITY TOOLS */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:py-24">
        <div className="relative">
          <div className="absolute -bottom-5 -left-5 h-40 w-40 rounded-full bg-brand-pink blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem]">
            <Image
              src="/images/community-management.jpg"
              alt="People working together to coordinate their community"
              width={1000}
              height={850}
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
          </div>
        </div>

        <div>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-purple">
            Community Tools
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
            Everyday tools for a more organised neighbourhood.
          </h2>

          <p className="mt-5 leading-8 text-brand-muted">
            AdugboHub brings useful community experiences together, helping
            people communicate, coordinate, and discover what is happening
            around them.
          </p>

          <div className="mt-9 space-y-7">
            {communityTools.map((tool) => {
              const Icon = tool.icon;

              return (
                <div key={tool.title} className="flex gap-4">
                  <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-lavender text-brand-purple">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3 className="font-bold text-brand-ink">
                      {tool.title}
                    </h3>
                    <p className="mt-2 leading-7 text-brand-muted">
                      {tool.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <Link
            href="/discover"
            className="mt-9 inline-flex items-center gap-2 font-bold text-brand-red transition hover:gap-3"
          >
            Discover all features
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-brand-soft py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-purple">
              What We Believe
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-brand-ink sm:text-4xl">
              The values behind a connected community.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.number}
                className="rounded-3xl border border-brand-border bg-white p-8 transition hover:shadow-lg"
              >
                <span className="text-sm font-extrabold tracking-widest text-brand-red">
                  {value.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-brand-ink">
                  {value.title}
                </h3>

                <p className="mt-3 leading-7 text-brand-muted">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-brand-red to-brand-purple px-8 py-16 text-center sm:px-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white">
            <HeartHandshake size={32} />
          </div>

          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold text-white sm:text-4xl">
            Your community. Your people. Your AdugboHub.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/85">
            Take a step towards a more connected neighbourhood experience.
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
