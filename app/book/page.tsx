import React from 'react';
import Link from 'next/link';

const AppointmentSection: React.FC = () => {
  return (
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
  );
};

export default AppointmentSection;
