import { CTASection } from "@/components/cta-section";
import { FeaturedGames } from "@/components/featured-games";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { TeamShowcase } from "@/components/team-showcase";
import { UpcomingEvents } from "@/components/upcoming-events";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedGames />
      <UpcomingEvents />
      <TeamShowcase />
      <CTASection />
      <Footer />
    </main>
  );
}
