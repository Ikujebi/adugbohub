
import Link from "next/link";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
} from "lucide-react";
import { BrandMark } from "./brand-mark";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Communities", href: "/#communities" },
  { label: "Get started", href: "/#get-started" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#08080c]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
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

            <p className="mt-6 max-w-md text-sm leading-8 text-slate-400">
              Bringing residents, community managers and local businesses
              together through a more connected neighbourhood experience.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-slate-400">
                <MapPin size={16} />
              </span>
              <span className="text-xs text-slate-500">
                Built for connected neighbourhoods.
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">Explore</h3>

            <ul className="mt-5 space-y-4">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-purple-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">Get in touch</h3>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Have a community or business enquiry? We would be glad to hear
              from you.
            </p>

            <a
              href="mailto:hello@adugbohub.com?subject=AdugboHub%20Enquiry"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-purple-400 transition-colors hover:text-red-400"
            >
              hello@adugbohub.com
              <ArrowUpRight size={15} />
            </a>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition hover:border-purple-500/40 hover:text-white"
              >
                <Facebook size={16} />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition hover:border-purple-500/40 hover:text-white"
              >
                <Instagram size={16} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition hover:border-purple-500/40 hover:text-white"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/[0.07] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} AdugboHub. All rights reserved.
          </p>

          <p className="text-xs text-slate-600">
            Connecting people. Empowering communities.
          </p>
        </div>
      </div>
    </footer>
  );
}
