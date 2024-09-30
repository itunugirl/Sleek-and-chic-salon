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
          <h2 className="text-lg md:text-xl sm:text-lg lg:text-lg xl:text-xl font-bold text-gray-800 mb-4">
            Discover Our Expert Services
          </h2>
          <p className="text-gray-600 text-center mb-8">
            At our salon, we are committed to providing exceptional beauty services tailored to meet your individual needs. Our talented professionals are here to ensure you look and feel your best. From stunning hair transformations to revitalizing skincare, we offer a wide range of services designed to enhance your natural beauty. Experience a welcoming environment and leave feeling refreshed and renewed.
          </p>
        </div>

        {/* Our Services Heading */}
        <h2 className="text-lg md:text-xl sm:text-lg lg:text-lg xl:text-xl font-bold text-gray-800 mb-12">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="shadow-md rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 flex flex-col"
            >
              {/* Service Image */}
              <div className="w-full h-60 md:h-72 lg:h-80 flex-shrink-0"> {/* Fixed height */}
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  width={500}
                  height={400}
                  className="w-full h-full object-cover" // Maintain aspect ratio
                />
              </div>
              {/* Service Writeup */}
              <div className="p-4 flex flex-col h-full">
                <h3 className="text-base lg:text-lg xl:text-xl md:text-md sm:text-sm font-bold text-gray-800 mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center flex-grow">{service.description}</p>

                {/* Flex container to align button at the bottom */}
                <div className="flex justify-center mt-4">
                  <Link href="/app/book">
                    <button className="custom-btn">
                      BOOK NOW
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Background Section */}
      <div
        className="relative flex items-center justify-center py-16"
        style={{
          backgroundImage: 'url("https://i.postimg.cc/85Jknmzr/goalimage.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-opacity-70 p-8 rounded-lg text-center">
          <h2 className="text-[50px] md:text-2xl font-bold text-white mb-4">
            Schedule a Complimentary <br /> Consultation
          </h2>
          <p className="text-white text-[20px] mb-4">
            Our experts are ready to provide personalized advice and recommendations tailored to your beauty needs.
          </p>
          <div className="flex justify-center">
            <Link href="/app/book">
              <button className="custom-btn hover:bg-gray-700 transition duration-300">
                BOOK NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePageSection;
