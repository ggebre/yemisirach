import { minihero } from "@/lib/types";
export default function MiniHeroSection({title, image, description} : minihero ) {
  
    return (
        <section
        className={`relative h-96 bg-contain bg-center bg-no-repeat flex items-center justify-center text-white `}
        style={{ backgroundImage: `url(${image})`}}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg rounded-md">
            {title}
          </h1>
          <p className="mt-2 text-lg md:text-xl drop-shadow-md rounded-md">
            { description }
          </p>
        </div>
      </section>
    )
}