
import {
  BellRing,
  Building2,
  Clock3,
  HeartHandshake,
  LockKeyhole,
  MessageCircle,
  ShieldCheck,
  ShoppingBag,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";

export const images = {
  hero: "/images/community.jpg",
  community: "/images/ali-mkumbwa-1SAFRlUY0lk-unsplash.jpg",
  announcements: "/images/announcements.jpg",
  chat: "/images/community-chat.jpg",
  marketplace: "/images/local-marketplace.jpg",
  visitors: "/images/visitor-management.jpg",
  management: "/images/community-management.jpg",
  residents: "/images/resident.jpg",
  executives: "/images/exco.jpg",
  artisans: "/images/bricklayer.jpg",

  gallery: [
    "/images/ali-mkumbwa-PxlKOcj0a3Q-unsplash.jpg",
    "/images/babatunde-olajide-jcQdBcW7Tmw-unsplash.jpg",
    "/images/emmanuel-ikwuegbu-_2AlIm-F6pw-unsplash.jpg",
    "/images/fahd-aminu--96tbWkSmLE-unsplash.jpg",
    "/images/malik-buraimoh-EMjpo0YjHPw-unsplash.jpg",
    "/images/ninthgrid-mybgdVT2vkw-unsplash.jpg",
    "/images/nupo-deyon-daniel-67ruAEYmp4c-unsplash.jpg",
    "/images/opeyemi-adisa-cFT_Xq4XyA0-unsplash.jpg",
    "/images/oyemike-princewill-S6j3Cf2dejI-unsplash.jpg",
  ],
};

export const features = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Community Communication",
    description:
      "Give residents a central place to communicate, share updates, participate in discussions and stay connected with their neighbourhood.",
    accent: "purple" as const,
    image: images.chat,
    imageAlt: "Community communication",
  },
  {
    icon: UserRoundCheck,
    number: "02",
    title: "Visitor Management",
    description:
      "Simplify visitor registration, digital gate passes and resident approvals with structured access management.",
    accent: "red" as const,
    image: images.visitors,
    imageAlt: "Visitor management",
  },
  {
    icon: ShoppingBag,
    number: "03",
    title: "Local Marketplace",
    description:
      "Discover neighbourhood businesses, find everyday services and connect local customers with nearby vendors.",
    accent: "purple" as const,
    image: images.marketplace,
    imageAlt: "Local marketplace",
  },
  {
    icon: BellRing,
    number: "04",
    title: "Community Announcements",
    description:
      "Keep important notices, estate updates and community information organised and accessible to the right people.",
    accent: "red" as const,
    image: images.announcements,
    imageAlt: "Community announcements",
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Safety & Emergency Support",
    description:
      "Make community safety coordination more accessible through emergency alerts and organised response workflows.",
    accent: "purple" as const,
    image: images.executives,
    imageAlt: "Community safety and administration",
  },
  {
    icon: Building2,
    number: "06",
    title: "Community Administration",
    description:
      "Bring residents, management teams and community administrators together through structured digital operations.",
    accent: "red" as const,
    image: images.management,
    imageAlt: "Community administration",
  },
];

export const steps = [
  {
    number: "01",
    title: "Create your community",
    description:
      "Set up your estate, neighbourhood or residential community and establish its digital presence.",
  },
  {
    number: "02",
    title: "Bring everyone together",
    description:
      "Invite residents, organise memberships and give authorised members access to relevant services.",
  },
  {
    number: "03",
    title: "Manage everyday activities",
    description:
      "Coordinate communication, visitor access, local commerce and essential community operations.",
  },
];

export const audiences = [
  {
    icon: UsersRound,
    title: "Residents",
    description:
      "Stay informed, communicate with neighbours, manage visitors and access neighbourhood services.",
    image: images.residents,
    imageAlt: "Residents enjoying their community",
  },
  {
    icon: Building2,
    title: "Estate & Community Managers",
    description:
      "Coordinate residents, oversee operations, manage access and organise community administration.",
    image: images.executives,
    imageAlt: "Community management team",
  },
  {
    icon: ShoppingBag,
    title: "Local Businesses",
    description:
      "Connect with nearby customers and make local products and services easier to discover.",
    image: images.artisans,
    imageAlt: "Local service provider",
  },
];

export const values = [
  {
    icon: ShieldCheck,
    title: "Responsible access",
    text: "Structured membership and access management.",
  },
  {
    icon: LockKeyhole,
    title: "Privacy awareness",
    text: "Privacy-conscious community experiences.",
  },
  {
    icon: Clock3,
    title: "Everyday convenience",
    text: "Simpler workflows for daily activities.",
  },
  {
    icon: HeartHandshake,
    title: "Community first",
    text: "Technology designed around people.",
  },
];
