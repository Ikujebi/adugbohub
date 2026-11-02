
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about AdugboHub, community membership, visitor management, local businesses, and app availability.",
};

export default function FAQLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
