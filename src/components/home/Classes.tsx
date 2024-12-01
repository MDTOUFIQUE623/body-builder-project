import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../layout/Section';
import { staggerContainer, fadeInUp } from '../../utils/animations';

const classes = [
  {
    title: "Strength Training",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "Build muscle and increase strength with our expert-led strength training classes."
  },
  {
    title: "HIIT",
    image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "High-intensity interval training for maximum calorie burn and endurance."
  },
  {
    title: "Yoga",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "Find balance and flexibility with our relaxing yoga sessions."
  }
];

export function Classes() {
  return (
    <Section 
      id="classes" 
      title="Our Classes" 
      subtitle="Choose from our wide range of fitness classes designed to help you achieve your goals."
      className="bg-gray-100 dark:bg-gray-900"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {classes.map((classItem, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img 
              src={classItem.image} 
              alt={classItem.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{classItem.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{classItem.description}</p>
              <button className="mt-4 text-red-500 font-semibold hover:text-red-600 transition-colors">
                Learn More →
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}