import { eventDataType } from "@/lib/types"
import { urlForImage } from "@/lib/sanityImageUrl";
import { FC } from "react";

interface EventProps {
    event: eventDataType;
}

const CompactEventCard: FC<EventProps> = ({event}) => {
    return (
        <div key={event._id} className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <img src={urlForImage(event.image).url()} alt={event.title} className="w-full sm:w-32 h-32 object-cover rounded-lg flex-shrink-0" />
            <div className="flex-grow">
                <span className={`text-xs font-semibold px-2 py-1 rounded-full mb-1 ${event.category === 'Youth' ? 'bg-green-200 text-green-800' : event.category === 'Outreach' ? 'bg-blue-200 text-blue-800' : 'bg-purple-200 text-purple-800'}`}>
                        {event.category}
                </span>
                <h3 className="text-xl font-semibold text-indigo-800 mt-1 mb-1">{event.title}</h3>
                <p className="text-sm text-gray-600">
                    <i className="far fa-calendar-alt mr-1"></i> {event.date} at {event.time}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                    <i className="fas fa-map-marker-alt mr-1"></i> {event.location}
                </p>
                <p className="text-md leading-relaxed text-gray-700 line-clamp-2">{event.description}</p>
                    <a
                        href={"#"}
                        className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 text-sm"
                    >
                        View Details
                    </a>
            </div>
        </div>
    )
}

export default CompactEventCard;