import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { validateEmail, validatePhone, validateName } from '../../utils/validation';

interface MembershipFormProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  plan: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

export function MembershipForm({ isOpen, onClose, defaultPlan }: MembershipFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    plan: defaultPlan || 'basic'
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!validateName(formData.name)) {
      newErrors.name = 'Please enter a valid name';
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    alert('Thank you for joining PowerFit! We will contact you shortly.');
    
    setIsSubmitting(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              <X className="h-6 w-6" />
            </button>
            
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Join PowerFit</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Full Name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                error={errors.name}
              />
              
              <Input
                label="Email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                error={errors.email}
              />
              
              <Input
                label="Phone Number"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                error={errors.phone}
              />
              
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Membership Plan
                </label>
                <select
                  className="w-full px-3 py-2 border rounded-md shadow-sm border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  value={formData.plan}
                  onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                >
                  <option value="basic">Basic Plan - $29/month</option>
                  <option value="pro">Pro Plan - $59/month</option>
                  <option value="elite">Elite Plan - $99/month</option>
                </select>
              </div>
              
              <Button
                type="submit"
                className="w-full mt-6"
                isLoading={isSubmitting}
              >
                Submit Application
              </Button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}