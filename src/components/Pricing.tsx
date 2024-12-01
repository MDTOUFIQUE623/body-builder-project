import React from 'react';
import { Check } from 'lucide-react';

interface PricingProps {
  onChoosePlan: (plan: string) => void;
}

const plans = [
  {
    name: "Basic",
    price: "29",
    features: [
      "Access to gym equipment",
      "Locker room access",
      "Basic fitness assessment",
      "2 group classes per month"
    ]
  },
  {
    name: "Pro",
    price: "59",
    features: [
      "All Basic features",
      "Unlimited group classes",
      "1 personal training session/month",
      "Nutrition consultation"
    ]
  },
  {
    name: "Elite",
    price: "99",
    features: [
      "All Pro features",
      "4 personal training sessions/month",
      "Monthly body composition analysis",
      "Premium app features"
    ]
  }
];

export function Pricing({ onChoosePlan }: PricingProps) {
  return (
    <section id="pricing" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Membership Plans</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => onChoosePlan(plan.name.toLowerCase())}
                className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition-colors"
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}