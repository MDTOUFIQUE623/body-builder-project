import React from 'react';
import { Dumbbell, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  onJoinNow: () => void;
}

export function Navbar({ onJoinNow }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Dumbbell className="h-8 w-8 text-red-500" />
            <span className="ml-2 text-xl font-bold">PowerFit</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#home" className="hover:text-red-500 transition-colors">Home</a>
              <a href="#classes" className="hover:text-red-500 transition-colors">Classes</a>
              <a href="#trainers" className="hover:text-red-500 transition-colors">Trainers</a>
              <a href="#pricing" className="hover:text-red-500 transition-colors">Pricing</a>
              <button 
                onClick={onJoinNow}
                className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
              >
                Join Now
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 hover:bg-red-500 rounded-md">Home</a>
            <a href="#classes" className="block px-3 py-2 hover:bg-red-500 rounded-md">Classes</a>
            <a href="#trainers" className="block px-3 py-2 hover:bg-red-500 rounded-md">Trainers</a>
            <a href="#pricing" className="block px-3 py-2 hover:bg-red-500 rounded-md">Pricing</a>
            <button 
              onClick={onJoinNow}
              className="w-full text-left px-3 py-2 bg-red-500 rounded-md hover:bg-red-600"
            >
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}