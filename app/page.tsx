
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe2,
  HeartHandshake,
  Zap,
} from "lucide-react";

import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { BrandMark } from "@/app/components/brand-mark";
import { SectionLabel } from "@/app/components/section-label";
import { AppPreview } from "@/app/components/app-preview";
import { FeatureCard } from "@/app/components/feature-card";
import { AudienceCard } from "@/app/components/audience-card";

import {
  images,
  features,
  steps,
  audiences,
  values,
} from "@/app/data/homepage";

export default function HomePage() {
  return (
    <div
      id="top"
      className="min-h-screen overflow-hidden bg-[#070709] font-sans text-slate-100 antialiased selection:bg-purple-600 selection:text-white"
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-purple-700 focus:px-4 focus:py-3 focus:text-white"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main">
        {/* HERO */}
        <section className="relative isolate overflow-hidden border-b border-white/[0.06]">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 bg-cover bg-center opacity-25"
            style={{ backgroundImage: `url("${images.hero}")` }}
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-[#070709] via-[#070709]/95 to-[#070709]/65"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-40 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-purple-900/20 blur-[150px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 top-40 -z-10 h-[400px] w-[400px] rounded-full bg-red-900/15 blur-[140px]"
          />

          <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 pb-24 pt-20 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pb-32 lg:pt-28">
            <div className="relative z-10">
              <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-purple-500/20 bg-purple-500/[0.07] px-4 py-2 backdrop-blur-md">
                <Globe2 size={14} className="text-purple-400" />

                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-purple-300 sm:text-xs">
                  A connected way of living
                </span>
              </div>

              <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-[-0.045em] text-white sm:text-5xl lg:text-[64px]">
                Your community.
                <br />

                <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-red-400 bg-clip-text text-transparent">
                  Connected.
                </span>

                <br />

                Your neighbourhood.
                <br />

                <span className="text-slate-500">Empowered.</span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                AdugboHub brings residents, estate managers and local
                businesses together through one connected platform for
                communication, visitor management, community services and
                everyday neighbourhood life.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#get-started"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-700 to-red-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-purple-950/30 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-950/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                >
                  Get started with AdugboHub
                  <ArrowUpRight size={18} />
                </Link>

                <Link
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-7 py-4 text-sm font-semibold text-slate-300 transition-colors hover:border-purple-500/40 hover:bg-white/[0.05] hover:text-white"
                >
                  Explore the platform
                  <ArrowDown size={16} />
                </Link>
              </div>

              <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/[0.08] pt-7">
                <div>
                  <div className="mb-3 text-purple-400">
                    <HeartHandshake size={19} />
                  </div>

                  <p className="text-xs font-bold text-white">Connected</p>
                  <p className="mt-1 text-[10px] leading-relaxed text-slate-500">
                    Stronger communities
                  </p>
                </div>

                <div>
                  <div className="mb-3 text-red-400">
                    <Check size={19} />
                  </div>

                  <p className="text-xs font-bold text-white">Organised</p>
                  <p className="mt-1 text-[10px] leading-relaxed text-slate-500">
                    Structured operations
                  </p>
                </div>

                <div>
                  <div className="mb-3 text-purple-400">
                    <Zap size={19} />
                  </div>

                  <p className="text-xs font-bold text-white">Empowered</p>
                  <p className="mt-1 text-[10px] leading-relaxed text-slate-500">
                    Local opportunities
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div
                aria-hidden="true"
                className="absolute inset-4 rounded-[40px] bg-cover bg-center opacity-30"
                style={{ backgroundImage: `url("${images.hero}")` }}
              />

              <div className="absolute inset-4 rounded-[40px] bg-gradient-to-br from-[#070709]/40 via-[#070709]/60 to-purple-950/80" />

              <div className="relative z-10 w-full">
                <AppPreview />
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="border-b border-white/[0.06] bg-[#0a0a0e] py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-4">
              <SectionLabel number="01">
                A better approach
              </SectionLabel>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                More than a neighbourhood group.

                <span className="mt-2 block font-medium text-slate-500">
                  A connected community.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-sm leading-8 text-slate-400 sm:text-base">
                Communities need more than scattered conversations and
                disconnected processes. They need organised ways to
                communicate, coordinate activities and access important
                services.
              </p>

              <p className="mt-5 text-sm leading-8 text-slate-400 sm:text-base">
                AdugboHub brings these everyday experiences into one digital
                environment, helping communities operate with greater
                clarity, convenience and coordination.
              </p>

              <Link
                href="#how-it-works"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-purple-400 transition-colors hover:text-red-400"
              >
                Discover how it works
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="lg:col-span-3">
              <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-purple-950/60 to-[#111116] p-7">
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 text-purple-400">
                  <Zap size={23} />
                </div>

                <h3 className="text-lg font-bold text-white">
                  One connected ecosystem.
                </h3>

                <p className="mt-3 text-xs leading-7 text-slate-400">
                  Communication, access management and neighbourhood services
                  working together in one platform.
                </p>

                <div className="absolute -bottom-10 -right-8 h-32 w-32 rounded-full bg-purple-700/10 blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section
          id="features"
          className="scroll-mt-24 py-24 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <SectionLabel number="02">
                  Platform capabilities
                </SectionLabel>

                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                  Everything your community needs.

                  <span className="block text-slate-500">In one place.</span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-slate-400 sm:text-base">
                Thoughtfully connected tools that simplify everyday community
                activities and support more organised neighbourhood living.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <FeatureCard key={feature.number} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          id="how-it-works"
          className="scroll-mt-24 border-y border-white/[0.06] bg-[#0a0a0e] py-24 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div>
              <SectionLabel number="03">
                Getting started
              </SectionLabel>

              <h2 className="max-w-lg text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                A simpler way to bring your community together.
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-8 text-slate-400 sm:text-base">
                Establish your community, connect the right people and begin
                managing everyday activities through a shared digital
                platform.
              </p>

              <Link
                href="#get-started"
                className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition-colors hover:bg-purple-100"
              >
                Get started
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="group flex gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-colors hover:border-purple-500/30 hover:bg-white/[0.035] sm:p-7"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 font-mono text-sm font-bold text-purple-400">
                    {step.number}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-base font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      {step.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="mt-1 shrink-0 text-slate-600 transition-colors group-hover:text-purple-400"
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHO WE SERVE */}
        <section
          id="communities"
          className="scroll-mt-24 py-24 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 max-w-2xl">
              <SectionLabel number="04">
                Who we serve
              </SectionLabel>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                One platform.

                <span className="block text-slate-500">
                  Different community needs.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                A connected environment designed around the people and
                organisations that make neighbourhoods work.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {audiences.map((audience, index) => (
                <AudienceCard
                  key={audience.title}
                  {...audience}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* COMMUNITY PHOTO GALLERY */}
        <section className="border-y border-white/[0.06] bg-[#0a0a0e] py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <SectionLabel number="05">
                  The community experience
                </SectionLabel>

                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                  Built around real neighbourhood life.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
                  Communities are made up of people, businesses, shared
                  spaces and everyday moments. AdugboHub brings these
                  connections closer together.
                </p>
              </div>

              <Link
                href="#get-started"
                className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-purple-400 transition-colors hover:text-red-400"
              >
                Be part of the community
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {images.gallery.map((image, index) => (
                <div
                  key={image}
                  role="img"
                  aria-label={`AdugboHub community gallery photograph ${index + 1}`}
                  className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-cover bg-center ${
                    index === 0 || index === 5
                      ? "aspect-[4/5] sm:row-span-2"
                      : "aspect-[4/3]"
                  }`}
                  style={{ backgroundImage: `url("${image}")` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-100" />

                  <span className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[9px] font-semibold tracking-wider text-white opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
                    ADUGBOHUB
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PLATFORM VALUES */}
        <section className="border-b border-white/[0.06] bg-[#0a0a0e] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-2xl">
              <SectionLabel number="06">
                What guides us
              </SectionLabel>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Technology with people at its centre.
              </h2>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/[0.07] text-purple-400">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-slate-500">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FINAL CALL TO ACTION */}
        <section
          id="get-started"
          className="scroll-mt-24 relative overflow-hidden py-28 lg:py-36"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
            style={{ backgroundImage: `url("${images.community}")` }}
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-[#070709] via-[#10091b]/95 to-[#070709]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-900/15 blur-[150px]"
          />

          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
            <div className="mb-8 flex justify-center">
              <BrandMark />
            </div>

            <SectionLabel number="07">
              The next chapter
            </SectionLabel>

            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Stronger communities

              <span className="block bg-gradient-to-r from-purple-400 via-purple-300 to-red-400 bg-clip-text text-transparent">
                start with connection.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
              Bring your residents, community administrators and local
              businesses into a more connected neighbourhood experience.
              Discover what AdugboHub can make possible.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@adugbohub.com?subject=AdugboHub%20Community%20Enquiry"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-700 to-red-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-purple-950/30 transition-all hover:-translate-y-1 hover:shadow-purple-950/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 sm:w-auto"
              >
                Talk to our team
                <ArrowUpRight size={18} />
              </a>

              <a
                href="mailto:hello@adugbohub.com"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-8 py-4 text-sm font-semibold text-slate-300 transition-colors hover:border-white/20 hover:text-white sm:w-auto"
              >
                Contact AdugboHub
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center gap-2 text-xs text-slate-500">
              <Check size={14} className="text-purple-400" />
              Built for connected neighbourhood experiences.
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
