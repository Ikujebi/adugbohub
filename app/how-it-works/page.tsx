
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  Building2,
  CheckCircle2,
  ClipboardList,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Store,
  Users,
  UserRoundPlus,
  Search,
  HeartHandshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn how AdugboHub helps residents, community administrators, and local businesses connect and participate in neighbourhood life.",
};

const residentSteps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Get AdugboHub",
    description:
      "Access AdugboHub through the mobile app when it becomes available. Create your account and follow the community joining process.",
  },
  {
    number: "02",
    icon: Users,
    title: "Connect with your community",
    description:
      "Join or access the relevant neighbourhood community, subject to its membership and approval requirements.",
  },
  {
    number: "03",
    icon: Bell,
    title: "Stay informed",
    description:
      "Explore community announcements, relevant updates, and conversations shared with members.",
  },
  {
    number: "04",
    icon: Search,
    title: "Discover what is nearby",
    description:
      "Explore local businesses, products, services, and other community features available to you.",
  },
];

const managerSteps = [
  {
    icon: Building2,
    title: "Set up the community",
    description:
      "Create or manage the relevant organisation and its community information.",
  },
  {
    icon: UserRoundPlus,
    title: "Coordinate membership",
    description:
      "Manage membership requests, roles, and authorised community access.",
  },
  {
    icon: ClipboardList,
    title: "Organise community activities",
    description:
      "Use available tools to share announcements and coordinate visitor information.",
  },
  {
    icon: ShieldCheck,
    title: "Support community communication",
    description:
      "Use available communication and alert features to help members stay informed.",
  },
];

const businessSteps = [
  {
    number: "01",
    title: "Connect with AdugboHub",
    description:
      "Explore the available business features and the communities where your business may be listed.",
  },
  {
    number: "02",
    title: "Present your services",
    description:
      "Provide relevant business details and information about the products or services you offer.",
  },
  {
    number: "03",
    title: "Get discovered locally",
    description:
      "Make it easier for residents to find out about your business through local discovery features.",
  },
];

