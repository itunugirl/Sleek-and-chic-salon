'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

// Define the LoadingContextProps interface
interface LoadingContextProps {
  loading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
}

// Create LoadingContext with an undefined default value
const LoadingContext = createContext<LoadingContextProps | undefined>(undefined);

// Custom hook to use the LoadingContext
export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

// Define the LoadingProviderProps interface
interface LoadingProviderProps {
  children: ReactNode;
}

// LoadingProvider component
export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname(); // Get the current path

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    // Simulate loading state when the pathname changes
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // Simulating loading time (500ms)

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <LoadingContext.Provider value={{ loading, startLoading: () => setLoading(true), stopLoading: () => setLoading(false) }}>
      {children}
      {loading && <Loading />} {/* Render loading component when loading is true */}
    </LoadingContext.Provider>
  );
};

// Loading component (customize this for your loading screen)
const Loading = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="loader border-t-4 border-b-4 border-[gold] rounded-full w-16 h-16 animate-spin"></div>
    <span className="text-[skyblue] ml-4">Loading...</span>
  </div>
);