
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

const siteUrl = (() => {
  if (!rawSiteUrl) {
    return "http://localhost:3000";
  }

  const normalizedUrl = /^https?:\/\//i.test(rawSiteUrl)
    ? rawSiteUrl
    : `https://${rawSiteUrl}`;

  try {
    return new URL(normalizedUrl).origin;
  } catch {
    return "http://localhost:3000";
  }
})();

export const siteConfig = {
  name: "AdugboHub",
  description:
    "A better-connected neighborhood. Discover local services, stay informed, manage visitors, and connect with your community through AdugboHub.",
  url: siteUrl,
  apiBaseUrl:
    process.env.ADUGBOHUB_API_URL ||
    "https://agbajoapi.onrender.com/api",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Discover", href: "/discover" },
  { label: "Community", href: "/community" },
  { label: "Local Businesses", href: "/businesses" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQs", href: "/faq" },
];

export const socialLinks = {
  facebook: "",
  instagram: "",
  linkedin: "",
};

export const appLinks = {
  android: "",
  ios: "",
};
