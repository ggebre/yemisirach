'use client'
import MiniHeroSection from "@/components/Hero_mini";
import miniheroData from "@/lib/mini_hero_data";
import { sermonType } from "@/lib/types";
import { useState, useEffect, useMemo } from "react";

export default function Sermons() {
    // Dummy data for sermons and series for demonstration
    const [latestSermon, setLatestSermon] = useState({
      title: "",
      speaker: "",
      date: "",
      series: "",
      videoUrl: "", 
      audioUrl: "", 
      notesUrl: "",
      description:""
    });
    // State for filtering and searching
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSeries, setFilterSeries] = useState('All');
  const [filterSpeaker, setFilterSpeaker] = useState('All'); // New state for speaker filter


  const sermonSeries = [
    {
      id: 1,
      title: "Building Blocks of Faith",
      speaker: "Pastor John Doe",
      image: "https://placehold.co/400x250/A3C7D6/334E68?text=Series+1",
      description: "A foundational series exploring core Christian beliefs and how to build a strong spiritual life.",
      messagesCount: 5,
      link: "#" // Link to individual series page or filtered archive
    },
    {
      id: 2,
      title: "Living a Purposeful Life",
      speaker: "Sarah Lee",
      image: "https://placehold.co/400x250/C8A2C8/6A326A?text=Series+2",
      description: "Discover God's unique design for your life and practical steps to walk in His purpose every day.",
      messagesCount: 4,
      link: "#"
    },
    {
      id: 3,
      title: "The Art of Worship",
      speaker: "David Chen",
      image: "https://placehold.co/400x250/FFDDC1/E67E22?text=Series+3",
      description: "Explore the depths of worship, beyond songs, into a lifestyle that honors God in every aspect.",
      messagesCount: 3,
      link: "#"
    }
  ];

  const archivedSermons = [
    {
      id: 101,
      title: "Foundations of Hope",
      speaker: "Pastor John Doe",
      date: "May 26, 2025",
      series: "Building Blocks of Faith",
      type: "audio",
      link: "#" // Link to single sermon page
    },
    {
      id: 102,
      title: "Grace in the Everyday",
      speaker: "Sarah Lee",
      date: "May 19, 2025",
      series: "Living a Purposeful Life",
      type: "video",
      link: "#"
    },
    {
      id: 103,
      title: "Prayer: Our Direct Line",
      speaker: "Pastor John Doe",
      date: "May 12, 2025",
      series: "Building Blocks of Faith",
      type: "audio",
      link: "#"
    },
    {
      id: 104,
      title: "Community & Connection",
      speaker: "David Chen",
      date: "May 5, 2025",
      series: "The Art of Worship",
      type: "video",
      link: "#"
    },
    // Add more dummy sermons here
  ];

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

  // Function to handle changes in the series filter dropdown
  const handleSeriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterSeries(e.target.value);
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

      const matchesSeries = filterSeries === 'All' || sermon.series === filterSeries;

      const matchesSpeaker = filterSpeaker === 'All' || sermon.speaker === filterSpeaker; // Apply speaker filter

      return matchesSearch && matchesSeries && matchesSpeaker;
    });
  }, [archivedSermons, searchTerm, filterSeries, filterSpeaker]);

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

      <main className="container mx-auto px-4 py-12">

        {/* III. Latest Sermon / Featured Message */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-8">
            Latest Message: {latestSermon.title}
          </h2>
          <div className="max-w-4xl mx-auto">
            {/* Video Player */}
            {latestSermon.videoUrl && (
              <div className="relative w-full overflow-hidden rounded-lg shadow-md mb-6" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={latestSermon.videoUrl}
                  title={latestSermon.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            {/* Sermon Details */}
            <div className="text-center md:text-left">
              <p className="text-lg text-gray-700 mb-2">
                **Speaker:** {latestSermon.speaker} | **Date:** {latestSermon.date}
              </p>
              {latestSermon.series && (
                <p className="text-md text-gray-600 mb-4">
                  **Series:** <a href="#" className="text-indigo-600 hover:underline">{latestSermon.series}</a>
                </p>
              )}
              <p className="text-md leading-relaxed text-gray-700 mb-6">
                {latestSermon.description}
              </p>  
            </div>
          </div>
        </section>

        {/* V. Sermon Series Overview */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-8">
            Explore Sermon Series
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {sermonSeries.map(series => (
              <div key={series.id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                <img src={series.image} alt={series.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-indigo-800 mb-2">{series.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">By {series.speaker}</p>
                  <p className="text-md leading-relaxed text-gray-700 mb-4">{series.description}</p>
                  <p className="text-sm text-gray-500 mb-4">{series.messagesCount} Messages</p>
                  <a
                    href={series.link}
                    className="inline-block px-4 py-2 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition duration-300 text-sm"
                  >
                    View Series
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

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
              value={filterSeries}
              onChange={handleSeriesChange}
            >
              <option value="All">Filter by Series</option>
              {sermonSeries.map(series => (
                <option key={series.id} value={series.title}>{series.title}</option>
              ))}
            </select>
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
                <div key={sermon.id} className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-800 mb-2">{sermon.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">**Speaker:** {sermon.speaker}</p>
                    <p className="text-sm text-gray-600 mb-1">**Date:** {sermon.date}</p>
                    {sermon.series && (
                      <p className="text-sm text-gray-500 mb-4">**Series:** {sermon.series}</p>
                    )}
                  </div>
                  <div className="mt-4">
                    <a
                      href={sermon.link}
                      className="inline-block px-5 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 text-sm"
                    >
                      {sermon.type === 'video' ? 'Watch Message' : 'Listen Message'}
                    </a>
                  </div>
                </div>
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