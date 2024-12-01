import React from 'react';
import { Dumbbell, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Dumbbell className="h-8 w-8 text-red-500" />
              <span className="ml-2 text-xl font-bold">PowerFit</span>
            </div>
            <p className="text-gray-400">
              Transform your body and mind with our state-of-the-art facilities and expert trainers.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#classes" className="text-gray-400 hover:text-white transition-colors">Classes</a></li>
              <li><a href="#trainers" className="text-gray-400 hover:text-white transition-colors">Trainers</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-red-500 mr-2" />
                <span className="text-gray-400">123 Fitness Street, Gym City</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-red-500 mr-2" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-red-500 mr-2" />
                <span className="text-gray-400">info@powerfit.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Monday - Friday: 6am - 10pm</li>
              <li className="text-gray-400">Saturday: 7am - 8pm</li>
              <li className="text-gray-400">Sunday: 8am - 6pm</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} PowerFit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}