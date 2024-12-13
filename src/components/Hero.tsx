import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&q=80"
          alt="Marble texture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover the Beauty of Natural Stone
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Explore our curated collection of premium stones and marble for your architectural masterpieces
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors">
            Explore Collection
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}