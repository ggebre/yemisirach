import miniheroData from '@/lib/mini_hero_data';
export default function YouthMinistry() {
    // Dummy data for youth leaders for demonstration
  const youthLeaders = [
    {
      id: 1,
      name: "Sarah Lee",
      title: "Youth Ministry Director",
      image: "https://placehold.co/150x150/ADB9CA/34495E?text=Sarah+L.",
      bio: "Sarah's passion is seeing young people grow in their faith and discover their unique purpose. She loves leading games and deep discussions."
    },
    {
      id: 2,
      name: "Mark Johnson",
      title: "Assistant Youth Leader",
      image: "https://placehold.co/150x150/ADB9CA/34495E?text=Mark+J.",
      bio: "Mark enjoys connecting with students through sports and mentorship. He believes in creating a safe and fun environment for every teen."
    },
    {
      id: 3,
      name: "Emily Davis",
      title: "Small Group Coordinator",
      image: "https://placehold.co/150x150/ADB9CA/34495E?text=Emily+D.",
      bio: "Emily helps facilitate our small group discussions, ensuring every student has a space to share, ask questions, and build strong friendships."
    },
  ];

  // Dummy data for upcoming youth events (can be linked from main events page)
  const youthEvents = [
    {
      id: 1,
      title: "Youth Game Night",
      date: "Friday, July 5, 2025",
      time: "6:30 PM - 9:00 PM",
      location: "Church Youth Hall",
      description: "Join us for an evening of board games, video games, and pizza! Bring your favorite game to share.",
      link: "#" // Link to main events page or specific event detail
    },
    {
      id: 2,
      title: "Summer Outreach Project",
      date: "Saturday, July 13, 2025",
      time: "9:00 AM - 12:00 PM",
      location: "Downtown Community Center",
      description: "We're partnering with a local charity to serve meals and help with facility cleanup. Make a difference!",
      link: "#"
    },
    {
      id: 3,
      title: "Youth Beach Trip",
      date: "Saturday, August 3, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Local Beach (transportation provided)",
      description: "Fun in the sun, swimming, and beach games! Permission slips required.",
      link: "#"
    },
  ];

  return (
    // The main container for the Youth Ministry page
    // Assuming Navbar and Footer are handled in _app.js or a global layout
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/*
        If Navbar and Footer are not in a global layout, uncomment and import them here:
        <Navbar />
      */}

      {/* I. Hero Section (Specific to Youth Ministry) */}
      <section
        className="relative h-96 bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${miniheroData['youth-ministry'].image})` }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
        <div className="relative z-10 text-center p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg rounded-md">
            {/* Youth Ministry: Ignite Your Faith */}
            { miniheroData['youth-ministry'].title}
          </h1>
          <p className="mt-2 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md rounded-md">
            { miniheroData['youth-ministry'].description}
          </p>
          <a
            href="#join-us-section"
            className="inline-block mt-8 px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105"
          >
            Join Us This Week!
          </a>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">

        {/* III. Our Vision & Mission for Youth */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-8">
            Our Purpose for Youth
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-3">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                To equip young people to passionately follow Jesus, build authentic community, and impact their world with God&apos;s love.
              </p>
            </div>
            {/* Vision */}
            <div>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-3">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                To raise up a generation of devoted disciples who are confident in their faith, courageous in their witness, and compassionate in their service.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-3">Core Values</h3>
            <ul className="flex flex-wrap justify-center gap-4 text-lg">
              <li key={"Faith"} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Faith</li>
              <li key={"Community"} className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full">Community</li>
              <li key={"Fun"} className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full">Fun</li>
              <li key={"Service"} className="px-4 py-2 bg-green-100 text-green-800 rounded-full">Service</li>
              <li key={"Growth"} className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full">Growth</li>
            </ul>
          </div>
        </section>

        {/* IV. What We Do / Programs & Activities */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 id="join-us-section" className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-8">
            Our Programs & Activities
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed">
            <div>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-3">Weekly Youth Group</h3>
              <p className="mb-4">
                Join us every **Sunday evening from 6:00 PM - 8:00 PM** in the Youth Hall for a high-energy night of games, worship, an impactful message, and small group discussions. It&apos;s the perfect place to connect with friends and grow in your walk with God.
              </p>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-3">Small Groups</h3>
              <p>
                We believe significant growth happens in smaller communities. Our gender and age-specific small groups meet weekly to dig deeper into the Bible, pray together, and build lasting friendships.
              </p>
              <a href="#" className="inline-block mt-4 text-blue-600 hover:underline font-semibold">Learn More About Small Groups &raquo;</a>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-3">Service & Outreach</h3>
              <p className="mb-4">
                We&apos;re passionate about making a difference in our community and beyond. Throughout the year, we organize various service projects and outreach initiatives where students can put their faith into action.
              </p>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-3">Fun & Fellowship Events</h3>
              <p>
                From epic game nights and movie marathons to exciting off-campus trips and summer camps, we love to create memorable experiences where students can simply have fun and build community.
              </p>
            </div>
          </div>
        </section>

        {/* V. Upcoming Youth Events */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-8">
            Upcoming Youth Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {youthEvents.map(event => (
              <div key={event.id} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-indigo-800 mb-2">{event.title}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  <i className="far fa-calendar-alt mr-1"></i> {event.date} at {event.time}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  <i className="fas fa-map-marker-alt mr-1"></i> {event.location}
                </p>
                <p className="text-md leading-relaxed text-gray-700 line-clamp-3">{event.description}</p>
                <a
                  href={event.link}
                  className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 text-sm"
                >
                  View Details
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="#" className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition duration-300 transform hover:scale-105">
              View All Church Events
            </a>
          </div>
        </section>

        {/* VI. Meet the Youth Leaders */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-8">
            Meet Our Youth Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {youthLeaders.map(leader => (
              <div key={leader.id} className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-indigo-500"
                />
                <h3 className="text-xl font-semibold text-indigo-800">{leader.name}</h3>
                <p className="text-md text-gray-600 mb-2">{leader.title}</p>
                <p className="text-sm leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* VII. Information for Parents */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-8">
            Information for Parents
          </h2>
          <div className="max-w-3xl mx-auto text-lg leading-relaxed grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Safety & Security</h3>
              <p className="mb-4">
                Your student&apos;s safety is our top priority. All our youth leaders undergo thorough background checks and receive regular training. We maintain a secure environment at all events and activities.
              </p>
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Staying Connected</h3>
              <p>
                We keep parents informed through our dedicated youth ministry newsletter, group messaging apps (e.g., Remind, GroupMe), and regular updates on this page.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Registration & Waivers</h3>
              <p className="mb-4">
                For many events, especially off-campus trips, we require parental consent and registration forms. You can find all necessary forms linked with each event or on our main forms page.
              </p>
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Have Questions?</h3>
              <p>
                Don&apos;t hesitate to reach out to our Youth Ministry Director, Sarah Lee, with any questions or concerns.
              </p>
              <a href="mailto:sarah.lee@mychurch.org" className="inline-block mt-4 text-blue-600 hover:underline font-semibold">Email Sarah Lee &raquo;</a>
            </div>
          </div>
        </section>

        {/* VIII. Get Involved / Volunteer */}
        <section className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-8">
            Partner With Us: Volunteer!
          </h2>
          <div className="max-w-3xl mx-auto text-lg leading-relaxed mb-8">
            <p>
              Are you passionate about investing in the next generation? Our Youth Ministry thrives because of dedicated volunteers who give their time, energy, and love to mentor and guide our students. We have various roles, from small group leaders to event chaperones.
            </p>
          </div>
          <a href="#" className="inline-block px-8 py-4 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105">
            Learn About Volunteering
          </a>
        </section>

      </main>

      {/*
        If Navbar and Footer are not in a global layout, uncomment and import them here:
        <Footer />
      */}
    </div>
  );
}