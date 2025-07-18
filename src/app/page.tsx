import HeroSection from "@/components/Hero";
import GoogleMap from "@/components/GoogleMap";

export default function Home() {
  // Dummy data for featured ministries
  const featuredMinistries = [
    {
      id: 1,
      name: "Youth Ministry",
      description: "A vibrant place for middle and high school students to grow in faith and build lasting friendships.",
      image: "/church_youth_ministry.jpg",
      link: "/youth-ministry" // Link to your actual Youth Ministry page
    },
    {
      id: 2,
      name: "Children's Ministry",
      description: "Providing engaging and safe environments for children to learn about God's love through fun activities.",
      image: "/church_children.jpg",
      link: "#" // Link to your actual Children's Ministry page
    },
    {
      id: 3,
      name: "Community Outreach",
      description: "Extending God's love to our community through service projects, partnerships, and compassionate care.",
      image: "/church_outreach.jpg",
      link: "#" // Link to your actual Outreach page
    }
  ];

  // Dummy data for upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Sunday Worship Service",
      date: "Every Sunday",
      time: "10:00 AM",
      location: "In-person & Online",
      link: "/events" // Link to specific event or main events page
    },
    {
      id: 2,
      title: "Mid-Week Bible Study",
      date: "Wednesdays",
      time: "7:00 PM",
      location: "Church Fellowship Hall",
      link: "/events"
    },
    {
      id: 3,
      title: "Youth Game Night",
      date: "Friday, July 26",
      time: "6:30 PM",
      location: "Youth Hall",
      link: "/youth-ministry"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* II. Hero Section */}
      
      <HeroSection />
      <main className="container mx-auto px-4 py-12">

        {/* III. Welcome / About Us Section (Condensed) */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-6">
            A Place to Belong
          </h2>
          <div className="max-w-3xl mx-auto text-lg leading-relaxed">
            <p className="mb-4">
              Chicago Yemesrach Evangelical Church is a congregation where you can grow in a real relationship with God through faith. More than a religious exercise, faith is a new meaningful life through Jesus Christ that offers you forgiveness, hope, and peace. We are a family of Christ-followers devoted to solid biblical teaching, and expressions of our faith through worship, fellowship, outreach, giving, and serving. No matter where you are in your pursuit of knowing God and how much you are experiencing His love and grace, we invite you to discover what He is doing at Chicago Yemesrach Evangelical Church.
            </p>
            <a
              href="/about" // Link to your About Us page
              className="inline-block mt-6 px-6 py-3 bg-gray-700 text-white font-semibold rounded-full hover:bg-gray-800 transition duration-300"
            >
              Learn More About Us
            </a>
          </div>
        </section>

        {/* IV. Service Times & Location Highlight */}
        <section id="visit-us" className="mb-16 bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-8">
            Join Us This Sunday!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
            <div>
              <p className="text-2xl font-bold text-gray-800 mb-4">
                Sunday Worship Service: <br className="md:hidden"/> 10:00 AM CDT
              </p>
              <p className="text-lg text-gray-700 mb-4">
                **Location:** <br />
                5850 N Elston Ave, Chicago, IL 60646
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://maps.app.goo.gl/F2h7Q23ahrRB8Fri9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-teal-600 text-white font-semibold rounded-full shadow-md hover:bg-teal-700 transition duration-300"
                >
                  Get Directions
                </a>
                <a
                  href="/contact" // Link to your Contact Us page
                  className="inline-block px-6 py-3 border border-teal-600 text-teal-700 font-semibold rounded-full hover:bg-teal-50 transition duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
            {/* Map Placeholder */}
            <GoogleMap />
          </div>
        </section>

        {/* V. Key Ministries / Programs Overview */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-8">
            Grow & Connect Through Ministries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {featuredMinistries.map(ministry => (
              <div key={ministry.id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
                <img src={ministry.image} alt={ministry.name} className="w-full h-48 object-contain" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-indigo-800 mb-2">{ministry.name}</h3>
                  <p className="text-md leading-relaxed text-gray-700 mb-4">{ministry.description}</p>
                  <a
                    href={ministry.link}
                    className="inline-block px-4 py-2 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition duration-300 text-sm"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="#" // Link to your main Ministries page
              className="inline-block px-6 py-3 bg-gray-700 text-white font-semibold rounded-full hover:bg-gray-800 transition duration-300"
            >
              View All Ministries
            </a>
          </div>
        </section>

        {/* VI. Latest Sermons / Messages Highlight */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-8">
            Hear the Latest Message
          </h2>
          <div className="max-w-3xl mx-auto">
            {/* Example: Embed latest sermon video/audio */}
            <div className="relative w-full overflow-hidden rounded-lg shadow-md mb-6" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/your_latest_sermon_id" // Replace with actual YouTube/Vimeo embed URL
                title="Latest Sermon Title"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">The Power of Hope in Challenging Times</h3>
            <p className="text-md text-gray-600 mb-4">Pastor John Doe | June 9, 2025</p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Discover how to find unwavering hope and strength through faith, even when faced with life&apos;s greatest challenges.
            </p>
            <a
              href="/sermons/#sermons" // Link to your Sermons page
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300"
            >
              Watch/Listen to All Sermons
            </a>
          </div>
        </section>

        {/* VII. Upcoming Events / Calendar Preview */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-8">
            What&apos;s Happening Next
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {upcomingEvents.map(event => (
              <div key={event.id} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-indigo-800 mb-2">{event.title}</h3>
                <p className="text-md text-gray-600 mb-1">
                  <i className="far fa-calendar-alt mr-2"></i> {event.date} at {event.time}
                </p>
                <p className="text-md text-gray-600 mb-4">
                  <i className="fas fa-map-marker-alt mr-2"></i> {event.location}
                </p>
                <a
                  href={event.link}
                  className="inline-block px-5 py-2 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition duration-300 text-sm"
                >
                  View Details
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/events" // Link to your main Events page
              className="inline-block px-6 py-3 bg-gray-700 text-white font-semibold rounded-full hover:bg-gray-800 transition duration-300"
            >
              View Full Events Calendar
            </a>
          </div>
        </section>

        {/* VIII. Secondary Call to Action (CTA) Section */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-8">
            Take Your Next Step
          </h2>
          <div className="max-w-4xl mx-auto text-lg leading-relaxed mb-8">
            <p>
              Ready to learn more, get involved, or support our mission? We&apos;re here to help you connect!
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="/giving" // Link to your Giving page
              className="inline-block px-8 py-4 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105"
            >
              Give Online
            </a>
            <a
              href="/events" // Link to your Ministries page
              className="inline-block px-8 py-4 bg-yellow-600 text-white font-semibold rounded-full shadow-lg hover:bg-yellow-700 transition duration-300 transform hover:scale-105"
            >
              Get Involved
            </a>
            <a
              href="/contact" // Link to your Contact Us page
              className="inline-block px-8 py-4 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition duration-300 transform hover:scale-105"
            >
              Contact Us Directly
            </a>
          </div>
        </section>

        {/* IX. Testimonials / Community Stories (Optional) */}
        <section className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-8">
            Stories of Transformation
          </h2>
          <div className="max-w-3xl mx-auto text-lg leading-relaxed">
            <p className="italic mb-6">
              &quot;Joining [Church Name] has transformed my life. The welcoming community and powerful messages have truly helped me grow in my faith.&quot;
              <br /> - John S.
            </p>
            <p className="italic">
              &quot;I found a true sense of belonging and purpose here. The outreach programs allowed me to serve in ways I never imagined.&quot;
              <br /> - Sarah M.
            </p>
            {/* You could add more testimonials or a link to a full stories page */}
            <a href="#" className="inline-block mt-6 text-indigo-600 hover:underline font-semibold">Read More Stories &raquo;</a>
          </div>
        </section>

      </main>
    </div>
  );
}

// const contacts = [
//   { name: 'Taylor', email: 'taylor@mail.com' },
//   { name: 'Alice', email: 'alice@mail.com' },
//   { name: 'Bob', email: 'bob@mail.com' }
// ];