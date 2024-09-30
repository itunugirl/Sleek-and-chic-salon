'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLoading } from '../context/LoadingContext'; // Adjust the import path as necessary

const initialProducts = [
  {
    name: 'Professional Clippers',
    imageUrl: 'https://i.postimg.cc/pXtWMCJj/rechargeable-hair-clipper.jpg',
    description: 'Precision-engineered clippers for the perfect haircut, every time.',
    price: 35000,
    gender: 'male', // Added gender property
  },
  {
    name: 'Hair Straightener',
    imageUrl: 'https://i.postimg.cc/j5zVGxX3/straightener.jpg',
    description: 'Salon-quality hair straightener to achieve sleek, smooth hair.',
    price: 30000,
    gender: 'female', // Added gender property
  },
  {
    name: 'TCB Hair Treatment',
    imageUrl: 'https://i.postimg.cc/Rh2RmbrW/tcb.jpg',
    description: 'Deep hair treatment to repair and rejuvenate damaged hair.',
    price: 5000,
    gender: 'unisex', // Added gender property
  },
  {
    name: 'Clippers Kit Backpack',
    imageUrl: 'https://i.postimg.cc/qBDq43WL/bag.jpg',
    description: 'Portable kit backpack containing all essential barber tools.',
    price: 20000,
    gender: 'male', // Added gender property
  },
  {
    name: 'Hair Curler',
    imageUrl: 'https://i.postimg.cc/fLbSf9Q6/curer.jpg',
    description: 'Create flawless curls and waves with this professional hair curler.',
    price: 20000,
    gender: 'female', // Added gender property
  },
  {
    name: 'Hair Hot Comb',
    imageUrl: 'https://i.postimg.cc/8krJ9zHL/hair-comb.jpg',
    description: 'Heat styling tool for smooth, frizz-free straightening.',
    price: 15000,
    gender: 'unisex', // Added gender property
  },
  {
    name: 'Argan Oil Hair Serum',
    imageUrl: 'https://i.postimg.cc/RZPZqkdM/argan-oil-serum.jpg',
    description: 'Nourishing serum that repairs and revitalizes your hair with the richness of argan oil.',
    price: 20000,
    gender: 'unisex', // Added gender property
  },
  {
    name: 'Hair Shampoo and Conditioner',
    imageUrl: 'https://i.postimg.cc/13VjN6cf/conditional.jpg',
    description: 'Strengthen your hair with this keratin-infused shampoo for silky, smooth hair.',
    price: 25000,
    gender: 'unisex', // Added gender property
  },
];

const moreProducts = [
  {
    name: 'Hair Brush',
    imageUrl: 'https://i.postimg.cc/fbGZ9D9h/hair-brush.jpg',
    description: 'A soft bristle brush to detangle and smooth your hair effortlessly.',
    price: 7000,
    gender: 'unisex', // Added gender property
  },
];

const ProductsPage: React.FC = () => {
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    const loadData = async () => {
      startLoading(); // Start loading when the effect runs
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a delay
      stopLoading(); // Stop loading after the operation completes
    };

    loadData();
  }, [startLoading, stopLoading]);

  const [showMore, setShowMore] = useState(false);
  const [genderFilter, setGenderFilter] = useState('all'); // State to manage filter

  const handleShowMore = () => {
    setShowMore(true);
  };

  const formatPrice = (amount: number) => {
    return `#${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  };

  // Filter products based on the selected gender
  const filteredProducts = initialProducts.filter((product) => {
    if (genderFilter === 'all') return true; // Show all products if "all" is selected
    return product.gender === genderFilter; // Filter based on gender
  });

  return (
    <div className="bg-stone600 font-ebGaramond py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-screen">
      {/* Page Header */}
      <div className="w-[90vw] mx-auto text-center mb-10">
        <h1 className="text-lg md:text-xl sm:text-lg lg:text-lg xl:text-xl font-bold text-center text-gray-100 mb-4">
          Our Products
        </h1>
        <p className="text-gray-300 text-base xl:text-xl lg:text-lg mt-2">
          Browse through our premium products designed to pamper your hair and enhance your style.
        </p>
      </div>

      {/* Gender Filter Buttons */}
      <div className="flex justify-center mb-6">
        <button onClick={() => setGenderFilter('all')} className={`py-2 px-4 rounded-lg ${genderFilter === 'all' ? 'bg-gray-700 text-white' : 'bg-gray-600 text-gray-300 hover:bg-gray-500'}`}>
          All
        </button>
        <button onClick={() => setGenderFilter('male')} className={`py-2 px-4 rounded-lg ${genderFilter === 'male' ? 'bg-gray-700 text-white' : 'bg-gray-600 text-gray-300 hover:bg-gray-500'}`}>
          Male
        </button>
        <button onClick={() => setGenderFilter('female')} className={`py-2 px-4 rounded-lg ${genderFilter === 'female' ? 'bg-gray-700 text-white' : 'bg-gray-600 text-gray-300 hover:bg-gray-500'}`}>
          Female
        </button>
        <button onClick={() => setGenderFilter('unisex')} className={`py-2 px-4 rounded-lg ${genderFilter === 'unisex' ? 'bg-gray-700 text-white' : 'bg-gray-600 text-gray-300 hover:bg-gray-500'}`}>
          Unisex
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="bg-gray-800 shadow-md rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 flex flex-col"
          >
            {/* Product Image */}
            <div className="w-full h-60 md:h-72 lg:h-80 flex-shrink-0">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={500}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="p-4 flex flex-col items-center flex-grow">
              <h3 className="text-base lg:text-lg xl:text-xl md:text-md sm:text-sm font-bold text-gray-100 mb-2 text-center">{product.name}</h3>
              <p className="text-gray-400 text-center mb-4 flex-grow">{product.description}</p>
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
              className="bg-gray-800 shadow-md rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 flex flex-col"
            >
              {/* Product Image */}
              <div className="w-full h-60 md:h-72 lg:h-80 flex-shrink-0">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="p-4 flex flex-col items-center flex-grow">
                <h3 className="text-base lg:text-lg xl:text-xl md:text-md sm:text-sm font-bold text-gray-100 mb-2 text-center">{product.name}</h3>
                <p className="text-gray-400 text-center mb-4 flex-grow">{product.description}</p>
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
    </div>
  );
};

export default ProductsPage;
