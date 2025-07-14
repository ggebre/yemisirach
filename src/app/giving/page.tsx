'use client'
export default function Giving() {
    return (
    // The main container for the Giving page
    // Assuming Navbar and Footer are handled in _app.js or a global layout
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/*
        If Navbar and Footer are not in a global layout, uncomment and import them here:
        <Navbar />
      */}

      {/* I. Hero Section (Specific to Giving) */}
      <section
        className="relative h-96 bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://placehold.co/1920x400/28B463/FFFFFF?text=Your+Generosity+Matters')" }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
        <div className="relative z-10 text-center p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg rounded-md">
            Give Online
          </h1>
          <p className="mt-2 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md rounded-md">
            Your generous giving enables us to fulfill our mission and impact lives in our community and beyond.
          </p>
          <a
            href="#ways-to-give-section"
            className="inline-block mt-8 px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105"
          >
            Start Giving Today
          </a>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">

        {/* III. Why We Give / Impact of Your Giving */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-8">
            The Impact of Your Generosity
          </h2>
          <div className="max-w-4xl mx-auto text-lg leading-relaxed text-center">
            <p className="mb-6">
              At [Church Name], we believe that giving is an act of worship and an essential part of our discipleship. Your tithes and offerings enable us to continue the vital work God has called us to do.
            </p>
            <p className="mb-6 font-semibold text-gray-700">
              "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." (2 Corinthians 9:7)
            </p>
            <p className="mb-6">
              Your financial partnership directly fuels our ministries, outreach efforts, and daily operations. Here's how your giving makes a difference:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                <div className="text-5xl text-blue-600 mb-4">
                  <i className="fas fa-hand-holding-heart"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Local Outreach</h3>
                <p className="text-sm text-gray-700">Supporting food drives, community events, and partnerships that serve the needs of our neighbors.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                <div className="text-5xl text-green-600 mb-4">
                  <i className="fas fa-children"></i>
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Youth & Children's Programs</h3>
                <p className="text-sm text-gray-700">Providing safe, engaging, and faith-filled environments for the next generation to learn and grow.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg shadow-sm">
                <div className="text-5xl text-purple-600 mb-4">
                  <i className="fas fa-globe"></i>
                </div>
                <h3 className="text-xl font-semibold text-purple-800 mb-2">Global Missions</h3>
                <p className="text-sm text-gray-700">Sending missionaries and supporting projects that spread the Gospel and bring hope around the world.</p>
              </div>
            </div>
          </div>
        </section>

        {/* IV. Ways to Give */}
        <section id="ways-to-give-section" className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-8">
            Simple Ways to Give
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">

            {/* Online Giving */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="text-6xl text-indigo-600 mb-4">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3 className="text-2xl font-semibold text-indigo-800 mb-3">Give Online</h3>
              <p className="text-md leading-relaxed text-gray-700 mb-4">
                Our secure online giving platform allows you to make one-time or recurring donations quickly and easily from your computer or mobile device.
              </p>
              <button
                onClick={() => alert("Redirect to secure giving platform!")} // Replace with actual redirect
                className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
              >
                Give Online Now
              </button>
            </div>

            {/* In-Person Giving */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="text-6xl text-indigo-600 mb-4">
                <i className="fas fa-church"></i>
              </div>
              <h3 className="text-2xl font-semibold text-indigo-800 mb-3">In-Person</h3>
              <p className="text-md leading-relaxed text-gray-700 mb-4">
                You can give your tithes and offerings during our weekly worship services, or drop them off at the church office during office hours.
              </p>
              <a
                href="#" // Link to Contact or Service Times page
                className="px-8 py-3 bg-gray-700 text-white font-semibold rounded-full shadow-lg hover:bg-gray-800 transition duration-300 transform hover:scale-105"
              >
                Plan Your Visit
              </a>
            </div>

            {/* Mail-In Giving */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="text-6xl text-indigo-600 mb-4">
                <i className="fas fa-envelope-open-text"></i>
              </div>
              <h3 className="text-2xl font-semibold text-indigo-800 mb-3">Mail Your Gift</h3>
              <p className="text-md leading-relaxed text-gray-700 mb-4">
                You can mail your check or money order to our church office. Please make checks payable to "[Church Name]".
              </p>
              <p className="font-semibold">
                [Church Name] <br />
                123 Main Street <br />
                Anytown, USA 12345
              </p>
            </div>

            {/* Text-to-Give (Optional) */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center col-span-full md:col-span-1 md:col-start-2">
              <div className="text-6xl text-indigo-600 mb-4">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3 className="text-2xl font-semibold text-indigo-800 mb-3">Text-to-Give</h3>
              <p className="text-md leading-relaxed text-gray-700 mb-4">
                Text any amount to our secure giving number to give instantly from your phone.
              </p>
              <p className="text-xl font-bold text-indigo-800">
                Text "[Keyword]" to (123) 456-7890
              </p>
              <p className="text-sm text-gray-500 mt-2">
                (First time users will receive a link to register.)
              </p>
            </div>

          </div>
          <p className="text-center text-sm text-gray-600 mt-10">
            All online transactions are processed securely. Your privacy and financial information are protected.
          </p>
        </section>

        {/* V. FAQ Section (Giving Specific) */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-8">
            Giving FAQs
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {/* FAQ Item 1 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Is my online donation secure?</h3>
              <p className="text-lg text-gray-700">
                Yes, absolutely. Our online giving platform uses industry-standard encryption and security protocols to ensure your financial information is protected and your transaction is secure.
              </p>
            </div>
            {/* FAQ Item 2 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How do I set up recurring giving?</h3>
              <p className="text-lg text-gray-700">
                On our online giving platform, simply select the "Recurring" option and choose your preferred frequency (weekly, bi-weekly, monthly, etc.) before completing your donation. You can manage your recurring gifts at any time through your donor account.
              </p>
            </div>
            {/* FAQ Item 3 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I designate my giving to a specific ministry?</h3>
              <p className="text-lg text-gray-700">
                Yes, our online platform allows you to choose from various funds, such as General Fund, Missions, Youth Ministry, or Building Fund. If you are giving in person or by mail, please clearly indicate your designation on your check or offering envelope.
              </p>
            </div>
            {/* FAQ Item 4 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How will I receive my giving statement?</h3>
              <p className="text-lg text-gray-700">
                Annual giving statements for tax purposes are typically mailed or made available electronically by January 31st of the following year. If you have any questions about your statement, please contact our finance office.
              </p>
            </div>
          </div>
        </section>

        {/* VI. Contact for Giving Questions */}
        <section className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-8">
            Questions About Giving?
          </h2>
          <div className="max-w-3xl mx-auto text-lg leading-relaxed mb-8">
            <p className="mb-4">
              Our finance team is happy to assist you with any inquiries regarding your giving, statements, or other financial matters related to the church.
            </p>
            <p className="font-semibold text-xl mb-4">
              Email: <a href="mailto:giving@mychurch.org" className="text-indigo-600 hover:underline">giving@mychurch.org</a>
            </p>
            <p className="font-semibold text-xl">
              Phone: (123) 456-7890 (ext. [Finance Extension])
            </p>
          </div>
          <a href="#" className="inline-block px-8 py-4 bg-orange-600 text-white font-semibold rounded-full shadow-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105">
            Contact Our Finance Team
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