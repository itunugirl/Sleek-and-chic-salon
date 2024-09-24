'use client';
import React, { useState } from 'react';

const products = [
  { id: 'clippers', name: 'Professional Clippers', price: 35000 },
  { id: 'straightener', name: 'Hair Straightener', price: 30000 },
  { id: 'treatment', name: 'Hair Treatment', price: 5000 },
  { id: 'backpack', name: 'Clippers Kit Backpack', price: 20000 },
  { id: 'curler', name: 'Hair Curler', price: 20000 },
  { id: 'hotcomb', name: 'Hair Hot Comb', price: 15000 },
  { id: 'organoil', name: 'Argan Oil Hair Serum', price: 20000 },
  { id: 'hairshampoo', name: 'Hair Shampoo and Conditioner', price: 25000 },
  { id: 'hairbrush', name: 'Hair Brush', price: 7000 },
];

const OrderPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '', // Added address field
    selectedProducts: {} as Record<string, { quantity: number; isSelected: boolean }>,
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProductSelect = (productId: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedProducts: {
        ...prev.selectedProducts,
        [productId]: {
          quantity: prev.selectedProducts[productId]?.isSelected ? 0 : 1,
          isSelected: !prev.selectedProducts[productId]?.isSelected,
        },
      },
    }));
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    setFormData((prev) => ({
      ...prev,
      selectedProducts: {
        ...prev.selectedProducts,
        [productId]: { ...prev.selectedProducts[productId], quantity: Math.max(1, quantity) },
      },
    }));
  };

  const calculateTotalPrice = () => {
    return Object.entries(formData.selectedProducts).reduce((total, [id, product]) => {
      if (product.isSelected) {
        const productInfo = products.find(p => p.id === id);
        return total + (product.quantity * (productInfo?.price || 0));
      }
      return total;
    }, 0);
  };

  const formatPrice = (amount: number) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const selectedItems = Object.entries(formData.selectedProducts)
      .filter(([, product]) => product.isSelected)
      .map(([id, product]) => ({
        productId: id,
        quantity: product.quantity,
      }));

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Order Submitted:', { ...formData, selectedItems });
      setSuccessMessage('Your order has been placed successfully!');
    } catch (error) {
      console.error('Error submitting order:', error);
      setSuccessMessage('There was an error placing your order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-orderbg w-full min-h-screen py-10 flex items-center justify-center">
      <div className="w-full max-w-[60rem] md:max-w-[40rem] sm:max-w-[30rem] bg-white rounded-lg shadow-2xl p-10 md:p-14 sm:p-6">
        <h1 className="text-xl lg:text-2xl md:text-xl sm:text-lg font-extrabold text-center mb-8 text-gray-900">
          Order Your Favorite Products
        </h1>
        <p className="text-center text-gray-600 mb-10 text-lg lg:text-lg md:text-base sm:text-sm">
          Fill in the details below to place your order and get premium products delivered right to your door.
        </p>

        {successMessage && <div className="text-center text-green-600 mb-4">{successMessage}</div>}

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 mb-2 text-lg lg:text-lg md:text-base sm:text-sm">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-4 lg:p-5 md:p-4 sm:p-2 text-lg lg:text-lg md:text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-bookNowButton transition duration-300 ease-in-out"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 mb-2 text-lg lg:text-lg md:text-base sm:text-sm">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-4 lg:p-5 md:p-4 sm:p-2 text-lg lg:text-lg md:text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-bookNowButton transition duration-300 ease-in-out"
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* Phone Field */}
          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-700 mb-2 text-lg lg:text-lg md:text-base sm:text-sm">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-4 lg:p-5 md:p-4 sm:p-2 text-lg lg:text-lg md:text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-bookNowButton transition duration-300 ease-in-out"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Address Field */}
          <div className="mb-6">
            <label htmlFor="address" className="block text-gray-700 mb-2 text-lg lg:text-lg md:text-base sm:text-sm">
              Home Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-4 lg:p-5 md:p-4 sm:p-2 text-lg lg:text-lg md:text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-bookNowButton transition duration-300 ease-in-out"
              placeholder="Enter your home address"
              required
            />
          </div>

          {/* Product Selection */}
          <div className="mb-6">
            <h2 className="text-lg lg:text-xl md:text-lg sm:text-base text-gray-700 mb-2">Select Products</h2>
            {products.map((product) => (
              <div key={product.id} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={product.id}
                  checked={formData.selectedProducts[product.id]?.isSelected || false}
                  onChange={() => handleProductSelect(product.id)}
                  className="mr-2"
                />
                <label htmlFor={product.id} className="text-gray-700">
                  {product.name} - #{formatPrice(product.price)}
                </label>
                {formData.selectedProducts[product.id]?.isSelected && (
                  <input
                    type="number"
                    min="1"
                    value={formData.selectedProducts[product.id]?.quantity || 1}
                    onChange={(e) => handleQuantityChange(product.id, Math.max(1, Number(e.target.value)))}
                    className="ml-4 border border-gray-300 rounded-lg p-2 text-lg focus:outline-none focus:ring-2 focus:ring-bookNowButton"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Total Price */}
          <div className="mb-6 text-lg font-bold">
            Total Price: #{formatPrice(calculateTotalPrice())}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className={`custom-btn text-lg px-8 py-2 rounded-lg focus:outline-none ${
                loading ? 'bg-gray-400' : 'bg-bookNowButton hover:bg-bookNowButtonHover'
              }`}
              disabled={loading}
            >
              {loading ? 'Placing Order...' : 'Place Order'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderPage;
