import { Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TeamDetail } from "@/components/teams/team-detail";
import { TeamDetailLoading } from "@/components/teams/team-detail-loading";
import { getTeamById } from "@/lib/api";
import { notFound } from "next/navigation";

interface TeamPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: TeamPageProps) {
  try {
    const paramProps = await params;
    const team = await getTeamById(paramProps.id);
    return {
      title: `${team.name} | AP Gaming`,
      description: `Learn about the ${team.name} team at AP Gaming.`,
    };
  } catch (error) {
    return {
      title: "Team | AP Gaming",
      description: "Learn about our esports teams at AP Gaming.",
    };
  }
}

export default async function TeamPage({ params }: TeamPageProps) {
  const paramProps = await params;
  return (
    <>
      <div className="grid-overlay"></div>
      <div className="vignette-overlay"></div>

      <main className="min-h-screen">
        <Navbar />
        <Suspense fallback={<TeamDetailLoading />}>
          <TeamDetailWrapper id={paramProps.id} />
        </Suspense>
        <Footer />
      </main>
    </>
  );
}

async function TeamDetailWrapper({ id }: { id: string }) {
  try {
    const team = await getTeamById(id);
    return <TeamDetail team={team} />;
  } catch (error) {
    notFound();
  }
}
