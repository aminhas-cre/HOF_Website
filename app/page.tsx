import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { CommunityChannels } from "@/components/landing/CommunityChannels";
import { AboutFounder } from "@/components/landing/AboutFounder";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <CommunityChannels />
        <AboutFounder />
        <TrustStrip />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
