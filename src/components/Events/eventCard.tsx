import { eventDataType } from "@/lib/types"
import { urlForImage } from "@/lib/sanityImageUrl";
import { FC } from "react";

interface EventsSectionProps {
    featuredEvents: eventDataType[];
}
const EventsSection: FC<EventsSectionProps> = ({featuredEvents}) => {
    return (
        <>
        {featuredEvents.length > 0 && (
          <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-8">
              Featured Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {featuredEvents.map(event => (
                <div key={event._id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                  <img src={ urlForImage(event.image).url()} alt={event.title} className="w-full md:w-1/2 h-56 md:h-auto object-cover" />
                  <div className="p-6 flex flex-col justify-between md:w-1/2">
                    <div>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${event.category === 'Youth' ? 'bg-green-200 text-green-800' : event.category === 'Outreach' ? 'bg-blue-200 text-blue-800' : 'bg-purple-200 text-purple-800'}`}>
                        {event.category}
                      </span>
                      <h3 className="text-xl font-semibold text-indigo-800 mt-2 mb-1">{event.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        <i className="far fa-calendar-alt mr-1"></i> {event.date} at {event.time}
                      </p>
                      <p className="text-sm text-gray-600 mb-4">
                        <i className="fas fa-map-marker-alt mr-1"></i> {event.location}
                      </p>
                      <p className="text-md leading-relaxed text-gray-700">{event.description}</p>
                    </div>
                    <div className="mt-4">
                      <a
                        href={"#"}
                        className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        </>
    )
}
export default EventsSection;