'use client'
import { useState } from "react";
import { useMemo } from "react";
import SermonArchiveCard from "./sermonArchiveCard";
import { sermonType } from "@/lib/types";
import { FC } from "react";

interface MySermonsComponentProps {
  archivedSermons: sermonType[]; // This explicitly states 'archivedSermons' is an array of SermonType
}

const SermonArchiveSection: FC<MySermonsComponentProps> = ({ archivedSermons}) => {
    
    const [searchTerm, setSearchTerm] = useState('');
    const [filterSpeaker, setFilterSpeaker] = useState('All'); // New state for speaker filter

    // Function to handle changes in the speaker filter dropdown
  const handleSpeakerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterSpeaker(e.target.value);
  };

  // Memoize unique speakers to populate the dropdown efficiently
    const uniqueSpeakers = useMemo(() => {
      const speakers = new Set<string>();
      archivedSermons.forEach(sermon => speakers.add(sermon.speaker));
      return ['All', ...Array.from(speakers).sort()]; // Add 'All' option and sort alphabetically
    }, [archivedSermons]);
    
    // Filtered sermons based on search term, series, and speaker
    const filteredSermons = useMemo(() => {
      return archivedSermons.filter(sermon => {
        const matchesSearch = searchTerm === '' ||
                              sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              sermon.speaker.toLowerCase().includes(searchTerm.toLowerCase());
  
        const matchesSpeaker = filterSpeaker === 'All' || sermon.speaker === filterSpeaker; // Apply speaker filter
  
        return matchesSearch && matchesSpeaker;
      });
    }, [archivedSermons, searchTerm, filterSpeaker]);
    return (
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-8">
                Sermon Archive
            </h2>
            {/* Filtering/Sorting */}
            <div className="mb-6 flex flex-col md:flex-row justify-center items-center gap-4">
                <input
                    type="text"
                    placeholder="Search by title or speaker..."
                    className="p-3 border border-gray-300 rounded-lg w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                    className="p-3 border border-gray-300 rounded-lg w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={filterSpeaker}
                    onChange={handleSpeakerChange} // Connect to the new handler
                >
                    <option value="All">Filter by Speaker</option>
                      {uniqueSpeakers.map(speaker => (
                        // Exclude 'All' if it's already the default option
                        speaker !== 'All' && <option key={speaker} value={speaker}>{speaker}</option>
                      ))}
                </select>
            </div>
        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSermons.length > 0 ? (
                    filteredSermons.map(sermon => (
                       
                        <SermonArchiveCard 
                          key={sermon._id}
                          _id={sermon._id}
                          videoUrl={sermon.videoUrl}
                          title={sermon.title}
                          speaker={sermon.speaker}
                          sermonDate={sermon.sermonDate}
                          description={sermon.description}
                        />
                      ))
                    ) : (
                      <p className="text-center text-gray-600 col-span-full">No sermons found matching your criteria.</p>
                    )}
                  </div>
                  {/* Optional: Pagination */}
                  <div className="text-center mt-8">
                    <button className="px-5 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition duration-300">
                      Load More Sermons
                    </button>
                  </div>
                </section>
    )
}

export default SermonArchiveSection;