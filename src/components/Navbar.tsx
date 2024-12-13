import React from 'react'; 
import { Search, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-stone-700 to-stone-900 bg-clip-text text-transparent">
              Stonepedia
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-stone-900">Home</a>
            <a href="#products" className="text-gray-700 hover:text-stone-900">Products</a>
            <a href="#about" className="text-gray-700 hover:text-stone-900">About</a>
            <a href="#contact" className="text-gray-700 hover:text-stone-900">Contact</a>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Home</a>
            <a href="#products" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Products</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}