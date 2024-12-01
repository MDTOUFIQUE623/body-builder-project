import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  icon?: React.ReactNode;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading,
  icon,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = "rounded-md font-semibold transition-all duration-200 flex items-center justify-center";
  
  const variants = {
    primary: "bg-red-500 text-white hover:bg-red-600 active:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 dark:active:bg-red-800",
    secondary: "bg-gray-800 text-white hover:bg-gray-900 active:bg-black dark:bg-gray-700 dark:hover:bg-gray-800",
    outline: "border-2 border-red-500 text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950 active:bg-red-100 dark:active:bg-red-900"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          {icon && <span className="mr-2">{icon}</span>}
          {children}
        </>
      )}
    </motion.button>
  );
}