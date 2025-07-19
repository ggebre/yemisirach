import { eventDataType } from "@/lib/types"
import { urlForImage } from "@/lib/sanityImageUrl";
import FeaturedEventCard from "./featuredEventCard";
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
                <FeaturedEventCard event={event} />
              ))}
            </div>
          </section>
        )}
        </>
    )
}
export default EventsSection;