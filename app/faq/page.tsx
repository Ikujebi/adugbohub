
"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  MessageCircle,
  Search,
  Smartphone,
} from "lucide-react";

// Keep page metadata in a separate server layout if you need
// metadata for this client component. See the instructions below.

const faqGroups = [
  {
    title: "About AdugboHub",
    description: "General information about the platform.",
    questions: [
      {
        question: "What is AdugboHub?",
        answer:
          "AdugboHub is a neighbourhood-focused platform designed to help residents, community administrators, and local businesses stay connected. It brings together community communication, local discovery, visitor coordination, and other neighbourhood experiences.",
      },
      {
        question: "Who can use AdugboHub?",
        answer:
          "AdugboHub is being designed for residents, estate and community administrators, and local businesses. Access to particular features may depend on your role and the community you belong to.",
      },
      {
        question: "Is AdugboHub only for estates?",
        answer:
          "AdugboHub is intended to support different types of neighbourhood communities, including residential estates and other organised communities.",
      },
      {
        question: "What makes AdugboHub different?",
        answer:
          "AdugboHub aims to bring useful neighbourhood experiences together in one platform, helping people communicate, discover local services, and coordinate community activities.",
      },
    ],
  },
  {
    title: "Accounts and Community Membership",
    description: "Questions about joining and participating in communities.",
    questions: [
      {
        question: "How do I create an AdugboHub account?",
        answer:
          "Account creation is handled through the AdugboHub mobile application. The registration process and available access options will be explained when the app is available.",
      },
      {
        question: "How do I join my neighbourhood?",
        answer:
          "You will be able to follow the community joining process available in the app. Some communities may require an invitation or approval from an authorised administrator.",
      },
      {
        question: "Can I belong to more than one community?",
        answer:
          "AdugboHub is designed to support community membership. The communities available to an account will depend on the platform's membership rules and access permissions.",
      },
      {
        question: "What happens if my membership request is not approved?",
        answer:
          "If a community requires approval, its authorised administrators are responsible for reviewing membership requests. You may need to contact the relevant community administrator for assistance.",
      },
    ],
  },
  {
    title: "Community Features",
    description: "Announcements, conversations, and community coordination.",
    questions: [
      {
        question: "Can I receive community announcements?",
        answer:
          "AdugboHub includes community announcement features intended to help members stay informed about relevant updates and notices.",
      },
      {
        question: "Can residents communicate with one another?",
        answer:
          "AdugboHub is designed to support neighbourhood conversations and communication between community members, subject to the available features and applicable community rules.",
      },
      {
        question: "Who manages community information?",
        answer:
          "Authorised community administrators and managers are responsible for managing the community information and administrative features assigned to their roles.",
      },
      {
        question: "Can community administrators manage members?",
        answer:
          "AdugboHub provides membership and administrative capabilities for authorised roles. The actions available depend on the permissions assigned to each role.",
      },
    ],
  },
  {
    title: "Visitors and Estate Management",
    description: "Visitor passes and organised entry coordination.",
    questions: [
      {
        question: "Can I manage visitors through AdugboHub?",
        answer:
          "AdugboHub is designed to support visitor management, including visitor information and pass-related coordination where enabled by the relevant community.",
      },
      {
        question: "Can I create a visitor pass?",
        answer:
          "Visitor pass creation is an intended app feature. Availability and the information required may depend on the community's visitor management settings.",
      },
      {
        question: "Can visitor passes be used for deliveries?",
        answer:
          "Visitor management is designed to accommodate different visit purposes, which may include guests, deliveries, contractors, and other authorised visits where enabled.",
      },
      {
        question: "Does a visitor pass guarantee entry?",
        answer:
          "No. A visitor pass supports visitor coordination, but entry remains subject to the relevant community's rules and authorised personnel.",
      },
    ],
  },
  {
    title: "Local Businesses and Marketplace",
    description: "Discovering neighbourhood products and services.",
    questions: [
      {
        question: "What is the AdugboHub marketplace?",
        answer:
          "The local marketplace is designed to help residents discover businesses, products, and services within their neighbourhood.",
      },
      {
        question: "Can a local business be listed?",
        answer:
          "AdugboHub is designed to support local business discovery. Business listing access and requirements will depend on the available marketplace features and applicable community arrangements.",
      },
      {
        question: "Can residents contact businesses?",
        answer:
          "Business discovery is intended to help residents find relevant local services. Available contact and interaction options will depend on the business listing features provided in the app.",
      },
      {
        question: "Does AdugboHub guarantee the quality of every business?",
        answer:
          "No. Residents should make their own enquiries and assessments before purchasing products or engaging a service provider. Any verification or listing information shown should be considered according to its stated meaning.",
      },
    ],
  },
  {
    title: "Safety and SOS",
    description: "Understanding alerts and community safety features.",
    questions: [
      {
        question: "Does AdugboHub have an SOS feature?",
        answer:
          "AdugboHub includes an SOS alert capability designed to help users notify relevant community contacts when assistance is needed.",
      },
      {
        question: "Does an SOS alert contact emergency services?",
        answer:
          "Do not assume that an SOS alert automatically contacts the police, ambulance, fire service, or other emergency responders. Contact the appropriate emergency service directly when urgent assistance is required.",
      },
      {
        question: "Does AdugboHub guarantee neighbourhood security?",
        answer:
          "No. AdugboHub provides communication and coordination tools. It does not replace professional security providers, emergency responders, or the responsibilities of community management.",
      },
    ],
  },
  {
    title: "App Availability and Support",
    description: "Getting the app and receiving assistance.",
    questions: [
      {
        question: "Is the AdugboHub app available?",
        answer:
          "The mobile app availability and official download links will be announced when the relevant app store releases are ready.",
      },
      {
        question: "Will AdugboHub work on Android and iPhone?",
        answer:
          "AdugboHub is being prepared for mobile use. Official Android and iOS availability will be confirmed when the respective releases are ready.",
      },
      {
        question: "How can I contact AdugboHub?",
        answer:
          "You can visit the Contact Us page for available support and enquiry information.",
      },
      {
        question: "Where can I learn more about privacy and terms?",
        answer:
          "You can read the Privacy Policy and Terms of Service pages on this website. Please check the published versions for their effective dates and current terms.",
      },
    ],
  },
];

