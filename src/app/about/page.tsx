import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutHero } from "@/components/about/about-hero";
import { AboutMission } from "@/components/about/about-mission";
import { AboutTimeline } from "@/components/about/about-timeline";
import { AboutTeam } from "@/components/about/about-team";
import { AboutGoals } from "@/components/about/about-goals";
import { AboutSponsors } from "@/components/about/about-sponsors";

export const metadata = {
  title: "About | AP Gaming",
  description: "Learn about AP Gaming, our history, mission, and future goals.",
};

export default function AboutPage() {
  return (
    <>
      {/* Fixed background overlays */}
      <div className="grid-overlay"></div>
      <div className="vignette-overlay"></div>

      <main className="min-h-screen">
        <Navbar />
        <AboutHero />
        <AboutMission />
        <AboutTimeline />
        <AboutTeam />
        <AboutGoals />
        <AboutSponsors />
        <Footer />
      </main>
    </>
  );
}
