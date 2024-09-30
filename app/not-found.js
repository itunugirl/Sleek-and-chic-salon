// app/not-found.js

import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-customBackground text-center">
      {/* Use the external image link */}
      <Image 
        src="https://i.postimg.cc/kX17vST3/Png-Item-5616784.png" // Direct link to the image
        alt="Page Not Found"
        width={700} // Adjust the width as needed
        height={300} // Adjust the height as needed
        className="mb-2" // Adjust the bottom margin to reduce space
      />
      <h1 className="text-xl font-bold text-navText mb-2">Oops! Page Not Found</h1> {/* Reduce the margin below the heading */}
      <p className="text-lg text-[red] mb-2">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className="custom-btn">
        Back to Home
      </Link>
    </div>
  );
}
