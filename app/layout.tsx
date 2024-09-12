import React from 'react';
import Navbar from '@components/navbar'; // Adjust the import path as needed
import Head from 'next/head'; // Importing Next.js Head component
import "./globals.css";

export const metadata = {
  title: 'Sleek and Chic Unisex Salon',
  description: 'Experience elegance and style at Sleek and Chic Unisex Salon. Book your appointment today!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
      <div className="main">
            <div className="gradient" />
          </div>
        {/* Navbar at the top */}
        <Navbar />
        
        {/* Page content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
