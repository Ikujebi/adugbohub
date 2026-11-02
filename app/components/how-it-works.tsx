
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  MessageCircle,
  Users,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Join your community",
    description:
      "Find your neighbourhood or estate and become part of its digital community.",
    icon: Building2,
    color: "bg-red-50 text-brand-red",
  },
  {
    number: "02",
    title: "Connect with your neighbours",
    description:
      "Stay informed, participate in conversations and receive important community updates.",
    icon: MessageCircle,
    color: "bg-purple-50 text-brand-purple",
  },
  {
    number: "03",
    title: "Discover and participate",
    description:
      "Explore nearby businesses, access community services and take part in neighbourhood activities.",
    icon: Users,
    color: "bg-orange-50 text-orange-600",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="overflow-hidden bg-brand-soft px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-[1240px]">

        {/* SECTION HEADING */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-purple">
            <CheckCircle2 size={15} />
            Simple to get started
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-4xl md:text-5xl">
            Your neighbourhood,
            <br />
            <span className="text-brand-purple">one connection away.</span>
          </h2>

          <p className="mt-5 text-sm leading-8 text-brand-muted sm:text-base">
            Getting connected to your community shouldn't be complicated.
            AdugboHub makes it easier to participate in neighbourhood life.
          </p>
        </div>

        {/* STEPS */}
        <div className="relative mt-16 grid gap-7 md:grid-cols-3">

          {/* Connector line */}
          <div className="absolute left-[18%] right-[18%] top-12 hidden border-t-2 border-dashed border-purple-200 md:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-[28px] border border-gray-100 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-[24px] bg-white shadow-md">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${step.color}`}
                  >
                    <Icon size={27} />
                  </span>
                </div>

                <span className="mt-7 inline-block text-xs font-extrabold tracking-[3px] text-brand-red">
                  STEP {step.number}
                </span>

                <h3 className="mt-3 text-xl font-extrabold text-brand-ink">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-brand-muted">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* COMMUNITY IMAGE AND CTA */}
        <div className="mt-16 grid overflow-hidden rounded-[32px] bg-white shadow-sm lg:grid-cols-2">
          <div className="relative min-h-[300px] lg:min-h-[420px]">
            <Image
              src="/images/community.jpg"
              alt="Neighbours coming together as a community"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-7 py-12 sm:px-12 lg:px-14">
            <span className="text-xs font-extrabold uppercase tracking-[2px] text-brand-red">
              Better together
            </span>

            <h3 className="mt-5 text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl">
              A stronger neighbourhood starts with connection.
            </h3>

            <p className="mt-5 text-sm leading-8 text-brand-muted">
              Whether you're a resident, community manager or local business
              owner, there's a place for you on AdugboHub.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-red px-7 py-4 text-sm font-bold text-white transition hover:bg-brand-red-dark"
              >
                Join AdugboHub
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full border border-gray-200 px-7 py-4 text-sm font-bold text-brand-ink transition hover:border-brand-purple hover:text-brand-purple"
              >
                I already have an account
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
