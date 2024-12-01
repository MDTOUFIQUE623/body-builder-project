import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  return (
    <section id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Transform Your Body,<br />
            Transform Your Life
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Join PowerFit today and start your fitness journey with our expert trainers
            and state-of-the-art facilities.
          </p>
          <button 
            onClick={onGetStarted}
            className="bg-red-500 px-8 py-4 rounded-md text-lg font-semibold hover:bg-red-600 transition-colors flex items-center"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}