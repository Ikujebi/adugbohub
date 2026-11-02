import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms and responsibilities for using the AdugboHub platform.",
};

type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const sections: LegalSection[] = [
  {
    title: "1. About These Terms",
    paragraphs: [
      "These Terms of Service govern access to and use of AdugboHub, a neighbourhood and community platform currently under development.",
      "AdugboHub's operating legal entity has not yet been finalised or registered. Before these Terms become effective, the responsible individual or legal entity must be identified here, with the appropriate contact details.",
    ],
  },
  {
    title: "2. Acceptance",
    paragraphs: [
      "By accessing or using AdugboHub after these Terms become effective, you agree to comply with them and applicable laws. If you do not agree, you should not use the service.",
      "If you are under 18, your use of the service is also subject to applicable child-protection and data-protection requirements. These Terms do not replace any required parental or legal-guardian consent.",
    ],
  },
  {
    title: "3. Minimum Age and Young Users",
    paragraphs: [
      "AdugboHub's intended minimum user age is 13. Users aged 13–17 are not treated as adults for purposes of applicable child-protection and data-protection laws.",
      "Before enabling accounts for users under 18, AdugboHub must implement the age-assurance, consent, privacy, and safeguarding measures required by applicable law. Where parental or legal-guardian consent is required, the service must obtain and appropriately verify it.",
      "Users must provide accurate age information and must not misrepresent their age or another person's identity.",
    ],
  },
  {
    title: "4. Accounts and Account Security",
    bullets: [
      "Provide accurate and current information when creating or updating an account.",
      "Keep your login credentials private and take reasonable steps to protect your account.",
      "Do not impersonate another person or misrepresent your authority.",
      "Do not access another person's account without permission.",
      "Notify AdugboHub if you suspect unauthorised access to your account.",
      "Follow community rules and the permissions associated with your account.",
    ],
  },
  {
    title: "5. Acceptable Use",
    bullets: [
      "Do not use AdugboHub to threaten, harass, bully, defraud, or intimidate anyone.",
      "Do not post unlawful, abusive, deceptive, or harmful content.",
      "Do not share another person's private information without an appropriate reason and permission.",
      "Do not upload content that infringes another person's intellectual-property or privacy rights.",
      "Do not attempt to bypass access controls, interfere with the platform, or compromise its security.",
      "Do not use the platform to organise unlawful activity or misuse community services.",
    ],
  },
  {
    title: "6. Messages, Media, and User Content",
    paragraphs: [
      "You remain responsible for content you submit, including messages, photographs, videos, audio recordings, documents, announcements, and business information.",
      "You must have the rights and permissions necessary to submit and share that content. You grant AdugboHub the limited permission necessary to host, store, display, and transmit it to provide the features you choose to use, subject to the Privacy Policy.",
      "Content visibility depends on the conversation, community, and permissions associated with the feature. Do not assume that content shared with a group is private from every member of that group.",
      "Editing or deleting content may not immediately remove copies held by recipients, backups, or records that must be retained by law.",
    ],
  },
  {
    title: "7. Community Membership and Administration",
    paragraphs: [
      "Community membership, roles, and permissions may be managed by authorised community administrators in accordance with the platform's available features.",
      "Administrators must use their permissions responsibly and only for legitimate community-management purposes. They must respect applicable privacy and data-protection requirements.",
      "AdugboHub may review reported misuse and take appropriate action under these Terms and applicable law.",
    ],
  },
  {
    title: "8. Visitor Management and SOS Features",
    paragraphs: [
      "Visitor passes and visitor-management tools are intended to assist community coordination. A pass does not, by itself, establish a visitor's identity, guarantee that a visitor is safe, or replace a community's own security procedures.",
      "SOS and other safety-related features are intended to help communicate an alert where available. They are not a substitute for contacting emergency services, and AdugboHub does not guarantee that an alert will be received, acknowledged, or acted upon within a particular time.",
      "Users should provide accurate information and use safety features responsibly. False or deliberately misleading reports may result in account or community restrictions, subject to applicable law.",
    ],
  },
  {
    title: "9. Local Businesses and Third-Party Services",
    paragraphs: [
      "Business listings and service information may be supplied by businesses, community members, or third parties. Information may change and should be confirmed directly with the relevant provider.",
      "Unless expressly stated otherwise, AdugboHub does not guarantee the quality, safety, legality, availability, or performance of a third-party business, product, or service.",
      "Third-party services may have their own terms and privacy policies. You should review them before using those services.",
    ],
  },
  {
    title: "10. Platform Availability and Changes",
    paragraphs: [
      "AdugboHub may add, modify, suspend, or discontinue features as the platform develops. We will aim to communicate material changes where reasonably practicable.",
      "We do not guarantee uninterrupted or error-free access. Maintenance, connectivity problems, technical faults, or events outside our reasonable control may affect availability.",
    ],
  },
  {
    title: "11. Suspension and Termination",
    paragraphs: [
      "Access may be restricted or suspended where reasonably necessary to protect users, investigate suspected misuse, enforce these Terms, maintain platform security, or comply with legal obligations.",
      "Before launch, AdugboHub must establish clear account suspension, termination, notice, and appeal procedures that are consistent with applicable law.",
      "Ending an account does not necessarily mean that every related record is immediately erased. Data handling after account closure is explained in the Privacy Policy.",
    ],
  },
  {
    title: "12. Disclaimers and Liability",
    paragraphs: [
      "AdugboHub is a communication and coordination platform. It is not a security company, emergency-response provider, or guarantee of the conduct of community members or third-party businesses.",
      "To the extent permitted by applicable law, AdugboHub will not be liable for indirect or consequential losses arising from use of the platform. Nothing in these Terms excludes or limits liability where doing so would be unlawful.",
      "The final liability provisions must be reviewed by a qualified legal professional before these Terms become effective.",
    ],
  },
  {
    title: "13. Changes to These Terms",
    paragraphs: [
      "We may update these Terms when the platform, our practices, or applicable legal requirements change. The revised version will be published here with an updated effective date. Where required, users will be notified or asked to agree to the revised Terms.",
    ],
  },
  {
    title: "14. Governing Law and Disputes",
    paragraphs: [
      "AdugboHub is being developed for use in Nigeria. The final governing-law, jurisdiction, and dispute-resolution provisions must be confirmed after the operating legal entity and applicable legal arrangements have been established.",
    ],
  },
  {
    title: "15. Contact",
    paragraphs: [
      "For questions about these Terms or use of AdugboHub, visit our Contact page. The responsible operator's legal name and official contact details must be added before publication.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="bg-brand-soft">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-pink text-brand-red">
            <FileText size={28} />
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-brand-ink sm:text-5xl">
            Terms of Service
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-muted">
            These Terms explain the responsibilities and conditions that
            apply when using AdugboHub.
          </p>

          <p className="mt-5 text-sm text-brand-muted">
            Status: Pre-launch draft. Effective date to be confirmed.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8">
        <div className="mb-10 rounded-2xl border border-brand-red/20 bg-brand-pink p-6">
          <p className="font-bold text-brand-ink">
            Important pre-launch notice
          </p>
          <p className="mt-2 text-sm leading-7 text-brand-muted">
            The operating legal entity, child-user safeguards, account
            enforcement procedures, governing-law provisions, and final
            liability terms must be confirmed before publication as effective
            Terms of Service.
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <article key={section.title}>
              <h2 className="text-xl font-bold text-brand-ink">
                {section.title}
              </h2>

              {section.paragraphs && (
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="leading-8 text-brand-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {section.bullets && (
                <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-brand-muted">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-brand-soft p-8">
          <h2 className="text-xl font-bold text-brand-ink">
            Need clarification?
          </h2>
          <p className="mt-3 leading-7 text-brand-muted">
            Contact the AdugboHub team if you have questions about these
            Terms.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 font-bold text-brand-red hover:text-brand-purple"
          >
            Contact Us
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}