import { sermonType } from "@/lib/types"
export default function SermonArchiveCard({title, speaker, videoUrl, description, sermonDate}: sermonType) {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col justify-between">
            <div>
                <h3 className="text-xl font-semibold text-indigo-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 mb-1">**Speaker:** {speaker}</p>
            </div>
            <p className="text-md leading-relaxed text-gray-700 mb-6">
                {description}
            </p> 
            <p className="text-md leading-relaxed text-gray-700 mb-6">
                Date: {sermonDate}
              </p> 
            <div className="mt-4">
                <a
                    href={videoUrl}
                    className="inline-block px-5 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 text-sm"
                >
                    Watch Message
                </a>
                </div>
        </div>
    )
}