import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our products? We're here to help you choose the perfect stone for your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-stone-500 focus:ring-stone-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-stone-500 focus:ring-stone-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-stone-500 focus:ring-stone-500"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-stone-900 text-white py-3 px-6 rounded-md hover:bg-stone-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-stone-900 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                <p className="mt-1 text-gray-600">info@stonepedia.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="h-6 w-6 text-stone-900 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
                <p className="mt-1 text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-stone-900 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Visit Us</h3>
                <p className="mt-1 text-gray-600">
                  123 Stone Street<br />
                  New York, NY 10001
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}