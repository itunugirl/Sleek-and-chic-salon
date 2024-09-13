'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className='w-full bg-customBackground'>
      <div className="mx-auto py-4 px-4 sm:px-6 flex items-center justify-between">
        {/* Left side: Logo and Salon Name */}
        <div className="flex items-center space-x-3">
          <div className="pl-8 sm:pl-0"> {/* Added extra padding for small screens */}
            <Image 
              src="/images/sleek-logo.png" 
              alt="Sleek and Chic Logo" 
              width={40} 
              height={40} 
              className="h-10 w-10" 
              priority 
            />
          </div>
          <span className="text-navText font-protestGuerrilla text-xl font-bold">
            SLEEK AND CHIC UNISEX SALON
          </span>
        </div>

        {/* Right side: Navigation Links */}
        <div className="hidden md:flex font-ebGaramond space-x-8 items-center justify-between">
          <Link href="#shop" className="text-navText text-lg hover:text-blue-500 transition">
            Shops
          </Link>
          <Link href="/about" className="text-navText text-lg hover:text-blue-500 transition">
            About
          </Link>
          <Link href="/services" className="text-navText text-lg hover:text-blue-500 transition">
            Services
          </Link>
          <Link href="#contacts" className="text-navText text-lg hover:text-blue-500 transition">
            Contacts
          </Link>
          <Link href="/book" className={"custom-btn"}>
            BOOK NOW
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-navText focus:outline-none"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-stone-600 font-ebGaramond shadow-lg px-8">
          <Link href="#shops" className="block px-4 py-2 text-navText hover:bg-gray-100 transition" onClick={toggleMenu}>
            Shops
          </Link>
          <Link href="#about" className="block px-4 py-2 text-navText hover:bg-gray-100 transition" onClick={toggleMenu}>
            About
          </Link>
          <Link href="#services" className="block px-4 py-2 text-navText hover:bg-gray-100 transition" onClick={toggleMenu}>
            Services
          </Link>
          <Link href="#contacts" className="block px-4 py-2 text-navText hover:bg-gray-100 transition" onClick={toggleMenu}>
            Contacts
          </Link>
          <Link href="/book" className="block px-6 py-3 w-btn-wide text-white bg-black rounded-custom items-center justify-center hover:bg-green-800 transition" onClick={toggleMenu}>
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
