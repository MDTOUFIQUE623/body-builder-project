import React, { useState } from 'react';
import { Dumbbell, Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '../ui/Button';
import { Container } from './Container';
import { useTheme } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';

interface NavbarProps {
  onJoinNow: () => void;
}

export function Navbar({ onJoinNow }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-black/90 backdrop-blur-sm dark:bg-gray-900/90 text-white fixed w-full z-50">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Dumbbell className="h-8 w-8 text-red-500" />
            <span className="ml-2 text-xl font-bold">PowerFit</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-red-500 transition-colors">Home</a>
            <a href="#classes" className="hover:text-red-500 transition-colors">Classes</a>
            <a href="#trainers" className="hover:text-red-500 transition-colors">Trainers</a>
            <a href="#pricing" className="hover:text-red-500 transition-colors">Pricing</a>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </motion.button>
            
            <Button 
              onClick={onJoinNow}
              size="sm"
            >
              Join Now
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </motion.button>
            
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 hover:bg-red-500 rounded-md">Home</a>
              <a href="#classes" className="block px-3 py-2 hover:bg-red-500 rounded-md">Classes</a>
              <a href="#trainers" className="block px-3 py-2 hover:bg-red-500 rounded-md">Trainers</a>
              <a href="#pricing" className="block px-3 py-2 hover:bg-red-500 rounded-md">Pricing</a>
              <Button 
                onClick={onJoinNow}
                className="w-full"
              >
                Join Now
              </Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}