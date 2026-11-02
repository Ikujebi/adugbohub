
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, MessageCircleQuestion } from "lucide-react";

const faqs = [
  {
    question: "What is AdugboHub?",
    answer:
      "AdugboHub is a neighbourhood community platform designed to help residents, community managers and local businesses connect, communicate and participate in community life.",
  },
  {
    question: "Who can use AdugboHub?",
    answer:
      "Residents, estate and community managers, and local business owners can use AdugboHub. The features available to each person depend on their account and community permissions.",
  },
  {
    question: "How do I join my neighbourhood?",
    answer:
      "Create an account and follow the community joining process. You may need to select your community and complete any membership verification required by its administrators.",
  },
  {
    question: "Can I receive community announcements?",
    answer:
      "Yes. AdugboHub is designed to help communities share announcements and important updates with their members.",
  },
  {
    question: "Can I discover local businesses?",
    answer:
      "Yes. The local marketplace is designed to help residents discover nearby businesses, products and services within their neighbourhood.",
  },
  {
    question: "Can I register my business?",
    answer:
      "AdugboHub is designed to support local business participation. Business registration and listing access will depend on the available onboarding process and platform permissions.",
  },
  {
    question: "Is AdugboHub only for estate residents?",
    answer:
      "No. The platform is intended for neighbourhoods and communities, including estates and other organised residential communities.",
  },
  {
    question: "How do I get help with my account?",
    answer:
      "For account or access questions, use the support contact provided by the AdugboHub team or your community administrator.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-white px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[0.8fr_1.2fr]">

        {/* LEFT INTRODUCTION */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-purple">
            <MessageCircleQuestion size={15} />
            Got questions?
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-4xl md:text-5xl">
            Frequently asked
            <br />
            <span className="text-brand-red">questions.</span>
          </h2>

          <p className="mt-5 max-w-md text-sm leading-8 text-brand-muted sm:text-base">
            Everything you need to know about joining, connecting and
            getting started with AdugboHub.
          </p>

          <div className="mt-9 rounded-[24px] bg-brand-lavender p-7">
            <h3 className="text-lg font-extrabold text-brand-ink">
              Still have questions?
            </h3>

            <p className="mt-3 text-sm leading-7 text-brand-muted">
              We're here to help you understand how AdugboHub works.
            </p>

            <Link
              href="/register"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-purple transition hover:text-brand-red"
            >
              Get started
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>

        {/* FAQ ACCORDION */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition ${
                  isOpen
                    ? "border-purple-200 bg-purple-50/40"
                    : "border-gray-100 bg-white hover:border-gray-200"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                >
                  <span className="text-sm font-bold leading-6 text-brand-ink sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                      isOpen
                        ? "rotate-180 bg-brand-purple text-white"
                        : "bg-gray-100 text-brand-ink"
                    }`}
                  >
                    <ChevronDown size={19} />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6">
                    <div className="h-px bg-purple-100" />

                    <p className="pt-5 text-sm leading-8 text-brand-muted">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
