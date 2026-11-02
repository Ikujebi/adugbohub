
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MessageCircle,
  Users,
  Building2,
  Store,
  Headphones,
  MapPin,
} from "lucide-react";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact AdugboHub for support, community enquiries, and business partnerships.",
};

const contactOptions = [
  {
    icon: Headphones,
    title: "General Support",
    description:
      "Need assistance or have a question about using AdugboHub? We're here to help.",
    subject: "AdugboHub General Support",
  },
  {
    icon: Building2,
    title: "Community Partnerships",
    description:
      "Interested in bringing AdugboHub to your estate, neighbourhood, or community?",
    subject: "AdugboHub Community Partnership",
  },
  {
    icon: Store,
    title: "Business Enquiries",
    description:
      "Are you a local business interested in reaching more people in your neighbourhood?",
    subject: "AdugboHub Business Enquiry",
  },
];

export default function ContactPage() {
  const email = siteConfig.contactEmail;

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-soft">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center sm:px-8 lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-pink px-4 py-2 text-sm font-semibold text-brand-red">
            <MessageCircle size={16} />
            Contact AdugboHub
          </span>

          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
            We'd love to hear from you.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-brand-muted">
            Whether you need assistance, want to partner with us, or have an
            idea that could make neighbourhood life better, let's talk.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-purple">
            How Can We Help?
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-brand-ink sm:text-4xl">
            Let's start a conversation
          </h2>

          <p className="mt-5 leading-7 text-brand-muted">
            Choose the enquiry that best describes what you need.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {contactOptions.map((option) => {
            const Icon = option.icon;

            return (
              <article
                key={option.title}
                className="flex flex-col rounded-3xl border border-brand-border bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="inline-flex w-fit rounded-2xl bg-brand-lavender p-4 text-brand-purple">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-brand-ink">
                  {option.title}
                </h3>

                <p className="mt-3 flex-1 leading-7 text-brand-muted">
                  {option.description}
                </p>

                {email ? (
                  <a
                    href={`mailto:${email}?subject=${encodeURIComponent(option.subject)}`}
                    className="mt-7 inline-flex items-center gap-2 font-bold text-brand-red transition hover:text-brand-purple"
                  >
                    Send an enquiry
                    <ArrowRight size={18} />
                  </a>
                ) : (
                  <p className="mt-7 text-sm font-semibold text-brand-muted">
                    Contact details coming soon
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* Email contact */}
      <section className="bg-brand-soft py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 sm:px-8 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-purple">
              Get in Touch
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-brand-ink sm:text-4xl">
              Every great community starts with communication.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-brand-muted">
              We welcome questions, suggestions, feedback, and partnership
              conversations. Tell us what you have in mind.
            </p>
          </div>

          <div className="rounded-3xl border border-brand-border bg-white p-8 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-brand-pink p-4 text-brand-red">
                <Mail size={28} />
              </div>

              <div>
                <h3 className="font-bold text-brand-ink">
                  Email Us
                </h3>
                <p className="text-sm text-brand-muted">
                  For enquiries and assistance
                </p>
              </div>
            </div>

            {email ? (
              <a
                href={`mailto:${email}`}
                className="mt-6 block break-all text-lg font-bold text-brand-purple hover:text-brand-red"
              >
                {email}
              </a>
            ) : (
              <p className="mt-6 text-sm leading-7 text-brand-muted">
                Our official support email will be published here soon.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="px-6 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-brand-red to-brand-purple px-8 py-16 text-center sm:px-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white">
            <Users size={32} />
          </div>

          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
            Let's build stronger neighbourhoods together.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/85">
            Discover how AdugboHub can help residents, community managers,
            and local businesses stay connected.
          </p>

          <Link
            href="/#get-app"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-brand-purple transition hover:bg-brand-lavender"
          >
            Explore AdugboHub
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
