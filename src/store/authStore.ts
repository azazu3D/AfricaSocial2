import { create } from 'zustand';
import { useAuth } from '../services/auth';

interface AuthState {
  user: any | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false,

  login: async () => {
    try {
      set({ loading: true, error: null });
      const { login } = useAuth();
      await login();
      set({ loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },

  logout: async () => {
    try {
      set({ loading: true, error: null });
      const { logout } = useAuth();
      await logout();
      set({ user: null, loading: false, isAuthenticated: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },

  clearError: () => set({ error: null }),
})); 