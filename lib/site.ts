export const siteConfig = {
  name: 'AdugboHub',
  description:
    'A better-connected neighborhood. Discover local services, stay informed, manage visitors, and connect with your community through AdugboHub.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  apiBaseUrl: process.env.ADUGBOHUB_API_URL ?? 'https://agbajoapi.onrender.com/api',
};

export const navigation = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'For communities', href: '#communities' },
  { label: 'About', href: '#about' },
];