export default function FAQPage() {
  const [activeGroup, setActiveGroup] = useState(0);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filteredGroups = faqGroups
    .map((group, groupIndex) => ({
      ...group,
      originalIndex: groupIndex,
      questions: group.questions.filter(
        (item) =>
          item.question.toLowerCase().includes(search.toLowerCase()) ||
          item.answer.toLowerCase().includes(search.toLowerCase()),
      ),
    }))
    .filter((group) => group.questions.length > 0);

  const visibleGroups = search.trim()
    ? filteredGroups
    : [
        {
          ...faqGroups[activeGroup],
          originalIndex: activeGroup,
        },
      ];

  return (
    <>
      {/* HERO */}
      <section className="bg-brand-soft">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center sm:px-8 lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-lavender px-4 py-2 text-sm font-bold text-brand-purple">
            <MessageCircle size={17} />
            Frequently Asked Questions
          </span>

          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
            Questions? We have answers.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-brand-muted">
            Find helpful information about AdugboHub, community membership,
            visitor management, local businesses, safety, and more.
          </p>

          <div className="mx-auto mt-9 flex max-w-xl items-center gap-3 rounded-full border border-brand-border bg-white px-5 py-4 shadow-sm">
            <Search size={21} className="shrink-0 text-brand-purple" />

            <input
              type="search"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setOpenQuestion(null);
              }}
              placeholder="Search frequently asked questions..."
              aria-label="Search frequently asked questions"
              className="w-full bg-transparent text-sm text-brand-ink outline-none placeholder:text-brand-muted"
            />
          </div>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[280px_1fr]">
          {/* CATEGORY NAVIGATION */}
          <aside className="rounded-3xl border border-brand-border bg-white p-5">
            <h2 className="px-3 pb-4 text-sm font-extrabold uppercase tracking-wider text-brand-ink">
              Browse by topic
            </h2>

            <div className="space-y-2">
              {faqGroups.map((group, index) => (
                <button
                  key={group.title}
                  type="button"
                  onClick={() => {
                    setActiveGroup(index);
                    setSearch("");
                    setOpenQuestion(null);
                  }}
                  className={`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                    activeGroup === index && !search.trim()
                      ? "bg-brand-lavender text-brand-purple"
                      : "text-brand-muted hover:bg-brand-soft hover:text-brand-ink"
                  }`}
                >
                  {group.title}
                </button>
              ))}
            </div>
          </aside>

          {/* QUESTIONS */}
          <div>
            {search.trim() && (
              <div className="mb-7">
                <h2 className="text-2xl font-extrabold text-brand-ink">
                  Search results
                </h2>

                <p className="mt-2 text-sm text-brand-muted">
                  {filteredGroups.reduce(
                    (total, group) => total + group.questions.length,
                    0,
                  )}{" "}
                  matching questions
                </p>
              </div>
            )}

            {!search.trim() && (
              <div className="mb-8">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-purple">
                  {faqGroups[activeGroup].title}
                </span>

                <h2 className="mt-3 text-3xl font-extrabold text-brand-ink">
                  {faqGroups[activeGroup].description}
                </h2>
              </div>
            )}

            <div className="space-y-8">
              {visibleGroups.map((group) => (
                <div key={group.title}>
                  {search.trim() && (
                    <h3 className="mb-4 text-lg font-bold text-brand-purple">
                      {group.title}
                    </h3>
                  )}

                  <div className="space-y-4">
                    {group.questions.map((item) => {
                      const questionId = `${group.originalIndex}-${item.question}`;
                      const isOpen = openQuestion === questionId;

                      return (
                        <article
                          key={questionId}
                          className={`overflow-hidden rounded-2xl border bg-white transition ${
                            isOpen
                              ? "border-brand-purple/30 shadow-md"
                              : "border-brand-border"
                          }`}
                        >
                          <button
                            type="button"
                            aria-expanded={isOpen}
                            onClick={() =>
                              setOpenQuestion(isOpen ? null : questionId)
                            }
                            className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left"
                          >
                            <span className="font-bold leading-7 text-brand-ink">
                              {item.question}
                            </span>

                            <span
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                                isOpen
                                  ? "rotate-180 bg-brand-lavender text-brand-purple"
                                  : "bg-brand-soft text-brand-muted"
                              }`}
                            >
                              <ChevronDown size={19} />
                            </span>
                          </button>

                          {isOpen && (
                            <div className="border-t border-brand-border px-6 py-5">
                              <p className="leading-8 text-brand-muted">
                                {item.answer}
                              </p>
                            </div>
                          )}
                        </article>
                      );
                    })}
                  </div>
                </div>
              ))}

              {search.trim() && filteredGroups.length === 0 && (
                <div className="rounded-3xl border border-brand-border bg-brand-soft px-6 py-14 text-center">
                  <Search
                    size={34}
                    className="mx-auto text-brand-purple"
                  />

                  <h3 className="mt-5 text-xl font-bold text-brand-ink">
                    No matching questions found
                  </h3>

                  <p className="mt-3 text-brand-muted">
                    Try a different search term or browse the topics.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="mt-6 font-bold text-brand-red"
                  >
                    Clear search
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="px-6 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-r from-brand-red to-brand-purple px-8 py-16 text-center sm:px-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white">
            <MessageCircle size={32} />
          </div>

          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold text-white sm:text-4xl">
            Still have questions?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/85">
            If you need more information about AdugboHub, our team will be
            happy to hear from you.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-brand-purple transition hover:bg-brand-lavender"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/download"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <Smartphone size={18} />
              Get the App
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
