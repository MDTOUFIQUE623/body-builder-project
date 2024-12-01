import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        {label}
      </label>
      <input
        className={`
          w-full px-3 py-2 border rounded-md shadow-sm
          bg-white dark:bg-gray-700
          text-gray-900 dark:text-white
          border-gray-300 dark:border-gray-600
          focus:ring-2 focus:ring-red-500 focus:border-red-500
          ${error ? 'border-red-500 dark:border-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-500 dark:text-red-400">{error}</p>
      )}
    </div>
  );
}