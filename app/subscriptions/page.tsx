'use client';

import React from 'react';
import Link from 'next/link';

// Define the type for a Subscription Plan
interface SubscriptionPlan {
  name: string;
  price: number;
  description: string;
  features: string[];
}

// Array of subscription plans with basic, gold, and premium options
const subscriptionPlans: SubscriptionPlan[] = [
  {
    name: 'Basic Subscription',
    price: 20000,
    description:
      'Basic hair styling that doesn’t include attaching anything, barbing, and carving for three months.',
    features: [
      'Basic hair styling (no attachments)',
      'Barbing and carving',
      'Three months access',
    ],
  },
  {
    name: 'Gold Subscription',
    price: 80000,
    description:
      'Includes styling of dread, fixing of nails, Ghana weaving, braids, wig styling, pedicure and manicure, facials, and hair treatment for three months.',
    features: [
      'Dread styling',
      'Nail fixing',
      'Ghana weaving, braids',
      'Wig styling',
      'Pedicure and manicure',
      'Facials',
      'Hair treatment',
      'Three months access',
    ],
  },
  {
    name: 'Premium Subscription',
    price: 100000,
    description:
      'All services, including fixing and styling dread, tints, and other complicated styles for three months.',
    features: [
      'Fixing and styling dread',
      'Tints and complex hairstyles',
      'All basic and gold services included',
      'Three months access',
    ],
  },
];

// Utility function to format price in # with commas
const formatPrice = (amount: number): string => {
  return `#${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};

const SubscriptionsPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-700 py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-screen">
      {/* Page Header */}
      <div className="w-[90vw] mx-auto text-center mb-10">
        <h1 className="text-lg md:text-[3xl] lg:text-lg xl:text-xl sm:text-base font-extrabold text-center text-cream mb-6">
          Choose Your Perfect Subscription
        </h1>
        <p className="text-cream text-lg xl:text-xl lg:text-lg mt-2">
          Enjoy premium beauty services tailored to your styling needs over three months. Choose a plan that works best for you.
        </p>
      </div>

      {/* Subscription Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {subscriptionPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-cream bg-darkGradient shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="p-6 flex flex-col items-center">
              {/* Plan Name */}
              <h2 className="text-lg lg:text-xl font-bold text-center text-gray-800 mb-4">{plan.name}</h2>

              {/* Plan Description */}
              <p className="text-gray-600 text-center mb-6">{plan.description}</p>

              {/* Price */}
              <div className="text-center text-2xl font-extrabold text-[gold] mb-6">{formatPrice(plan.price)}</div>

              {/* Features List */}
              <ul className="text-gray-700 mb-6 list-disc list-inside text-center">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="mb-2">{feature}</li>
                ))}
              </ul>

              {/* Sign Up Button */}
              <Link href="/app/subscriptions">
                <button className="signup-btn">
                  SIGN UP
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionsPage;

