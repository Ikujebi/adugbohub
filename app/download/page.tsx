
import type { Metadata } from "next";
import AppDownloadSection from "@/app/components/app-download-section";

export const metadata: Metadata = {
  title: "Download the AdugboHub App",
  description:
    "Get AdugboHub on your mobile device. Stay connected to your neighbourhood, discover local businesses and keep up with community updates.",
  openGraph: {
    title: "Download the AdugboHub App",
    description:
      "Your neighbourhood, right in your pocket. Discover AdugboHub.",
  },
};

export default function DownloadPage() {
  return (
    <>
      <AppDownloadSection />
    </>
  );
}
