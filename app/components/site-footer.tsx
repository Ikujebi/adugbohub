
import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  MessageCircle,
  Smartphone,
  Mail,
} from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

import BrandMark from "./brand-mark";
import { siteConfig, socialLinks } from "@/lib/site";

const footerLinks = {
  platform: [
    { label: "Home", href: "/" },
    { label: "Discover", href: "/discover" },
    { label: "Community", href: "/community" },
    { label: "Local Businesses", href: "/businesses" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "FAQs", href: "/faq" },
    { label: "Download App", href: "/download" },
  ],

  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socialItems = [
  {
    label: "Facebook",
    href: socialLinks.facebook,
    icon: FaFacebook,
  },
  {
    label: "Instagram",
    href: socialLinks.instagram,
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: socialLinks.linkedin,
    icon: FaLinkedin,
  },
];

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#20152f] text-white">
      <div className="mx-auto max-w-[1240px] px-5 pb-10 pt-16 md:px-8 md:pt-20">

        {/* TOP FOOTER */}
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">

          {/* BRAND */}
          <div>
            <BrandMark className="[&_img]:h-12 [&_img]:w-auto sm:[&_img]:h-14" />

            <p className="mt-6 max-w-sm text-sm leading-8 text-white/60">
              {siteConfig.description}
            </p>

            <div className="mt-6 flex items-start gap-3 text-sm leading-7 text-white/60">
              <MapPin
                size={17}
                className="mt-1 shrink-0 text-brand-red"
              />
              <span>
                Connecting neighbourhoods, one community at a time.
              </span>
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-7 flex items-center gap-3">
              {socialItems.map((item) => {
                const Icon = item.icon;

                if (!item.href) return null;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit AdugboHub on ${item.label}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-brand-red hover:bg-brand-red hover:text-white"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* PLATFORM LINKS */}
          <div>
            <h3 className="text-sm font-extrabold tracking-wide">
              Platform
            </h3>

            <ul className="mt-6 space-y-4">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition hover:text-brand-red"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY LINKS */}
          <div>
            <h3 className="text-sm font-extrabold tracking-wide">
              Company
            </h3>

            <ul className="mt-6 space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition hover:text-brand-red"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* GET THE APP */}
          <div>
            <h3 className="text-sm font-extrabold tracking-wide">
              Get Started
            </h3>

            <p className="mt-6 text-sm leading-8 text-white/60">
              Your neighbourhood, your people, and your community in one
              connected place.
            </p>

            <Link
              href="/download"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand-red/20 transition hover:-translate-y-1 hover:bg-brand-red-dark"
            >
              <Smartphone size={17} />
              Get the App
              <ArrowUpRight size={16} />
            </Link>

            {siteConfig.contactEmail && (
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="mt-7 flex items-center gap-3 text-sm text-white/60 transition hover:text-white"
              >
                <Mail size={17} className="shrink-0 text-brand-red" />
                <span className="break-all">
                  {siteConfig.contactEmail}
                </span>
              </a>
            )}
          </div>
        </div>

        {/* CONTACT STRIP */}
        <div className="flex flex-col gap-5 border-b border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-extrabold">
              Let's build stronger communities.
            </h3>

            <p className="mt-2 text-sm text-white/55">
              Have a question about AdugboHub?
              We'd love to hear from you.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-2 text-sm font-bold text-white transition hover:text-brand-red"
          >
            Get in touch
            <MessageCircle size={17} />
          </Link>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="flex flex-col gap-5 pt-8 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {currentYear} AdugboHub. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/privacy"
              className="text-white/55 transition hover:text-brand-red"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-white/55 transition hover:text-brand-red"
            >
              Terms of Service
            </Link>

            <Link
              href="/contact"
              className="text-white/55 transition hover:text-brand-red"
            >
              Contact Us
            </Link>
          </div>

          <p>Made for connected communities.</p>
        </div>
      </div>
    </footer>
  );
}
