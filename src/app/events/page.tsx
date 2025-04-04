import { getPublicEvents } from "@/lib/api";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { EventsHero } from "@/components/events/events-hero";
import { UpcomingEvents } from "@/components/events/upcoming-events";
import { PastEvents } from "@/components/events/past-events";
import { EventCalendar } from "@/components/events/event-calendar";
import { EventRegistration } from "@/components/events/event-registration";

export const metadata = {
  title: "Events | AP Gaming",
  description:
    "Upcoming tournaments, matches, and events for AP Gaming esports teams.",
};

export const revalidate = 3600;

export default async function EventsPage() {
  await getPublicEvents();

  return (
    <>
      <div className="grid-overlay"></div>
      <div className="vignette-overlay"></div>

      <main className="min-h-screen">
        <Navbar />
        <EventsHero />
        <UpcomingEvents />
        <EventCalendar />
        <PastEvents />
        <EventRegistration />
        <Footer />
      </main>
    </>
  );
}
