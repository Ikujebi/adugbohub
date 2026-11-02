
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Command,
  Menu,
  Search,
  X,
} from "lucide-react";

import { navigation } from "@/lib/site";
import BrandMark from "./brand-mark";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const closeMenu = () => setMenuOpen(false);

  const openSearch = () => {
    setMenuOpen(false);
    setSearchOpen(true);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  // Keyboard shortcut: Ctrl + K / Cmd + K
  useEffect(() => {
    const handleKeyboard = (event: KeyboardEvent) => {
      const isSearchShortcut =
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k";

      if (isSearchShortcut) {
        event.preventDefault();
        setMenuOpen(false);
        setSearchOpen(true);
      }

      if (event.key === "Escape") {
        setSearchOpen(false);
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, []);

  // Focus the search input when the search panel opens.
  useEffect(() => {
    if (searchOpen) {
      const frame = requestAnimationFrame(() => {
        searchInputRef.current?.focus();
      });

      return () => cancelAnimationFrame(frame);
    }
  }, [searchOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-brand-border/80 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[76px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-5 md:px-8">

          {/* LOGO */}
          <BrandMark
            onClick={closeMenu}
            className="shrink-0"
          />

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-5 xl:flex 2xl:gap-7"
          >
            {navigation
              .filter((item) => item.label !== "Home")
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap text-[13px] font-semibold text-brand-muted transition hover:text-brand-red"
                >
                  {item.label}
                </Link>
              ))}
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden items-center gap-3 lg:flex">

            {/* SEARCH SHORTCUT */}
            <button
              type="button"
              onClick={openSearch}
              aria-label="Open website search, Ctrl K"
              className="inline-flex h-11 items-center gap-3 rounded-full border border-brand-border bg-brand-soft px-4 text-sm text-brand-muted transition hover:border-brand-purple hover:bg-brand-lavender hover:text-brand-purple"
            >
              <Search size={17} />

              <span>Search</span>

              <kbd className="rounded-md border border-brand-border bg-white px-2 py-1 text-[10px] font-semibold text-brand-muted">
                Ctrl K
              </kbd>
            </button>

            {/* GET THE APP */}
            <Link
              href="/download"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-red px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-100 transition hover:-translate-y-0.5 hover:bg-brand-red-dark"
            >
              Get the App
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="flex items-center gap-2 lg:hidden">

            {/* MOBILE SEARCH BUTTON */}
            <button
              type="button"
              onClick={openSearch}
              aria-label="Open website search"
              className="flex h-10 items-center gap-2 rounded-xl border border-brand-border bg-brand-soft px-3 text-brand-ink transition hover:border-brand-purple hover:bg-brand-lavender"
            >
              <Search size={17} />

              <span className="text-xs font-bold">
                Search
              </span>

              <kbd className="hidden rounded border border-brand-border bg-white px-1.5 py-0.5 text-[9px] font-bold text-brand-muted min-[380px]:inline">
                Ctrl K
              </kbd>
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-border text-brand-ink transition hover:bg-brand-soft"
            >
              {menuOpen ? (
                <X size={21} />
              ) : (
                <Menu size={21} />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-brand-border bg-white px-5 pb-6 pt-4 shadow-xl lg:hidden"
          >
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col"
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="border-b border-brand-border/70 py-4 text-sm font-semibold text-brand-ink transition hover:text-brand-red"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/download"
              onClick={closeMenu}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-4 text-sm font-bold text-white transition hover:bg-brand-red-dark"
            >
              Get the App
              <ArrowUpRight size={17} />
            </Link>
          </div>
        )}
      </header>

      {/* WEBSITE SEARCH OVERLAY */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-brand-ink/50 px-4 pt-[12vh] backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeSearch();
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="search-dialog-title"
            className="w-full max-w-2xl overflow-hidden rounded-3xl border border-brand-border bg-white shadow-2xl"
          >
            {/* SEARCH HEADER */}
            <div className="flex items-center justify-between border-b border-brand-border px-5 py-4 sm:px-6">
              <div>
                <h2
                  id="search-dialog-title"
                  className="font-extrabold text-brand-ink"
                >
                  Search AdugboHub
                </h2>

                <p className="mt-1 text-xs text-brand-muted">
                  Find pages, services and community information.
                </p>
              </div>

              <button
                type="button"
                onClick={closeSearch}
                aria-label="Close search"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-border text-brand-muted transition hover:bg-brand-soft hover:text-brand-red"
              >
                <X size={18} />
              </button>
            </div>

            {/* SEARCH FORM */}
            <form
              action="/search"
              method="GET"
              onSubmit={closeSearch}
              className="p-5 sm:p-6"
            >
              <div className="flex h-14 items-center gap-3 rounded-2xl border border-brand-purple/30 bg-brand-soft px-4 transition focus-within:border-brand-purple focus-within:ring-4 focus-within:ring-brand-purple/10">
                <Search
                  size={21}
                  className="shrink-0 text-brand-purple"
                />

                <input
                  ref={searchInputRef}
                  type="search"
                  name="q"
                  required
                  autoComplete="off"
                  placeholder="What are you looking for?"
                  aria-label="Search AdugboHub"
                  className="min-w-0 flex-1 bg-transparent text-sm text-brand-ink outline-none placeholder:text-brand-muted/70"
                />

                <button
                  type="submit"
                  aria-label="Submit search"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-red text-white transition hover:bg-brand-red-dark"
                >
                  <ArrowRight size={18} />
                </button>
              </div>

              {/* SEARCH SHORTCUT HELP */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs text-brand-muted">
                <span>
                  Search community, businesses, services and more.
                </span>

                <span className="flex items-center gap-1.5">
                  <Command size={13} />
                  <kbd className="rounded border border-brand-border bg-brand-soft px-1.5 py-1 font-semibold">
                    Ctrl K
                  </kbd>
                  <span>to open</span>
                </span>
              </div>
            </form>

            {/* QUICK LINKS */}
            <div className="border-t border-brand-border bg-brand-soft/70 px-5 py-4 sm:px-6">
              <p className="mb-3 text-[10px] font-extrabold uppercase tracking-widest text-brand-muted">
                Popular pages
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Discover", href: "/discover" },
                  { label: "Community", href: "/community" },
                  { label: "Businesses", href: "/businesses" },
                  { label: "FAQs", href: "/faq" },
                  { label: "Download App", href: "/download" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeSearch}
                    className="rounded-full border border-brand-border bg-white px-3 py-2 text-xs font-semibold text-brand-muted transition hover:border-brand-purple hover:text-brand-purple"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
