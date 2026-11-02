
import HeroSection from "./components/hero-section";
import DiscoverSection from "./components/discover-section";
import CommunitySection from "./components/community-section";
import NeighbourhoodActivity from "./components/neighbourhood-activity";
import MarketplaceSection from "./components/marketplace-section";
import HowItWorks from "./components/how-it-works";
import FAQSection from "./components/faq-section";
import AppDownloadSection from "./components/app-download-section";

export default function Home() {
  return (
    <>

      <main>
        <HeroSection />
        <DiscoverSection />
        <CommunitySection />
        <NeighbourhoodActivity />
        <MarketplaceSection />
        <HowItWorks />
        <AppDownloadSection />
        <FAQSection />
      </main>

 
    </>
  );
}