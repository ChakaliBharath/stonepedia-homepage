import React from 'react';

const products = [
  {
    id: 1,
    name: 'Italian Marble',
    image: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&q=80',
    description: 'Premium Italian marble known for its elegance and durability'
  },
  {
    id: 2,
    name: 'Granite',
    image: 'https://images.unsplash.com/photo-1604715892639-61d265a76bed?auto=format&fit=crop&q=80',
    description: 'High-quality granite perfect for countertops and flooring'
  },
  {
    id: 3,
    name: 'Travertine',
    image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?auto=format&fit=crop&q=80',
    description: 'Natural travertine stone ideal for both indoor and outdoor use'
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our selection of premium natural stones, carefully curated for your projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <button className="mt-4 text-stone-900 font-medium hover:text-stone-700">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}