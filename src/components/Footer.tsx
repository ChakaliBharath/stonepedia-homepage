import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Stonepedia</h3>
            <p className="text-sm">
              Your trusted source for premium natural stones and expert guidance in stone selection.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#products" className="hover:text-white">Products</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Marble</a></li>
              <li><a href="#" className="hover:text-white">Granite</a></li>
              <li><a href="#" className="hover:text-white">Travertine</a></li>
              <li><a href="#" className="hover:text-white">Limestone</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Stonepedia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}