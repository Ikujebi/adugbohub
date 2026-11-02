import type { Metadata } from "next";
import AboutSection from "../components/about-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about AdugboHub and our vision for better-connected neighbourhoods.",
};

export default function AboutPage() {
  return <AboutSection />;
}