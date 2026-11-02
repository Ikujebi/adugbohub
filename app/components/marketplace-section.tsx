
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ShoppingBag,
  Store,
  Utensils,
  Hammer,
  Shirt,
  Sparkles,
  Wrench,
  Scissors,
} from "lucide-react";

const categories = [
  {
    name: "Food & Groceries",
    icon: Utensils,
    color: "bg-orange-50 text-orange-600",
  },
  {
    name: "Home Services",
    icon: Hammer,
    color: "bg-purple-50 text-brand-purple",
  },
  {
    name: "Fashion & Clothing",
    icon: Shirt,
    color: "bg-pink-50 text-pink-600",
  },
  {
    name: "Beauty & Wellness",
    icon: Sparkles,
    color: "bg-rose-50 text-brand-red",
  },
  {
    name: "Repairs & Maintenance",
    icon: Wrench,
    color: "bg-blue-50 text-blue-600",
  },
  {
    name: "Cleaning Services",
    icon: Scissors,
    color: "bg-green-50 text-green-700",
  },
];

const businessHighlights = [
  {
    title: "Neighbourhood shops",
    description:
      "Discover everyday essentials, groceries and products from businesses around you.",
    image: "/images/local-marketplace.jpg",
    tag: "SHOP LOCAL",
  },
  {
    title: "Skilled artisans",
    description:
      "Find skilled professionals for repairs, installations and everyday home projects.",
    image: "/images/bricklayer.jpg",
    tag: "FIND SERVICES",
  },
  {
    title: "Food & everyday needs",
    description:
      "Explore food vendors, local sellers and services that make everyday living easier.",
    image: "/images/nupo-deyon-daniel-67ruAEYmp4c-unsplash.jpg",
    tag: "DISCOVER MORE",
  },
];

export default function MarketplaceSection() {
  return (
    <section
      id="businesses"
      className="overflow-hidden bg-white px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-[1240px]">

        {/* INTRODUCTION */}
        <div className="grid items-end gap-6 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-600">
              <Store size={15} />
              The neighbourhood marketplace
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-4xl md:text-5xl">
              Great things are
              <br />
              <span className="text-brand-red">closer than you think.</span>
            </h2>
          </div>

          <div className="md:pb-2">
            <p className="max-w-lg text-sm leading-8 text-brand-muted sm:text-base">
              From the shop around the corner to the artisan who can fix
              your home, discover useful products and services within
              your neighbourhood.
            </p>
          </div>
        </div>

        {/* MAIN MARKETPLACE BANNER */}
        <div className="relative mt-12 overflow-hidden rounded-[32px] bg-brand-ink">
          <div className="grid lg:grid-cols-2">
            <div className="relative z-10 flex flex-col justify-center px-7 py-12 text-white sm:px-12 lg:px-14 lg:py-16">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[2px] text-white/80">
                <ShoppingBag size={14} />
                Support local businesses
              </span>

              <h3 className="mt-6 max-w-lg text-3xl font-extrabold leading-tight sm:text-4xl">
                Your next favourite business might be just around the corner.
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
                Discover neighbourhood businesses, connect with service
                providers and help local entrepreneurs reach more people.
              </p>

              <Link
                href="/register"
                className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-brand-red px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-brand-red-dark"
              >
                Explore local businesses
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="relative min-h-[300px] lg:min-h-[440px]">
              <Image
                src="/images/local-marketplace.jpg"
                alt="Local businesses and neighbourhood shopping"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/40 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-brand-ink/20" />
            </div>
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="mt-16">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-extrabold text-brand-ink">
                Explore by category
              </h3>
              <p className="mt-2 text-sm text-brand-muted">
                Find what you need, closer to home.
              </p>
            </div>

            <span className="hidden text-xs font-semibold text-brand-purple sm:block">
              Discover local services
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.name}
                  href="/register"
                  className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-5 text-center transition hover:-translate-y-1 hover:border-purple-100 hover:shadow-lg"
                >
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${category.color}`}
                  >
                    <Icon size={25} />
                  </span>

                  <span className="mt-4 text-xs font-bold leading-5 text-brand-ink transition group-hover:text-brand-purple">
                    {category.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* MARKETPLACE HIGHLIGHTS */}
        <div className="mt-16">
          <div className="mb-8">
            <h3 className="text-2xl font-extrabold text-brand-ink">
              There's something for everyone.
            </h3>

            <p className="mt-2 text-sm leading-6 text-brand-muted">
              Explore the people, products and services that make
              neighbourhoods thrive.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {businessHighlights.map((business) => (
              <Link
                key={business.title}
                href="/register"
                className="group overflow-hidden rounded-[26px] border border-gray-100 bg-white transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-[230px] overflow-hidden">
                  <Image
                    src={business.image}
                    alt={business.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-2 text-[10px] font-extrabold tracking-wider text-brand-ink shadow-sm">
                    {business.tag}
                  </span>
                </div>

                <div className="p-6">
                  <h4 className="text-lg font-extrabold text-brand-ink transition group-hover:text-brand-red">
                    {business.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-brand-muted">
                    {business.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-bold text-brand-purple">
                    Discover more
                    <ArrowUpRight size={17} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* BUSINESS OWNER CTA */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-[28px] border border-red-100 bg-brand-pink p-8 text-center sm:flex-row sm:text-left md:px-10">
          <div>
            <div className="flex items-center justify-center gap-2 text-brand-red sm:justify-start">
              <Store size={18} />
              <span className="text-xs font-extrabold uppercase tracking-widest">
                Are you a business owner?
              </span>
            </div>

            <h3 className="mt-3 text-xl font-extrabold text-brand-ink sm:text-2xl">
              Let your neighbourhood discover your business.
            </h3>

            <p className="mt-2 text-sm leading-6 text-brand-muted">
              Give your products and services more visibility.
            </p>
          </div>

          <Link
            href="/register"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-brand-red px-7 py-4 text-sm font-bold text-white transition hover:bg-brand-red-dark"
          >
            Get your business noticed
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
