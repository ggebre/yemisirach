

export default function HeroSection() {
    return (
    <section
        className="relative h-[calc(100vh-80px)] md:h-[calc(100vh-96px)] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/church-image_3.jpg')" }} // Assumes image is in public folder
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        <div className="relative z-10 text-center p-4">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 drop-shadow-lg rounded-md">
            Welcome to Chicago Yemsrach Evangelical Church
          </h1 >
          <h2 className="text-2xl md:text-2xl font-extrabold leading-tight mb-4 drop-shadow-lg rounded-md amharic-font">
            እንኳን ወደ ቤተ ክርስቲያናችን በደህና መጡ
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto drop-shadow-md rounded-md">
            Connecting hearts, building faith, and serving together for a brighter future.
          </p>
          <a
            href="#visit-us"
            className="inline-block mt-8 px-8 py-4 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Plan Your Visit
          </a>
        </div>
      </section>
    )
}