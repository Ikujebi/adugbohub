
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import { BrandMark } from "./brand-mark";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Communities", href: "/#communities" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#08080c]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="AdugboHub homepage"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <BrandMark />

          <span>
            <span className="block text-lg font-extrabold tracking-tight text-white">
              Adugbo<span className="text-purple-400">Hub</span>
            </span>
            <span className="block text-[9px] font-semibold uppercase tracking-[0.19em] text-slate-500">
              Your community, connected
            </span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/#get-started"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-700 to-red-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-purple-950/20 transition hover:-translate-y-0.5 hover:shadow-purple-950/40"
          >
            Get started
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white transition hover:border-purple-500/40 lg:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-white/[0.07] bg-[#0b0b10] px-4 py-5 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/[0.04] hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/#get-started"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-700 to-red-600 px-5 py-3.5 text-sm font-bold text-white"
            >
              Get started
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
