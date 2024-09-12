"use client"; // Ensure this is at the very top of the file

import React from 'react';
import Link from 'next/link'; // Correct import path for Link
import Image from 'next/image'; // Import Image from Next.js for optimized image handling

const ServicePageSection: React.FC = () => {
  const services = [
    {
      imageUrl: 'https://i.postimg.cc/vZ72wM5X/IMG-4439.jpg',
      title: 'Hair Styling',
      description: 'Expert haircuts, styling, and treatments to elevate your look and boost your confidence.',
    },
    {
      imageUrl: 'https://i.postimg.cc/vmBKrk6z/facial.webp',
      title: 'Facial Treatments',
      description: 'Rejuvenating facial treatments that leave your skin feeling refreshed and glowing.',
    },
    {
      imageUrl: 'https://i.postimg.cc/Y9CsxVGR/IMG-4440-removebg-preview.png',
      title: 'Wig Installation',
      description: 'Professional wig installation services for a seamless and natural look.',
    },
    {
      imageUrl: 'https://i.postimg.cc/tCFGJKhn/IMG-4428.jpg',
      title: 'Nail Tech',
      description: 'Professional nail services that offer artistic nail designs, manicures, and pedicures.',
    },
    {
      imageUrl: 'https://i.postimg.cc/j2NmWfJY/pedicure-2.webp',
      title: 'Pedicure & Manicure',
      description: 'Complete hand and foot care to ensure your nails and skin are healthy and beautiful.',
    },
    {
      imageUrl: 'https://i.postimg.cc/hjYp1Gq4/IMG-4437.jpg',
      title: 'Hair Weaving',
      description: 'High-quality hair extensions and weaving techniques to give you a fuller, natural look.',
    },
  ];

  return (
    <section className="bg-section2Bg w-screen py-8">
      <div className="w-[90vw] mx-auto">
        {/* Our Services Heading */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
            >
              {/* Service Image */}
              <div className="w-full h-60 md:h-72 lg:h-80 relative">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Service Writeup */}
              <div className="p-4 flex flex-col items-center">
                <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center mb-4">{service.description}</p>

                {/* BOOK NOW Button */}
                <Link href="/book">
                  <a className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300">
                    BOOK NOW
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePageSection;
