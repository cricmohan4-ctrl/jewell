"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { users as initialUsers, type User } from '@/data/users';
import { toast } from "sonner";

interface AuthContextType {
  isAuthenticated: boolean;
  currentUser: User | null;
  login: (email: string) => void;
  logout: () => void;
  register: (name: string, email: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const isAuthenticated = !!currentUser;

  useEffect(() => {
    // Check for a logged-in user in localStorage on initial load
    const storedUserId = localStorage.getItem('currentUserId');
    if (storedUserId) {
      const user = users.find(u => u.id === parseInt(storedUserId, 10));
      if (user) {
        setCurrentUser(user);
      }
    }
  }, [users]);

  const login = (email: string) => {
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (user) {
      setCurrentUser(user);
      localStorage.setItem('currentUserId', user.id.toString());
      toast.success(`Welcome back, ${user.name}!`);
    } else {
      toast.error("User not found. Please register first.");
    }
  };

  const register = (name: string, email: string) => {
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      toast.error("An account with this email already exists.");
      return;
    }
    const newUser: User = {
      id: Math.max(...users.map(u => u.id), 0) + 1,
      name,
      email,
      role: 'Customer',
      status: 'Active',
      createdAt: new Date().toISOString(),
    };
    setUsers(prevUsers => [...prevUsers, newUser]);
    setCurrentUser(newUser);
    localStorage.setItem('currentUserId', newUser.id.toString());
    toast.success(`Welcome, ${name}! Your account has been created.`);
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUserId');
    toast.info("You have been logged out.");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, currentUser, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};