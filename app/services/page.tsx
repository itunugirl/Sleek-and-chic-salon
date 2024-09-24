"use client"; // Ensure this is at the very top of the file

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    <section className="bg-appointBackground font-ebGaramond py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-screen">
      <div className="w-[90vw] mx-auto text-center mb-10">
        {/* Write-Up Section */}
        <div className="mb-10">
          <h2 className="text-lg md:text-xl sm:text-lg lg:text-lg xl:text-xl font-bold text-center text-gray-800 mb-4">
            Discover Our Expert Services
          </h2>
          <p className="text-gray-600 text-center mb-8">
            At our salon, we are committed to providing exceptional beauty services tailored to meet your individual needs. Our talented professionals are here to ensure you look and feel your best. From stunning hair transformations to revitalizing skincare, we offer a wide range of services designed to enhance your natural beauty. Experience a welcoming environment and leave feeling refreshed and renewed.
          </p>
        </div>

        {/* Our Services Heading */}
        <h2 className="text-lg md:text-xl sm:text-lg lg:text-lg xl:text-xl font-bold text-center text-gray-800 mb-12">
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
              <div className="w-full h-60 md:h-72 lg:h-80">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  width={500} // Specify width
                  height={400} // Specify height
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Service Writeup */}
              <div className="p-4 flex flex-col items-center">
                <h3 className="text-base lg:text-lg xl:text-xl md:text-md sm:text-sm font-bold text-gray-800 mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center mb-4">{service.description}</p>

                {/* Centering the BOOK NOW Button */}
                <Link href="/app/book">
                  <button className="custom-btn">
                    BOOK NOW
                  </button>
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
