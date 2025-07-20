'use client'
import MiniHeroSection from "@/components/Hero_mini";
import miniheroData from "@/lib/mini_hero_data";
import { sermonType } from "@/lib/types";
import { useState, useEffect, useMemo } from "react";
import LatestSermon from "@/components/Sermons/sermonLatestCard";
import SermonArchiveCard from "@/components/Sermons/sermonArchiveCard";

export default function Sermons() {
    // Dummy data for sermons and series for demonstration
    const [latestSermon, setLatestSermon] = useState({
      _id: "",
      title: "",
      speaker: "",
      sermonDate: "",
      videoUrl: "", 
      description:""
    });
    const [archivedSermons, setArchivedSermons] = useState([{
      _id: "",
      title: "",
      speaker: "",
      sermonDate: "",
      videoUrl: "", 
      description:""
    },])
    // State for filtering and searching
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSpeaker, setFilterSpeaker] = useState('All'); // New state for speaker filter

useEffect(() => {
    const fetchSermons = async () => {
      try {
        const response = await fetch('/api/sermons'); // Call your API route
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const sermons: sermonType[] = await response.json();
        // setLatestSermon(sermons);
        setLatestSermon(sermons[0]);
        // console.log(sermons)
        setArchivedSermons(sermons)
        
      } catch (err: unknown) {
        // setError(err.message);
        console.log(err)
        
      } finally {
        // setLoading(false);
        
      }
    };

    fetchSermons();
  }, []);

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
    // The main container for the Sermon page
    // Assuming Navbar and Footer are handled in _app.js or a global layout
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* I. Hero Section (Specific to Sermons) */}
      <MiniHeroSection 
          title={miniheroData['sermons'].title}
          image={miniheroData['sermons'].image}
          description = { miniheroData['sermons'].description}
          />

      <main className="w-full mx-auto px-4 py-12">

        {/* III. Latest Sermon / Featured Message */}
        <LatestSermon
          _id={latestSermon._id}
          title={latestSermon.title}
          speaker={latestSermon.speaker}
          description={latestSermon.description}
          videoUrl={latestSermon.videoUrl}
          sermonDate={latestSermon.sermonDate}
        />

        {/* IV. Sermon Archive / Browse All Messages */}
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

        {/* VII. Call to Action / Engage Further */}
        <section className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-8">
            Continue Your Journey with Us
          </h2>
          <div className="max-w-3xl mx-auto text-lg leading-relaxed mb-8">
            <p className="mb-4">
              We believe in the power of God&apos;s Word to transform lives. Beyond these messages, we invite you to connect with our community, grow in your faith, and find your place in our church family.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/about" className="inline-block px-8 py-4 bg-yellow-600 text-white font-semibold rounded-full shadow-lg hover:bg-yellow-700 transition duration-300 transform hover:scale-105">
              Join Us This Sunday
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}