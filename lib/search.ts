
export interface SearchItem {
  title: string;
  description: string;
  href: string;
  keywords: string[];
  category: string;
}

export const searchItems: SearchItem[] = [
  {
    title: "Home",
    description:
      "Discover AdugboHub and learn how it connects neighbourhoods, residents and local businesses.",
    href: "/",
    category: "Website",
    keywords: ["home", "welcome", "neighbourhood", "connected", "AdugboHub"],
  },
  {
    title: "Discover",
    description:
      "Explore announcements, neighbourhood conversations, visitor management and community services.",
    href: "/discover",
    category: "Platform",
    keywords: [
      "discover",
      "announcements",
      "notifications",
      "updates",
      "conversations",
      "chat",
      "visitors",
      "SOS",
      "services",
    ],
  },
  {
    title: "Community",
    description:
      "Learn how residents, community managers and businesses connect and participate.",
    href: "/community",
    category: "Community",
    keywords: [
      "community",
      "residents",
      "neighbours",
      "estate",
      "managers",
      "community activities",
      "participation",
    ],
  },
  {
    title: "Local Businesses",
    description:
      "Discover how local shops, service providers and businesses can reach their neighbourhood.",
    href: "/businesses",
    category: "Marketplace",
    keywords: [
      "business",
      "businesses",
      "marketplace",
      "shops",
      "groceries",
      "food",
      "catering",
      "repairs",
      "construction",
      "delivery",
      "local services",
    ],
  },
  {
    title: "How It Works",
    description:
      "Understand how residents, community managers and businesses can use AdugboHub.",
    href: "/how-it-works",
    category: "Getting Started",
    keywords: [
      "how",
      "works",
      "getting started",
      "guide",
      "steps",
      "setup",
      "join",
      "use AdugboHub",
    ],
  },

  // APP DOWNLOAD PAGE
  {
    title: "Download AdugboHub",
    description:
      "Discover the AdugboHub mobile app, explore its features and find out about Android and iOS availability.",
    href: "/download",
    category: "Mobile App",
    keywords: [
      "download",
      "app",
      "mobile app",
      "android",
      "iphone",
      "ios",
      "google play",
      "play store",
      "apple",
      "app store",
      "smartphone",
      "install",
      "get the app",
      "mobile",
      "application",
    ],
  },
  {
    title: "About AdugboHub",
    description:
      "Learn about AdugboHub, its purpose, vision and commitment to connected neighbourhoods.",
    href: "/about",
    category: "Company",
    keywords: [
      "about",
      "company",
      "vision",
      "mission",
      "purpose",
      "story",
    ],
  },
  {
    title: "Contact Us",
    description:
      "Contact AdugboHub for general support, community partnerships and business enquiries.",
    href: "/contact",
    category: "Support",
    keywords: [
      "contact",
      "support",
      "help",
      "email",
      "partnership",
      "enquiries",
    ],
  },
  {
    title: "Frequently Asked Questions",
    description:
      "Find answers about accounts, community membership, visitors, businesses, safety and app availability.",
    href: "/faq",
    category: "Support",
    keywords: [
      "FAQ",
      "FAQs",
      "questions",
      "answers",
      "account",
      "membership",
      "visitor",
      "safety",
      "app",
    ],
  },
  {
    title: "Privacy Policy",
    description:
      "Read about privacy, personal information, data handling and user rights.",
    href: "/privacy",
    category: "Legal",
    keywords: [
      "privacy",
      "personal information",
      "data",
      "protection",
      "security",
      "user rights",
    ],
  },
  {
    title: "Terms of Service",
    description:
      "Read the terms and conditions governing the use of AdugboHub.",
    href: "/terms",
    category: "Legal",
    keywords: [
      "terms",
      "conditions",
      "agreement",
      "rules",
      "responsibilities",
    ],
  },
];

export function searchWebsite(query: string) {
  const words = query
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (!words.length) return [];

  return searchItems
    .map((item) => {
      const searchableText = [
        item.title,
        item.description,
        item.category,
        ...item.keywords,
      ]
        .join(" ")
        .toLowerCase();

      const score = words.reduce((total, word) => {
        if (item.title.toLowerCase().includes(word)) return total + 5;

        if (
          item.keywords.some((keyword) =>
            keyword.toLowerCase().includes(word),
          )
        ) {
          return total + 3;
        }

        if (item.description.toLowerCase().includes(word)) {
          return total + 1;
        }

        if (searchableText.includes(word)) return total + 1;

        return total;
      }, 0);

      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);
}
