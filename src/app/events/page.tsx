'use client'
import { useState, useEffect } from "react";
import MiniHeroSection from "@/components/Hero_mini";
import miniheroData from "@/lib/mini_hero_data";
import { eventDataType } from "@/lib/types";
import Image from "next/image";
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
  const [filterCategory, setFilterCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Youth', 'Adults', 'Children', 'Outreach']; // Define your categories

  const filteredEvents = regularEvents.filter(event => {
    const matchesCategory = filterCategory === 'All' || event.category === filterCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });


  return (
    // The main container for the Events page
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* I. Hero Section (Specific to Events) */}
      <MiniHeroSection 
          title={miniheroData['events'].title}
          image={miniheroData['events'].image}
          description = { miniheroData['events'].description}
          />

      <main className="container mx-auto px-4 py-12">

        {/* III. Featured Events / Highlights */}
        {featuredEvents.length > 0 && (
          <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-8">
              Featured Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {featuredEvents.map(event => (
                <div key={event._id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                  <img src={event.image} alt={event.title} className="w-full md:w-1/2 h-56 md:h-auto object-cover" />
                  <div className="p-6 flex flex-col justify-between md:w-1/2">
                    <div>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${event.category === 'Youth' ? 'bg-green-200 text-green-800' : event.category === 'Outreach' ? 'bg-blue-200 text-blue-800' : 'bg-purple-200 text-purple-800'}`}>
                        {event.category}
                      </span>
                      <h3 className="text-xl font-semibold text-indigo-800 mt-2 mb-1">{event.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        <i className="far fa-calendar-alt mr-1"></i> {event.date} at {event.time}
                      </p>
                      <p className="text-sm text-gray-600 mb-4">
                        <i className="fas fa-map-marker-alt mr-1"></i> {event.location}
                      </p>
                      <p className="text-md leading-relaxed text-gray-700">{event.description}</p>
                    </div>
                    <div className="mt-4">
                      <a
                        href={"#"}
                        className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* IV. Events Calendar / Listing */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-8">
            All Upcoming Events
          </h2>

          {/* Filtering/Sorting */}
          <div className="mb-8 flex flex-col md:flex-row justify-center items-center gap-4">
            <input
              type="text"
              placeholder="Search events..."
              className="p-3 border border-gray-300 rounded-lg w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="p-3 border border-gray-300 rounded-lg w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category} Events</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredEvents.length > 0 ? (
              filteredEvents.map(event => (
                <div key={event._id} className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <img src={event.image} alt={event.title} className="w-full sm:w-32 h-32 object-cover rounded-lg flex-shrink-0" />
                  <div className="flex-grow">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full mb-1 ${event.category === 'Youth' ? 'bg-green-200 text-green-800' : event.category === 'Outreach' ? 'bg-blue-200 text-blue-800' : 'bg-purple-200 text-purple-800'}`}>
                      {event.category}
                    </span>
                    <h3 className="text-xl font-semibold text-indigo-800 mt-1 mb-1">{event.title}</h3>
                    <p className="text-sm text-gray-600">
                      <i className="far fa-calendar-alt mr-1"></i> {event.date} at {event.time}
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      <i className="fas fa-map-marker-alt mr-1"></i> {event.location}
                    </p>
                    <p className="text-md leading-relaxed text-gray-700 line-clamp-2">{event.description}</p>
                    <a
                      href={"#"}
                      className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 text-sm"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">No events found matching your criteria.</p>
            )}
          </div>
          {/* Optional: Pagination or "Load More" button */}
          <div className="text-center mt-8">
            <button className="px-5 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition duration-300">
              Load More Events
            </button>
          </div>
        </section>

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

      {/*
        If Navbar and Footer are not in a global layout, uncomment and import them here:
        <Footer />
      */}
    </div>
  );
}