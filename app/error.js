// app/error.js

'use client'; // Error components must be client-side

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-customBackground text-center">
      <h1 className="text-xl font-bold text-[red] mb-4">Something went wrong</h1>
      <button onClick={() => reset()} className="custom-btn">
        Try again
      </button>
    </div>
  );
}
