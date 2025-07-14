
import links from "@/lib/links_data";
import Link from "next/link";
export default function NavLinks(){
    return (
        <>
            {links.map((link) => (
                    <Link 
                        key={link.destination}
                        href={link.destination}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out"
                        >
                            {link.title}
                        </Link>
            ))}
        </>
    )
}