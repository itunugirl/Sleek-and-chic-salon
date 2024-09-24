'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    </div>
  );
};

export default ProductsPage;
