import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';
import { staggerContainer, fadeInUp } from '../../utils/animations';

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
    ],
    popular: true
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
    <Section 
      id="pricing" 
      title="Membership Plans"
      subtitle="Choose the perfect plan to start your fitness journey"
      className="bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className={`
              backdrop-blur-lg bg-white/80 dark:bg-gray-800/80 
              rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300
              border border-gray-200/50 dark:border-gray-700/50
              ${plan.popular ? 'ring-2 ring-red-500 dark:ring-red-400 scale-105 md:scale-110' : ''}
            `}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
            )}
            
            <h3 className="text-2xl font-bold mb-4 dark:text-white">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold dark:text-white">${plan.price}</span>
              <span className="text-gray-600 dark:text-gray-300">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <Button 
              onClick={() => onChoosePlan(plan.name.toLowerCase())}
              className="w-full"
              variant={plan.popular ? 'primary' : 'outline'}
            >
              Choose {plan.name}
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}