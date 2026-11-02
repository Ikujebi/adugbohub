
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  SearchX,
} from "lucide-react";

import { searchWebsite } from "@/lib/search";

export const metadata: Metadata = {
  title: "Search",
  description: "Search the AdugboHub website for community information, services and support.",
  robots: {
    index: false,
    follow: true,
  },
};

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
  }>;
}

export default async function SearchPage({
  searchParams,
}: SearchPageProps) {
  const { q = "" } = await searchParams;
  const query = q.trim();
  const results = searchWebsite(query);

  return (
    <div className="min-h-[70vh] bg-white">
      <section className="border-b border-brand-border bg-brand-soft px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-red">
            AdugboHub Search
          </p>

          <h1 className="mt-4 text-3xl font-black tracking-tight text-brand-ink sm:text-5xl">
            Find what you're looking for.
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-muted sm:text-base">
            Search our website for community features, local businesses,
            visitor management, support and more.
          </p>

          <form
            action="/search"
            method="GET"
            role="search"
            className="mt-8 flex h-14 items-center gap-3 rounded-2xl border border-brand-border bg-white px-4 shadow-sm focus-within:border-brand-purple focus-within:ring-4 focus-within:ring-brand-purple/10"
          >
            <Search className="shrink-0 text-brand-purple" size={21} />

            <input
              type="search"
              name="q"
              defaultValue={query}
              placeholder="What would you like to find?"
              aria-label="Search the AdugboHub website"
              className="min-w-0 flex-1 bg-transparent text-sm text-brand-ink outline-none placeholder:text-brand-muted/70"
            />

            <button
              type="submit"
              className="rounded-xl bg-brand-red px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-red-dark"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-14 sm:py-16">
        {!query ? (
          <div className="py-8 text-center">
            <Search
              size={38}
              className="mx-auto text-brand-purple"
            />

            <h2 className="mt-5 text-xl font-extrabold text-brand-ink">
              What are you looking for?
            </h2>

            <p className="mt-2 text-sm text-brand-muted">
              Enter a word or phrase in the search box above.
            </p>
          </div>
        ) : results.length > 0 ? (
          <>
            <div className="mb-8">
              <p className="text-sm font-semibold text-brand-muted">
                {results.length} {results.length === 1 ? "result" : "results"} for
                {" "}
                <span className="text-brand-ink">"{query}"</span>
              </p>
            </div>

            <div className="space-y-4">
              {results.map((result) => (
                <Link
                  key={result.href}
                  href={result.href}
                  className="group block rounded-2xl border border-brand-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-purple/40 hover:shadow-lg hover:shadow-brand-purple/5"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                        {result.category}
                      </span>

                      <h2 className="mt-2 text-lg font-extrabold text-brand-ink transition group-hover:text-brand-red">
                        {result.title}
                      </h2>

                      <p className="mt-2 text-sm leading-7 text-brand-muted">
                        {result.description}
                      </p>
                    </div>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-lavender text-brand-purple transition group-hover:bg-brand-red group-hover:text-white">
                      <ArrowRight size={18} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <div className="py-10 text-center">
            <SearchX
              size={42}
              className="mx-auto text-brand-muted"
            />

            <h2 className="mt-5 text-xl font-extrabold text-brand-ink">
              No results found
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-brand-muted">
              We couldn't find anything matching "{query}". Try another
              keyword, or visit our Discover and FAQ pages.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/discover"
                className="rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-red-dark"
              >
                Explore AdugboHub
              </Link>

              <Link
                href="/faq"
                className="rounded-full border border-brand-border px-6 py-3 text-sm font-bold text-brand-ink transition hover:bg-brand-soft"
              >
                Visit FAQs
              </Link>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
