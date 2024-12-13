import React from 'react';
import { Shield, Award, Clock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Premium Quality',
    description: 'We source only the finest natural stones from renowned quarries worldwide'
  },
  {
    icon: Award,
    title: 'Expert Selection',
    description: 'Our team of experts carefully curates each stone for superior quality'
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'We ensure prompt delivery and professional installation services'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Stonepedia</h2>
            <p className="text-gray-600 mb-8">
              With over two decades of experience in the natural stone industry, Stonepedia has established itself as a leading provider of premium marble, granite, and other natural stones. Our commitment to quality and customer satisfaction sets us apart in the industry.
            </p>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-stone-900" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                    <p className="mt-2 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80"
                alt="Marble workshop"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-stone-900 text-white p-8 rounded-lg hidden lg:block">
                <p className="text-4xl font-bold">20+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}