import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TeamHero } from "@/components/teams/team-hero";
import { TeamRoster } from "@/components/teams/team-roster";
import { TeamAchievements } from "@/components/teams/team-achievements";
import { TeamSchedule } from "@/components/teams/team-schedule";
import { TeamLoading } from "@/components/teams/team-loading";
import { TeamList } from "@/components/teams/team-list";
import { Suspense } from "react";

export const metadata = {
  title: "Teams | AP Gaming",
  description: "Meet our competitive esports teams and players at AP Gaming.",
};

export default function TeamsPage() {
  return (
    <>
      {/* Fixed background overlays */}
      <div className="grid-overlay"></div>
      <div className="vignette-overlay"></div>

      <main className="min-h-screen">
        <Navbar />
        <TeamHero />
        <Suspense fallback={<TeamLoading />}>
          <TeamList />
        </Suspense>
        <Footer />
      </main>
    </>
  );
}
