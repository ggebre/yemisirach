import { sermonType } from "@/lib/types";
export default function LatestSermon({title, videoUrl, sermonDate, description, speaker}: sermonType) {
    return (
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-8">
            Latest Message: {title}
          </h2>
          <div className="max-w-4xl mx-auto">
            {/* Video Player */}
            {videoUrl && (
              <div className="relative w-full overflow-hidden rounded-lg shadow-md mb-6" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={videoUrl}
                  title={title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            {/* Sermon Details */}
            <div className="text-center md:text-left">
              <p className="text-lg text-gray-700 mb-2">
                **Speaker:** {speaker} | **Date:** {sermonDate}
              </p>
              <p className="text-md leading-relaxed text-gray-700 mb-6">
                {description}
              </p>  
            </div>
          </div>
        </section>
    )
}