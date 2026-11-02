import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  ShieldCheck,
  Users,
  Building2,
  Store,
  MessageCircle,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Community first",
    description:
      "We believe stronger neighbourhoods begin when people feel connected, supported, and included.",
  },
  {
    icon: ShieldCheck,
    title: "Trust and safety",
    description:
      "We want residents and community managers to have better ways to coordinate and communicate.",
  },
  {
    icon: Users,
    title: "Everyone belongs",
    description:
      "AdugboHub brings residents, community leaders, and local businesses into one connected space.",
  },
];

const audiences = [
  {
    icon: Users,
    title: "Residents",
    description:
      "Stay informed, connect with neighbours, discover services, and participate in community life.",
  },
  {
    icon: Building2,
    title: "Community managers",
    description:
      "Improve communication, coordinate activities, and manage important neighbourhood processes.",
  },
  {
    icon: Store,
    title: "Local businesses",
    description:
      "Make your products and services easier for people in your neighbourhood to discover.",
  },
];

export default function AboutSection() {
  return (
    <>
      {/* About Hero */}
      <section className="relative overflow-hidden bg-brand-soft">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="inline-flex rounded-full bg-brand-pink px-4 py-2 text-sm font-semibold text-brand-red">
              About AdugboHub
            </span>

            <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
              Bringing neighbourhoods closer, one connection at a time.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-brand-muted">
              AdugboHub is designed to make neighbourhood living more
              connected. We bring community communication, local discovery,
              announcements, and everyday coordination into one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#get-app"
                className="inline-flex items-center gap-2 rounded-full bg-brand-red px-7 py-4 text-sm font-bold text-white transition hover:bg-brand-red-dark"
              >
                Get the App
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/#discover"
                className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white px-7 py-4 text-sm font-bold text-brand-ink transition hover:border-brand-purple hover:text-brand-purple"
              >
                Explore Features
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-5 -top-5 h-32 w-32 rounded-full bg-brand-lavender blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
              <Image
                src="/images/community.jpg"
                alt="People connecting within their neighbourhood"
                width={900}
                height={700}
                priority
                className="h-[380px] w-full object-cover sm:h-[480px]"
              />
            </div>

            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl bg-white p-5 shadow-lg sm:block">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-brand-pink p-3 text-brand-red">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="font-bold text-brand-ink">
                    Better connections
                  </p>
                  <p className="text-sm text-brand-muted">
                    Stronger communities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-purple">
            Our Story
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
            A better way to experience neighbourhood life
          </h2>

          <p className="mt-6 text-lg leading-8 text-brand-muted">
            Every neighbourhood has people, businesses, services, and
            important information that make everyday life work. But staying
            connected with everything happening around us is not always easy.
          </p>

          <p className="mt-5 text-lg leading-8 text-brand-muted">
            AdugboHub aims to bring these everyday connections together,
            helping communities communicate, discover local opportunities,
            and coordinate with greater ease.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-brand-soft py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-purple">
              What Guides Us
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-brand-ink sm:text-4xl">
              The values behind AdugboHub
            </h2>

            <p className="mt-5 leading-7 text-brand-muted">
              We are building around the things that help neighbourhoods
              thrive: connection, trust, and participation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="rounded-3xl border border-brand-border bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="inline-flex rounded-2xl bg-brand-lavender p-4 text-brand-purple">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-brand-ink">
                    {value.title}
                  </h3>

                  <p className="mt-3 leading-7 text-brand-muted">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-purple">
            Who We Serve
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-brand-ink sm:text-4xl">
            One platform, different community needs
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {audiences.map((audience) => {
            const Icon = audience.icon;

            return (
              <article
                key={audience.title}
                className="rounded-3xl border border-brand-border p-8"
              >
                <div className="inline-flex rounded-2xl bg-brand-pink p-4 text-brand-red">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-brand-ink">
                  {audience.title}
                </h3>

                <p className="mt-3 leading-7 text-brand-muted">
                  {audience.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-brand-red to-brand-purple px-8 py-16 text-center sm:px-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Your neighbourhood deserves to be more connected.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/85">
            Discover a better way to stay informed, connect with people, and
            participate in your community.
          </p>

          <Link
            href="/#get-app"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-brand-purple transition hover:bg-brand-lavender"
          >
            Get Started
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}