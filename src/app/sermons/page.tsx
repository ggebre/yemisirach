'use client'
import MiniHeroSection from "@/components/Hero_mini";
import miniheroData from "@/lib/mini_hero_data";
import { sermonType } from "@/lib/types";
import { useState, useEffect} from "react";
import LatestSermon from "@/components/Sermons/sermonLatestCard";
import SermonArchiveSection from "@/components/Sermons/sermonArchiveList";

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
        <SermonArchiveSection archivedSermons={archivedSermons}/>
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