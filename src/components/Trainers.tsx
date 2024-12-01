import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const trainers = [
  {
    name: "Sarah Johnson",
    specialty: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Mike Thompson",
    specialty: "HIIT & CrossFit",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Emma Davis",
    specialty: "Yoga & Pilates",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  }
];

export function Trainers() {
  return (
    <section id="trainers" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Expert Trainers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div key={index} className="text-center">
              <div className="relative group">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <a href="#" className="text-white hover:text-red-500 transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-white hover:text-red-500 transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-white hover:text-red-500 transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-semibold mt-4">{trainer.name}</h3>
              <p className="text-gray-600">{trainer.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}