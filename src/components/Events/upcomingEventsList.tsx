'use client'
import { eventDataType } from "@/lib/types";
import CompactEventCard from "./upcomingEventCard";
import { useState } from "react";
import { FC } from "react";

interface EventsSectionProps {
    featuredEvents: eventDataType[];
}
const UpcomingEventsSection: FC<EventsSectionProps> = ({featuredEvents}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('All');

    const categories = ['All', 'Youth', 'Adults', 'Children', 'Outreach', 'Conference']; 
    const filteredEvents = featuredEvents.filter(event => {
    const matchesCategory = filterCategory === 'All' || event.category === filterCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

    return (
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
                <CompactEventCard key={event._id} event={event} />
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
    )
}
export default UpcomingEventsSection;