const platformFeatures = [
  {
    icon: MessageCircle,
    title: "Community conversations",
    description: "Connect and exchange useful information with neighbours.",
  },
  {
    icon: Bell,
    title: "Announcements",
    description: "Stay updated with important community information.",
  },
  {
    icon: Store,
    title: "Local marketplace",
    description: "Explore nearby businesses, products, and services.",
  },
  {
    icon: ClipboardList,
    title: "Visitor management",
    description: "Support organised visitor information and coordination.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-soft">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-lavender px-4 py-2 text-sm font-bold text-brand-purple">
              <HeartHandshake size={17} />
              Simple. Connected. Community-focused.
            </span>

            <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
              A better-connected neighbourhood starts here.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-brand-muted">
              AdugboHub brings useful neighbourhood experiences together.
              Discover how residents, community administrators, and local
              businesses can use the platform to connect and participate.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/download"
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
                alt="People connecting and participating in community life"
                width={1000}
                height={800}
                priority
                className="h-[380px] w-full object-cover sm:h-[480px]"
              />
            </div>

            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-brand-border bg-white p-5 shadow-lg sm:block">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-brand-pink p-3 text-brand-red">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="font-bold text-brand-ink">
                    Everything connected
                  </p>
                  <p className="text-sm text-brand-muted">
                    Your neighbourhood in one place
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-purple">
            Getting Started
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
            Three groups. One connected experience.
          </h2>

          <p className="mt-5 text-lg leading-8 text-brand-muted">
            AdugboHub supports the people who live in neighbourhoods, the
            people who help manage them, and the businesses that serve them.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Link
            href="#for-residents"
            className="group rounded-3xl border border-brand-border bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="inline-flex rounded-2xl bg-brand-pink p-4 text-brand-red">
              <Users size={28} />
            </div>
            <h3 className="mt-6 text-xl font-bold text-brand-ink">
              For Residents
            </h3>
            <p className="mt-3 leading-7 text-brand-muted">
              Connect with neighbours, stay informed, and discover local
              services.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-red">
              See resident steps
              <ArrowRight size={17} className="transition group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            href="#for-managers"
            className="group rounded-3xl border border-brand-border bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="inline-flex rounded-2xl bg-brand-lavender p-4 text-brand-purple">
              <Building2 size={28} />
            </div>
            <h3 className="mt-6 text-xl font-bold text-brand-ink">
              For Community Managers
            </h3>
            <p className="mt-3 leading-7 text-brand-muted">
              Coordinate membership, communication, and community information.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-purple">
              See management steps
              <ArrowRight size={17} className="transition group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            href="#for-businesses"
            className="group rounded-3xl border border-brand-border bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="inline-flex rounded-2xl bg-brand-pink p-4 text-brand-red">
              <Store size={28} />
            </div>
            <h3 className="mt-6 text-xl font-bold text-brand-ink">
              For Local Businesses
            </h3>
            <p className="mt-3 leading-7 text-brand-muted">
              Present your services and help residents discover your business.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-red">
              See business steps
              <ArrowRight size={17} className="transition group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </section>

      {/* RESIDENTS */}
      <section id="for-residents" className="scroll-mt-24 bg-brand-soft py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 sm:px-8 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-purple">
              For Residents
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
              Get more connected to the place you call home.
            </h2>

            <p className="mt-5 leading-8 text-brand-muted">
              Residents can use AdugboHub to access relevant community
              information, connect with neighbours, and explore useful
              neighbourhood services.
            </p>

            <div className="mt-9 space-y-7">
              {residentSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <div key={step.number} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand-purple shadow-sm">
                      <Icon size={23} />
                    </div>

                    <div>
                      <span className="text-xs font-extrabold tracking-widest text-brand-red">
                        STEP {step.number}
                      </span>
                      <h3 className="mt-1 font-bold text-brand-ink">
                        {step.title}
                      </h3>
                      <p className="mt-2 leading-7 text-brand-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem]">
            <Image
              src="/images/resident.jpg"
              alt="Resident participating in neighbourhood life"
              width={1000}
              height={900}
              className="h-[440px] w-full object-cover sm:h-[560px]"
            />
          </div>
        </div>
      </section>

      {/* COMMUNITY MANAGERS */}
      <section id="for-managers" className="scroll-mt-24 mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:py-24">
        <div className="relative overflow-hidden rounded-[2rem] lg:order-1">
          <Image
            src="/images/community-management.jpg"
            alt="Community management and neighbourhood coordination"
            width={1000}
            height={900}
            className="h-[440px] w-full object-cover sm:h-[560px]"
          />
        </div>

        <div className="lg:order-2">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-purple">
            For Community Managers
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
            Bring community administration into better focus.
          </h2>

          <p className="mt-5 leading-8 text-brand-muted">
            Authorised community managers can use available administrative
            tools to support membership, communication, and everyday
            coordination.
          </p>

          <div className="mt-9 space-y-7">
            {managerSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-lavender text-brand-purple">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3 className="font-bold text-brand-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-7 text-brand-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BUSINESSES */}
      <section id="for-businesses" className="scroll-mt-24 bg-brand-soft py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 sm:px-8 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-purple">
              For Local Businesses
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
              Help your neighbourhood discover what you offer.
            </h2>

            <p className="mt-5 leading-8 text-brand-muted">
              AdugboHub aims to help local businesses connect with residents
              by making products and services easier to discover.
            </p>

            <div className="mt-9 space-y-7">
              {businessSteps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white font-extrabold text-brand-red shadow-sm">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="font-bold text-brand-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-7 text-brand-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-2 font-bold text-brand-red transition hover:gap-3"
            >
              Make a business enquiry
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-[2rem]">
            <Image
              src="/images/local-marketplace.jpg"
              alt="Local businesses and marketplace"
              width={1000}
              height={900}
              className="h-[440px] w-full object-cover sm:h-[560px]"
            />
          </div>
        </div>
      </section>

      {/* FEATURES OVERVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-purple">
            One Connected Platform
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-brand-ink sm:text-4xl">
            Useful features for everyday community life.
          </h2>

          <p className="mt-5 leading-8 text-brand-muted">
            Explore some of the experiences AdugboHub is designed to bring
            together.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {platformFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="rounded-3xl border border-brand-border bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="inline-flex rounded-2xl bg-brand-lavender p-4 text-brand-purple">
                  <Icon size={26} />
                </div>

                <h3 className="mt-5 font-bold text-brand-ink">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-brand-muted">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/discover"
            className="inline-flex items-center gap-2 font-bold text-brand-red transition hover:gap-3"
          >
            Explore all AdugboHub features
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-brand-red to-brand-purple px-8 py-16 text-center sm:px-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white">
            <HeartHandshake size={32} />
          </div>

          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold text-white sm:text-4xl">
            Getting connected starts with one community.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/85">
            Discover what AdugboHub can bring to your neighbourhood.
          </p>

          <Link
            href="/download"
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
// changed