'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Book from '@app/book/page';
import Products from '@app/products/page';
import OrderPage from 'app/order/page';
import Subscriptions from 'app/subscriptions/page'

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

    const initialProducts = [
        {
            name: 'Professional Clippers',
            imageUrl: 'https://i.postimg.cc/pXtWMCJj/rechargeable-hair-clipper.jpg',
            description: 'Precision-engineered clippers for the perfect haircut, every time.',
            price: 35000,
        },
        {
            name: 'Hair Straightener',
            imageUrl: 'https://i.postimg.cc/j5zVGxX3/straightener.jpg',
            description: 'Salon-quality hair straightener to achieve sleek, smooth hair.',
            price: 30000,
        },
        {
            name: 'TCB Hair Treatment',
            imageUrl: 'https://i.postimg.cc/Rh2RmbrW/tcb.jpg',
            description: 'Deep hair treatment to repair and rejuvenate damaged hair.',
            price: 5000,
        },
        {
            name: 'Clippers Kit Backpack',
            imageUrl: 'https://i.postimg.cc/qBDq43WL/bag.jpg',
            description: 'Portable kit backpack containing all essential barber tools.',
            price: 20000,
        },
        {
            name: 'Hair Curler',
            imageUrl: 'https://i.postimg.cc/fLbSf9Q6/curer.jpg',
            description: 'Create flawless curls and waves with this professional hair curler.',
            price: 20000,
        },
        {
            name: 'Hair Hot Comb',
            imageUrl: 'https://i.postimg.cc/8krJ9zHL/hair-comb.jpg',
            description: 'Heat styling tool for smooth, frizz-free straightening.',
            price: 15000,
        },
    ];

    const moreProducts = [
        {
            name: 'Argan Oil Hair Serum',
            imageUrl: 'https://i.postimg.cc/RZPZqkdM/argan-oil-serum.jpg',
            description: 'Nourishing serum that repairs and revitalizes your hair with the richness of argan oil.',
            price: 20000,
        },
        {
            name: 'Hair Shampoo and Conditioner',
            imageUrl: 'https://i.postimg.cc/13VjN6cf/conditional.jpg',
            description: 'Strengthen your hair with this keratin-infused shampoo for silky, smooth hair.',
            price: 25000,
        },
        {
            name: 'Hair Brush',
            imageUrl: 'https://i.postimg.cc/fbGZ9D9h/hair-brush.jpg',
            description: 'A soft bristle brush to detangle and smooth your hair effortlessly.',
            price: 7000,
        },
    ];

    const ProductsPage: React.FC = () => {
        const [showMore, setShowMore] = useState(false);

        const handleShowMore = () => {
            setShowMore(true);
        };

        const formatPrice = (amount: number) => {
            return `#${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
        };

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
                <section className="bg-appointBackground py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-screen">
                    <div className="w-[90vw] mx-auto text-center mb-10">
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
                                            width={500} // Specify width
                                            height={400} // Specify height
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
                <Book />

                {/* Products Section */}
                <section className="bg-stone600 py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-screen">
      {/* Page Header */}
      <div className="w-[90vw] mx-auto text-center mb-10">
        <h1 className="text-lg md:text-xl sm:text-lg lg:text-lg xl:text-xl font-bold text-center text-gray-100 mb-4">
          Our Products
        </h1>
        <p className="text-gray-300 text-base xl:text-xl lg:text-lg mt-2">
          Browse through our premium products designed to pamper your hair and enhance your style.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {initialProducts.map((product, index) => (
          <div
            key={index}
            className="bg-gray-800 shadow-md rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
          >
            {/* Product Image */}
            <div className="w-full h-60 md:h-72 lg:h-80">
              <Image
                src={product.imageUrl || 'fallback-image-url.jpg'}
                alt={product.name}
                width={500} // Specify width
                height={400} // Specify height
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-base lg:text-lg xl:text-xl md:text-md sm:text-sm font-bold text-gray-100 mb-2 text-center">{product.name}</h3>
              <p className="text-gray-400 text-center mb-4">{product.description}</p>
              <div className="text-lg font-bold text-gray-100">{formatPrice(product.price)}</div>
              <Link href="/app/order">
                <button className="bg-gray-700 text-white py-2 px-4 rounded-lg mt-4 hover:bg-gray-600">
                  ORDER NOW
                </button>
              </Link>
            </div>
          </div>
        ))}

        {/* Conditional Rendering for More Products */}
        {showMore &&
          moreProducts.map((product, index) => (
            <div
              key={index}
              className="bg-gray-800 shadow-md rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
            >
              {/* Product Image */}
              <div className="w-full h-60 md:h-72 lg:h-80">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={500} // Specify width
                  height={400} // Specify height
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="p-4 flex flex-col items-center">
                <h3 className="text-base lg:text-lg xl:text-xl md:text-md sm:text-sm font-bold text-gray-100 mb-2 text-center">{product.name}</h3>
                <p className="text-gray-400 text-center mb-4">{product.description}</p>
                <div className="text-lg font-bold text-gray-100">{formatPrice(product.price)}</div>
                <Link href="/app/order">
                  <button className="bg-gray-700 text-white py-2 px-4 rounded-lg mt-4 hover:bg-gray-600">
                    ORDER NOW
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>

      {/* See More Button */}
      {!showMore && (
        <div className="flex mt-10 justify-center">
          <button
            onClick={handleShowMore}
            className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
          >
            See More
          </button>
        </div>
      )}
                </section>

                {/* Order Section */}
                <OrderPage />
                
                {/* sunscription Section */}
                <Subscriptions />

                {/* about section */}
                <section className="font-mono flex flex-col-reverse md:flex-row items-center bg-section2Bg py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      {/* Image on the left */}
      <div className="flex-shrink-0 w-full md:w-1/2 mb-4 md:mb-0">
        <Image
          src="https://i.postimg.cc/13xq7ntT/goalimage.png" // Update with the correct image URL
          alt="About Us"
          width={600} // Specify the width you want
          height={450} // Specify the height you want
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Text on the right */}
      <div className="w-full md:w-1/2 md:pl-8">
        <h2 className="text-[50px] font-bold text-gray-800 mb-4">About <br />Our <br /> Company</h2>
        <p className="text-gray-600 mb-4">
          We are a dedicated team of beauty professionals passionate about enhancing your natural beauty. Our goal is to provide exceptional services that leave you feeling confident and beautiful.
        </p>
        <p className="text-gray-600">
          With years of experience and a commitment to quality, we strive to create a welcoming and empowering environment for every client. Join us on a journey to explore your beauty!
        </p>
        <Link href="/app/about">
                  <button className="learnmore-btn mt-4">
                    Learn More
                  </button>
                </Link>
      </div>
    </section>
            </div>
        );
    };

    return <ProductsPage />;
};

export default HomepageSection;
