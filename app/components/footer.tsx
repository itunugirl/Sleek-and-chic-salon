"use client"; // Ensure this is at the very top of the file

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-customBackground mt-8 text-white py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="mb-2">Email: sleekandchicsalon@gmail.com</p>
          <p className="mb-2">Phone: (234) 904-436-3495</p>
          <p>Address: Ikota GRA, Lekki, Lagos, Nigeria</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">About Us</Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-[blue]">Facebook</Link>
            <Link href="#" className="hover:text-[red]">Instagram</Link>
            <Link href="#" className="hover:text-[skyblue]">Twitter</Link>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Sleek and Chic Unisex Salon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
