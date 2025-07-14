import { eldersData } from "@/lib/types"
export default function Card({name, position, description, image_url} : eldersData){
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <img
                src={image_url}
                alt={ name}
                className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-indigo-500"
            />
            <h3 className="text-xl font-semibold text-indigo-800">{ name }</h3>
            <p className="text-md text-gray-600 mb-2">{position}</p>
            <p className="text-sm leading-relaxed">
                  {description}
            </p>
        </div>
    )
}