import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'member' | 'trainer' | 'admin';
  membershipPlan?: string;
  joinDate: Date;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (userData: RegisterData) => Promise<void>;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  membershipPlan?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored auth token and validate it
    const checkAuth = async () => {
      const token = localStorage.getItem('auth_token');
      if (token) {
        try {
          // In a real app, validate token with backend
          const userData = JSON.parse(localStorage.getItem('user_data') || '');
          setUser(userData);
        } catch (error) {
          console.error('Auth error:', error);
          localStorage.removeItem('auth_token');
          localStorage.removeItem('user_data');
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // In a real app, make API call to login
      // Simulated API response
      const mockUser: User = {
        id: '1',
        name: 'John Doe',
        email,
        role: 'member',
        membershipPlan: 'basic',
        joinDate: new Date(),
      };

      localStorage.setItem('auth_token', 'mock_token');
      localStorage.setItem('user_data', JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
    setUser(null);
  };

  const register = async (userData: RegisterData) => {
    setIsLoading(true);
    try {
      // In a real app, make API call to register
      // Simulated API response
      const mockUser: User = {
        id: '1',
        name: userData.name,
        email: userData.email,
        role: 'member',
        membershipPlan: userData.membershipPlan,
        joinDate: new Date(),
      };

      localStorage.setItem('auth_token', 'mock_token');
      localStorage.setItem('user_data', JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 