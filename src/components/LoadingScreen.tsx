import React from 'react';

export const LoadingScreen = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-depth">
      <div className="text-center">
        <h1 className="font-playfair text-7xl md:text-9xl font-bold mb-6 text-chaos animate-pulse-slow">
          DRS
        </h1>
        <p className="text-xl md:text-2xl font-inter text-velvet-smoke">
          Loading Experiences...
        </p>
      </div>
    </div>
  );
};
