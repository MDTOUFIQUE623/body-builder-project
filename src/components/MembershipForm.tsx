import React, { useState } from 'react';
import { X } from 'lucide-react';

interface MembershipFormProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export function MembershipForm({ isOpen, onClose, defaultPlan }: MembershipFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: defaultPlan || 'basic'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for joining PowerFit! We will contact you shortly.');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        
        <h2 className="text-2xl font-bold mb-6">Join PowerFit</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 p-2 border"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 p-2 border"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 p-2 border"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          
          <div>
            <label htmlFor="plan" className="block text-sm font-medium text-gray-700">
              Membership Plan
            </label>
            <select
              id="plan"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 p-2 border"
              value={formData.plan}
              onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
            >
              <option value="basic">Basic Plan - $29/month</option>
              <option value="pro">Pro Plan - $59/month</option>
              <option value="elite">Elite Plan - $99/month</option>
            </select>
          </div>
          
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition-colors mt-6"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}