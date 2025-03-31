import { getPublicEvent } from "@/lib/api";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { EventSignupForm } from "@/components/events/event-signup-form";
import Image from "next/image";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

export const revalidate = 3600; // Revalidate this page every hour

interface EventPageProps {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function EventPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: any;
}) {
  const paramProps = await params;
  const searchProps = await searchParams;

  const response = await getPublicEvent(paramProps.id);

  if (!response) {
    notFound();
  }

  const event = response;

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  // Format time for display
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      {/* Fixed background overlays */}
      <div className="grid-overlay"></div>
      <div className="vignette-overlay"></div>

      <main className="min-h-screen">
        <Navbar />

        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                  {event.title}
                </h1>

                {event.imageUrl && (
                  <div className="aspect-video relative mb-8 rounded-lg overflow-hidden gaming-card">
                    <Image
                      src={event.imageUrl || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="gaming-card p-6 mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <div className="bg-ap-pink/20 p-3 rounded-full mr-4">
                      <Calendar className="h-6 w-6 text-ap-pink" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Date</p>
                      <p className="font-medium text-white">
                        {formatDate(event.date)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-ap-pink/20 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-ap-pink" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Time</p>
                      <p className="font-medium text-white">
                        {formatTime(event.date)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-ap-pink/20 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-ap-pink" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="font-medium text-white">
                        {event.location || "Online"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="gaming-card p-6">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    About This Event
                  </h2>
                  <div
                    className="prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: event.description }}
                  />
                </div>
              </div>

              <div className="lg:col-span-1">
                <EventSignupForm eventId={event.id} eventTitle={event.title} />

                <div className="mt-8 gaming-card p-6">
                  <h3 className="text-xl font-bold mb-4 text-white">
                    Event Details
                  </h3>
                  <ul className="space-y-4">
                    {event.game && (
                      <li className="flex items-start">
                        <div className="bg-ap-pink/20 p-2 rounded-full mr-3">
                          <svg
                            className="h-4 w-4 text-ap-pink"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Game</p>
                          <p className="font-medium text-white">{event.game}</p>
                        </div>
                      </li>
                    )}

                    {event.type && (
                      <li className="flex items-start">
                        <div className="bg-ap-pink/20 p-2 rounded-full mr-3">
                          <svg
                            className="h-4 w-4 text-ap-pink"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Event Type</p>
                          <p className="font-medium text-white">{event.type}</p>
                        </div>
                      </li>
                    )}

                    <li className="flex items-start">
                      <div className="bg-ap-pink/20 p-2 rounded-full mr-3">
                        <Users className="h-4 w-4 text-ap-pink" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Registration</p>
                        <p className="font-medium text-white">
                          Open to All Students
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
