import { createContext, useContext, useMemo, useState } from 'react';
import { users } from '@/data/mock-data';
import type { User } from '@/types';
import { router } from 'expo-router';

type AuthContextValue = {
  user: User | null;
  login: (email: string, password: string) => { ok: boolean; message?: string };
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    const found = users.find(u => u.email.trim().toLowerCase() === email.trim().toLowerCase());
    if (!found || found.password !== password) return { ok: false, message: 'Email atau password salah' };
    setUser(found);
    return { ok: true };
  };

  const logout = () => {
    setUser(null);
    router.replace('/login');
  }
  const value = useMemo(() => ({ user, login, logout }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
