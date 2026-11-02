
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChefHat,
  Hammer,
  HeartHandshake,
  MapPin,
  Search,
  ShoppingBag,
  Sparkles,
  Store,
  Truck,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Local Businesses",
  description:
    "Discover how AdugboHub helps residents find local businesses, products, and services within their neighbourhood.",
};

const categories = [
  {
    icon: ShoppingBag,
    title: "Shops and Groceries",
    description: "Discover everyday essentials and neighbourhood shops.",
  },
  {
    icon: ChefHat,
    title: "Food and Catering",
    description: "Explore food vendors, restaurants, and catering services.",
  },
  {
    icon: Wrench,
    title: "Repairs and Maintenance",
    description: "Find professionals for repairs and everyday maintenance.",
  },
  {
    icon: Hammer,
    title: "Building and Construction",
    description: "Discover artisans and building-related services.",
  },
  {
    icon: Truck,
    title: "Delivery and Logistics",
    description: "Explore delivery and logistics services in your area.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional Services",
    description: "Find useful professional and personal services.",
  },
];

const benefits = [
  {
    icon: Search,
    title: "Easier discovery",
    description:
      "Help residents discover businesses and services relevant to their neighbourhood.",
  },
  {
    icon: MapPin,
    title: "Local connections",
    description:
      "Bring neighbourhood customers and nearby service providers closer together.",
  },
  {
    icon: Store,
    title: "Business visibility",
    description:
      "Give local businesses an opportunity to present their products and services to community members.",
  },
];

const businessSteps = [
  {
    number: "01",
    title: "Become part of the community",
    description:
      "Get connected to the relevant AdugboHub community and explore the available business features.",
  },
  {
    number: "02",
    title: "Present your business",
    description:
      "Use the available business tools to provide useful information about your business, products, or services.",
  },
  {
    number: "03",
    title: "Connect with customers",
    description:
      "Make it easier for community members to discover your business and learn what you offer.",
  },
];

export default function BusinessesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-soft">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-pink px-4 py-2 text-sm font-bold text-brand-red">
              <Store size={17} />
              AdugboHub Local Marketplace
            </span>

            <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
              Discover great businesses right around your neighbourhood.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-brand-muted">
              From everyday essentials to skilled professionals, AdugboHub
              helps residents explore local products and services while
              giving neighbourhood businesses a place to be discovered.
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
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white px-7 py-4 text-sm font-bold text-brand-ink transition hover:border-brand-purple hover:text-brand-purple"
              >
                Business Enquiries
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-brand-lavender blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
              <Image
                src="/images/local-marketplace.jpg"
                alt="Local marketplace and neighbourhood businesses"
                width={1000}
                height={800}
                priority
                className="h-[380px] w-full object-cover sm:h-[480px]"
              />
            </div>

            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-brand-border bg-white p-5 shadow-lg sm:block">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-brand-pink p-3 text-brand-red">
                  <ShoppingBag size={24} />
                </div>
                <div>
                  <p className="font-bold text-brand-ink">
                    Shop closer to home
                  </p>
                  <p className="text-sm text-brand-muted">
                    Discover your local community
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
            The Local Marketplace
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
            Bringing neighbourhood businesses closer to the people they serve.
          </h2>

          <p className="mt-5 text-lg leading-8 text-brand-muted">
            Your neighbourhood is full of useful products, talented people,
            and valuable services. AdugboHub aims to make discovering them
            easier.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-brand-soft py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-purple">
                Explore Categories
              </span>

              <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
                Find the products and services you need.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-brand-muted">
              Explore different types of businesses and services that may be
              available within your community.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <article
                  key={category.title}
                  className="group rounded-3xl border border-brand-border bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-purple/30 hover:shadow-lg"
                >
                  <div className="inline-flex rounded-2xl bg-brand-lavender p-4 text-brand-purple transition group-hover:bg-brand-pink group-hover:text-brand-red">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-brand-ink">
                    {category.title}
                  </h3>

                  <p className="mt-3 leading-7 text-brand-muted">
                    {category.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-brand-red">
                    Explore with AdugboHub
                    <ArrowRight size={16} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BUSINESS IMAGE AND BENEFITS */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:py-24">
        <div className="relative">
          <div className="absolute -bottom-5 -left-5 h-40 w-40 rounded-full bg-brand-pink blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem]">
            <Image
              src="/images/bricklayer.jpg"
              alt="A skilled local tradesperson at work"
              width={1000}
              height={850}
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
          </div>
        </div>

        <div>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-purple">
            Made for Local Discovery
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
            Good businesses deserve to be discovered.
          </h2>

          <p className="mt-5 leading-8 text-brand-muted">
            Whether you run a neighbourhood shop, offer a professional
            service, or provide everyday essentials, local discovery can
            help connect your business with the people around you.
          </p>

          <div className="mt-9 space-y-7">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div key={benefit.title} className="flex gap-4">
                  <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-lavender text-brand-purple">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3 className="font-bold text-brand-ink">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 leading-7 text-brand-muted">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOR BUSINESS OWNERS */}
      <section className="bg-brand-soft py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-purple">
              For Local Business Owners
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
              Take your business closer to your community.
            </h2>

            <p className="mt-5 leading-8 text-brand-muted">
              AdugboHub is designed to support local discovery and make it
              easier for residents to learn about businesses operating
              around them.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {businessSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-3xl border border-brand-border bg-white p-8 transition hover:shadow-lg"
              >
                <span className="text-sm font-extrabold tracking-widest text-brand-red">
                  STEP {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-brand-ink">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-brand-muted">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-purple px-7 py-4 text-sm font-bold text-white transition hover:bg-brand-purple-dark"
            >
              Contact Us About Your Business
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST AND DISCOVERY */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24">
        <div className="grid items-center gap-12 rounded-[2rem] border border-brand-border bg-white p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex rounded-2xl bg-brand-pink p-4 text-brand-red">
              <HeartHandshake size={30} />
            </div>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
              Local connections can make a big difference.
            </h2>

            <p className="mt-5 leading-8 text-brand-muted">
              Discovering nearby businesses can save time, support
              neighbourhood enterprise, and help residents connect with
              services within their community.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Discover nearby products and services",
                "Explore different business categories",
                "Support neighbourhood businesses",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-brand-purple"
                  />
                  <span className="text-sm font-medium text-brand-ink">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/images/nupo-deyon-daniel-67ruAEYmp4c-unsplash.jpg"
              alt="A local business environment"
              width={900}
              height={700}
              className="h-[340px] w-full object-cover sm:h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-brand-red to-brand-purple px-8 py-16 text-center sm:px-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white">
            <Sparkles size={32} />
          </div>

          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold text-white sm:text-4xl">
            Discover more. Connect locally. Grow together.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/85">
            Explore AdugboHub and discover the businesses and services that
            make your neighbourhood special.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/download"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-brand-purple transition hover:bg-brand-lavender"
            >
              Get the App
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/community"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Explore Community
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
