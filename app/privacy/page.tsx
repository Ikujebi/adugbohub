
import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how AdugboHub collects, uses, protects, and manages personal information.",
};

const sections = [
  {
    title: "1. Who We Are",
    paragraphs: [
      "AdugboHub is a neighbourhood and community platform currently under development. Its operating legal entity has not yet been finalised or registered.",
      "Before this policy is made effective, the person or legal entity responsible for operating AdugboHub must be identified here, together with an appropriate contact address and privacy contact.",
    ],
  },
  {
    title: "2. Information We May Process",
    paragraphs: [
      "Depending on the features you use, AdugboHub may process account details such as your name, email address, phone number, authentication information, and account preferences.",
      "Community information may include your organisation or estate membership, assigned role, membership status, and participation in community activities.",
      "Communication content may include messages, photographs, videos, audio recordings, documents, and other files you choose to share.",
      "Visitor-management information may include visitor details, visit purposes, pass information, and pass status.",
      "If you choose to use location-dependent features, such as an SOS alert, the app may process location information you provide or authorise it to access.",
      "Technical information may include device details, diagnostic information, application logs, and notification tokens needed to operate and secure the service.",
    ],
  },
  {
    title: "3. Why We Process Information",
    paragraphs: [
      "We intend to use information to create and manage accounts, provide community features, support communication, manage memberships and visitor passes, deliver notifications, respond to support requests, maintain security, prevent misuse, and improve the platform.",
      "For each processing activity, AdugboHub must identify and document an appropriate lawful basis under applicable data-protection law. Where consent is required, it must be requested clearly and may be withdrawn subject to legal limitations.",
    ],
  },
  {
    title: "4. Children and Minimum Age",
    paragraphs: [
      "AdugboHub's intended minimum user age is 13. This age policy does not remove any additional protections required for children under applicable law.",
      "Under the Nigeria Data Protection Act 2023, a child is generally a person under 18. Where AdugboHub relies on consent to process a child's personal data, the applicable parental or legal-guardian consent requirements and age-and-consent verification safeguards must be followed.",
      "Section 31 of the Act also addresses children aged 13 and above who specifically request information society services by electronic means. AdugboHub will apply the requirements and any applicable regulations or guidance governing that situation.",
      "Before accounts for users aged 13–17 are enabled, AdugboHub must establish an appropriate age-assurance, consent, privacy, and safeguarding process. We will not knowingly treat a child as an adult for privacy-consent purposes.",
      "If you are a parent or legal guardian and have a concern about a child's information, please contact AdugboHub through the contact page.",
    ],
  },
  {
    title: "5. Messages and Community Content",
    paragraphs: [
      "Messages and files are made available according to the conversation, organisation, and access permissions associated with the feature used. Content shared in a community space may be visible to members authorised to access that space.",
      "Do not share another person's personal information, photographs, documents, or other content unless you have an appropriate reason and permission to do so.",
      "Editing or deleting content in the app may not immediately remove every copy from backups, security records, recipients' devices, or records that must be retained by law. The actual deletion behaviour and retention periods must be documented before launch.",
    ],
  },
  {
    title: "6. When Information May Be Shared",
    paragraphs: [
      "Information may be accessible to authorised community administrators where necessary for their assigned responsibilities.",
      "AdugboHub may use service providers for functions such as hosting, database operations, media storage, authentication, communications, and notifications. The final policy must identify the providers actually used, their roles, and any relevant international data transfers.",
      "Information may also be disclosed where required by law, a valid legal process, or where necessary to protect vital interests, subject to applicable law.",
      "AdugboHub does not intend to sell personal information. Any future sharing for advertising or other additional purposes must be explained transparently and supported by an appropriate lawful basis.",
    ],
  },
  {
    title: "7. Data Security",
    paragraphs: [
      "AdugboHub intends to apply appropriate technical and organisational measures to protect personal information against unauthorised access, alteration, disclosure, loss, or destruction.",
      "No online service can guarantee absolute security. Users should protect their login credentials and report suspected unauthorised access promptly.",
    ],
  },
  {
    title: "8. Data Retention",
    paragraphs: [
      "AdugboHub's detailed data-retention schedule is still being developed. Specific retention periods for accounts, messages, media, visitor records, location information, logs, and backups have not yet been finalised.",
      "Before launch, AdugboHub must document retention periods or criteria for each relevant category of information, explain when information is deleted or anonymised, and establish procedures for handling deletion requests and legal retention obligations.",
      "Information should not be kept for longer than necessary for the lawful purpose for which it is processed. A deletion request may be subject to applicable legal, security, and dispute-resolution requirements.",
    ],
  },
  {
    title: "9. Your Rights",
    paragraphs: [
      "Subject to applicable law, you may have rights to request access to your personal information, correct inaccurate information, request erasure, object to or restrict certain processing, request portability, and withdraw consent where processing relies on consent.",
      "You may also have the right to complain to the Nigeria Data Protection Commission. Some rights are subject to legal conditions and exceptions.",
      "AdugboHub must establish a working process for receiving, verifying, and responding to privacy requests before launch.",
    ],
  },
  {
    title: "10. International Processing",
    paragraphs: [
      "Some service providers may process or store information outside Nigeria. Before launch, AdugboHub must identify relevant locations and ensure that any international transfer complies with the Nigeria Data Protection Act and applicable NDPC requirements.",
    ],
  },
  {
    title: "11. Changes to This Policy",
    paragraphs: [
      "This policy may be updated as AdugboHub's features, data practices, or legal obligations change. The updated policy will be published on this page with a revised effective date. Where required, users will be notified or asked to provide consent again.",
    ],
  },
  {
    title: "12. Contact and Complaints",
    paragraphs: [
      "For privacy questions or requests, use the AdugboHub contact page. Before this policy becomes effective, the operating legal entity and a monitored privacy contact address must be added.",
    ],
  },
];

export default function PrivacyPage() {
  const email = siteConfig.contactEmail;

  return (
    <>
      <section className="bg-brand-soft">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-lavender text-brand-purple">
            <ShieldCheck size={28} />
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-brand-ink sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-muted">
            This policy explains how AdugboHub intends to handle personal
            information when providing its neighbourhood and community services.
          </p>

          <p className="mt-5 text-sm text-brand-muted">
            Status: Pre-launch draft. Effective date to be confirmed.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8">
        <div className="mb-10 rounded-2xl border border-brand-red/20 bg-brand-pink p-6">
          <p className="font-bold text-brand-ink">Important pre-launch notice</p>
          <p className="mt-2 text-sm leading-7 text-brand-muted">
            AdugboHub's operating legal entity, detailed retention schedule,
            service-provider list, international-transfer arrangements, and
            child-consent process must be confirmed before this policy is
            published as effective.
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <article key={section.title}>
              <h2 className="text-xl font-bold text-brand-ink">
                {section.title}
              </h2>
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
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-brand-soft p-8">
          <h2 className="text-xl font-bold text-brand-ink">
            Privacy questions?
          </h2>
          <p className="mt-3 leading-7 text-brand-muted">
            Contact us about your personal information or a privacy concern.
          </p>

          {email && (
            <a
              href={`mailto:${email}`}
              className="mt-4 block break-all font-semibold text-brand-purple hover:text-brand-red"
            >
              {email}
            </a>
          )}

          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 font-bold text-brand-red hover:text-brand-purple"
          >
            Contact Us
            <Mail size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
