import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

interface LoginFormProps {
  onClose: () => void;
  onSwitchToRegister: () => void;
}

export function LoginForm({ onClose, onSwitchToRegister }: LoginFormProps) {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(formData.email, formData.password);
      onClose();
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full"
    >
      <h2 className="text-2xl font-bold mb-6 dark:text-white">Welcome Back</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-md">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <Input
          label="Password"
          type="password"
          required
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />

        <Button
          type="submit"
          className="w-full"
          isLoading={isLoading}
        >
          Log In
        </Button>
      </form>

      <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
        Don't have an account?{' '}
        <button
          onClick={onSwitchToRegister}
          className="text-red-500 hover:text-red-600 font-semibold"
        >
          Sign Up
        </button>
      </p>
    </motion.div>
  );
} 