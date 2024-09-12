import React from 'react';
import Link from 'next/link';

const HomepageSection: React.FC = () => {
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
    <div>
      {/* First Section */}
      <section className="bg-customBackground w-screen py-8">
        <div
          className="relative w-[90vw] bg-cover bg-center mx-auto rounded-lg shadow-md"
          style={{ backgroundImage: "url('https://i.postimg.cc/2jMDBByr/modern-hair-beauty-salon-with-dark-design-luxury-barbershop-interior-generative-ai-inside-empty-barb.avif')" }}
        >
          <div className="flex items-center justify-center h-[400px] md:h-[500px] lg:h-[600px] mx-auto p-4">
            {/* Overlay and Heading */}
            <div className="bg-white bg-opacity-70 p-6 rounded-lg text-center">
              <h1 className="text-bookNowButton font-sevillana text-lg md:text-2xl lg:text-3xl font-bold">
                Elevating Your Look with Precision, Style, and Care – Where Every Detail Shines
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="bg-section2Bg w-screen py-8">
        <div className="w-[90vw] mx-auto">
          {/* Our Services Heading */}
          <h2 className="text-base md:text-xl sm:text-sm lg:text-lg xl-text-xl font-bold text-center text-gray-800 mb-12">
            Our Services
          </h2>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                {/* Service Image */}
                <div className="w-full h-60 md:h-72 lg:h-80">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Service Writeup */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Title for Returning User / Appointment Section */}
      <section className="bg-white w-screen py-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Manage Your Appointments
        </h2>
        <div className="max-w-[90vw] mx-auto space-y-6">
          {/* Returning User / Login */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Returning User?</h2>
            <p className="text-gray-600">
              If you already have an account, you can <Link href="/login" className="text-blue-600 hover:underline">log in here</Link> to access your previous appointments and book a new one.
            </p>
          </div>

          {/* Appointment Process */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Appointment Write-Up */}
              <div className="space-y-4">
                <h2 className="text-lg font-bold text-gray-800">Schedule Your Appointment</h2>
                <p className="text-gray-600">
                  Book your appointment with ease by following our simple process. Choose from a range of services and proceed with a few easy steps to secure your spot.
                </p>
                <p className="text-gray-600">
                  Whether you're opting for a basic haircut or a luxurious treatment, we’re here to make sure you leave feeling refreshed and satisfied.
                </p>
              </div>

              {/* Service Options */}
              <div className="space-y-4">
                <h2 className="text-lg font-bold text-gray-800 mb-3">Choose Appointment</h2>
                <div className="space-y-4">
                  {/* Basic Services */}
                  <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Basic Services</h3>
                    <p className="text-gray-600 mb-2">
                      Choose from our range of basic services including haircuts, facials, and more.
                    </p>
                    <Link
                  href="/book"
                  className="bg-bookNowButton w-btn-wide text-white text-base py-3 px-4 rounded-custom flex items-center justify-center hover:bg-green-800 transition"
                >
               BOOK NOW
                </Link>
                  </div>

                  {/* Advanced Services */}
                  <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Advanced Services</h3>
                    <p className="text-gray-600 mb-2">
                      Explore our advanced services for a more luxurious experience.
                    </p>
                    <Link
                  href="/book"
                  className="bg-bookNowButton w-btn-wide text-white text-base py-3 px-4 rounded-custom flex items-center justify-center hover:bg-green-800 transition"
                >
               BOOK NOW
                </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Appointment Process Steps */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Appointment Process</h2>
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Step 1: Choose Appointment</h3>
                <p className="text-gray-600">Select your desired service and click "Book Now" to proceed.</p>
              </div>

              {/* Step 2 */}
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Step 2: Your Information</h3>
                <p className="text-gray-600">Provide your personal information to complete your booking.</p>
              </div>

              {/* Step 3 */}
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Step 3: Confirmation</h3>
                <p className="text-gray-600">You'll receive a confirmation email with your appointment details.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomepageSection;
