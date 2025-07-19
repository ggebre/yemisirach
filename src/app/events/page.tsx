'use client'
import { useState, useEffect } from "react";
import MiniHeroSection from "@/components/Hero_mini";
import miniheroData from "@/lib/mini_hero_data";
import { eventDataType } from "@/lib/types";
import EventsSection from "@/components/Events/featuredEventsList";
import UpcomingEventsSection from "@/components/Events/upcomingEventsList";
// import Image from "next/image";
export default function Events() {
  
  // const [events, setEvents] = useState<eventDataType[]>([]);
  const [featuredEvents, setFeaturedEvents] = useState<eventDataType[]>([]);
  const [regularEvents, setRegularEvents] = useState<eventDataType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  console.log(loading);
  console.log(error);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events'); // Call your API route
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: eventDataType[] = await response.json();
        // setEvents(data);
        setRegularEvents(data.filter(event => !event.featured))
        setFeaturedEvents(data.filter(event => event.featured))
      } catch (error: unknown) {
        if (error instanceof Error) {
      setError(error.message);
      // You can also check for specific error types if you've thrown custom errors
    } 
   else {
      // Fallback for any other unexpected error type
      setError('unknown error occured!');
    }
        
        
      } finally {
        setLoading(false);
        
      }
    };

    fetchEvents();
  }, []);
  // State for filtering
  console.log(regularEvents);
  console.log(featuredEvents)
  return (
    // The main container for the Events page
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* I. Hero Section (Specific to Events) */}
      <MiniHeroSection 
          title={miniheroData['events'].title}
          image={miniheroData['events'].image}
          description = { miniheroData['events'].description}
          />

      <main className="w-full mx-auto px-4 py-12">

        {/* III. Featured Events / Highlights */}
        <EventsSection featuredEvents={featuredEvents} />

        {/* IV. Events Calendar / Listing */}
        <UpcomingEventsSection featuredEvents={featuredEvents} />

        {/* VII. Call to Action / Submit an Event (Optional) */}
        
        {/* <section className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-8">
            Have an Event to Share?
          </h2>
          <div className="max-w-3xl mx-auto text-lg leading-relaxed mb-8">
            <p>
              If you're a ministry leader or part of a church group with an upcoming event, we'd love to help promote it!
            </p>
          </div>
          <a href="#" className="inline-block px-8 py-4 bg-orange-600 text-white font-semibold rounded-full shadow-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105">
            Submit Your Event
          </a>
        </section> */}

      </main>
    </div>
  );
}