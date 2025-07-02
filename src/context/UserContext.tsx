import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';

// User interface definition
interface User {
  id: string;
  uid: string; // 6-digit unique identifier (4 numbers + 2 letters)
  name: string;
  email: string;
  mobile?: string;
  address?: string;
  categories: string[];
  role: 'artist' | 'studio_owner' | 'engineer' | 'admin';
  avatar?: string;
  preferences?: {
    genres: string[];
    location: string;
    budget_range: string;
  };
  createdAt: string;
}

// Context type definition
interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
  generateUID: () => string;
  createUserProfile: (userData: Partial<User>) => User;
}

// Create context with undefined default
const UserContext = createContext<UserContextType | undefined>(undefined);

/**
 * Generate a unique 6-digit UID (4 numbers + 2 capital letters)
 */
const generateUID = (): string => {
  // Generate 4 random numbers (0-9)
  const numbers = Array.from({ length: 4 }, () => Math.floor(Math.random() * 10)).join('');
  
  // Generate 2 random capital letters (A-Z)
  const letters = Array.from({ length: 2 }, () => 
    String.fromCharCode(65 + Math.floor(Math.random() * 26))
  ).join('');
  
  return numbers + letters;
};

/**
 * UserProvider component that manages user authentication state
 * Provides user data and authentication status to child components
 */
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Default user state for demo purposes
  const [user, setUser] = useState<User | null>({
    id: '1',
    uid: '1234AB',
    name: 'Gita Lipika',
    email: 'lipika@patanhi.com',
    mobile: '+91 98765 43210',
    address: 'Mumbai, Maharashtra',
    categories: ['Singer', 'Music Producer'],
    role: 'artist',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    preferences: {
      genres: ['Hip-Hop', 'R&B'],
      location: 'Mumbai',
      budget_range: '₹2000-5000'
    },
    createdAt: '2024-01-01'
  });

  /**
   * Create a complete user profile with generated UID
   */
  const createUserProfile = (userData: Partial<User>): User => {
    const newUID = generateUID();
    const timestamp = new Date().toISOString().split('T')[0];
    
    return {
      id: Date.now().toString(),
      uid: newUID,
      name: userData.name || '',
      email: userData.email || '',
      mobile: userData.mobile || '',
      address: userData.address || '',
      categories: userData.categories || [],
      role: userData.role || 'artist',
      avatar: userData.avatar,
      preferences: userData.preferences || {
        genres: [],
        location: '',
        budget_range: ''
      },
      createdAt: timestamp
    };
  };

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    user,
    setUser,
    isAuthenticated: !!user,
    generateUID,
    createUserProfile,
  }), [user]);

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

/**
 * Custom hook to access user context
 * Throws error if used outside of UserProvider
 */
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};