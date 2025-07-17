'use client';

import NavLinks from "./NavLinks";
import links from "@/lib/links_data";
import Link from "next/link";
import { useState } from "react";
import Hamburger from "./hamburger";
import Image from "next/image";
export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu's open/close status

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    return (
        
    <nav className="bg-blue-500 p-4 shadow-lg rounded-b-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Brand/Logo Section */}
          <Image 
            src={"/church-logo.png"}
            alt="logo"
            className="w-[68px] h-[68px] object-cover" 
            width="100" 
            height="100" />

          {/* Mobile menu button (Hamburger icon) */}
          <Hamburger toggleMenu={toggleMenu} isOpen={isOpen} />
          {/* Desktop Navigation Links */}
          {/* These links are visible on medium and larger screens */}
          <div className="hidden md:flex space-x-6">
            <NavLinks />
          </div>
          
        </div>

        {/* Mobile Menu (conditionally rendered based on 'isOpen' state) */}
        {/* This menu slides down when the hamburger icon is clicked */}
        <div
          className={`md:hidden mt-4 transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className=" flex flex-col space-y-2">
            {/* <NavLinks /> */}
            {
              links.map((link) => (
                <Link 
                    key={link.destination}
                    href={link.destination} 
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out"
                    onClick={() => setIsOpen(false)}
                    > {link.title}</Link>
              ))
            }
          </div>
        </div>
      </nav>
    )
}