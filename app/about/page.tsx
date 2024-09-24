"use client"; // Ensure this is at the very top of the file

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Nail Technician',
      imageUrl: 'https://i.postimg.cc/xyz123/john.jpg',
      description: 'John has a passion for creating stunning nail art and ensuring clients leave with a smile.',
    },
    {
      name: 'Jane Smith',
      role: 'Barber',
      imageUrl: 'https://i.postimg.cc/xyz123/jane.jpg',
      description: 'Jane specializes in modern cuts and styles, providing personalized experiences for each client.',
    },
    {
      name: 'Emily Johnson',
      role: 'Hair Braider',
      imageUrl: 'https://i.postimg.cc/xyz123/emily.jpg',
      description: 'Emily brings creativity and style to every braid, ensuring quality and elegance.',
    },
    {
      name: 'Michael Brown',
      role: 'Hair Stylist',
      imageUrl: 'https://i.postimg.cc/xyz123/michael.jpg',
      description: 'Michael transforms looks with expert styling and a keen eye for detail.',
    },
  ];

  return (
    <div className="font-sevillana bg-gray-50 py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-xl lg:text-lg xl:text-xl md:text-base font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 mb-6 text-lg">
          We are a dedicated team of beauty professionals passionate about enhancing your natural beauty. Our goal is to provide exceptional services that leave you feeling confident and beautiful.
        </p>
      </div>

      {/* Mission Statement */}
      <div className="max-w-5xl mx-auto mb-10 text-center">
        <h2 className="text-xl lg:text-lg xl:text-xl md:text-base font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-4 text-lg">
          To create a welcoming and empowering environment where every client feels valued and beautiful through quality service and personalized care.
        </p>
      </div>

      {/* Team Members Section */}
      <div className="max-w-5xl mx-auto mb-10">
        <h2 className="text-xl lg:text-lg xl:text-xl md:text-base font-bold text-gray-800 text-center mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 border border-gray-200">
              <div className="relative w-full h-64">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                  onError={(e) => { e.currentTarget.src = 'fallback-image-url.jpg'; }} // Fallback image
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
                <p className="text-gray-500 mt-2">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-5xl mx-auto mb-10 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get In Touch</h2>
        <p className="text-gray-600 mb-4 text-lg">Have any questions or want to book a service? Feel free to reach out to us!</p>
        <div className="flex justify-center">
          <Link href="/contact">
            <button className="custom-btn">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
