import React from 'react';

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
    <section id="classes" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Classes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={classItem.image} 
                alt={classItem.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{classItem.title}</h3>
                <p className="text-gray-600">{classItem.description}</p>
                <button className="mt-4 text-red-500 font-semibold hover:text-red-600 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}