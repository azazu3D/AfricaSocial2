import { useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import { authService } from '../services/auth';

export function useAuth() {
  const { user, isAuthenticated, loading, error } = useAuthStore();

  useEffect(() => {
    // Écouter les changements d'état d'authentification
    const unsubscribe = authService.onAuthStateChanged((user) => {
      if (user) {
        useAuthStore.setState({ user, isAuthenticated: true, loading: false });
      } else {
        useAuthStore.setState({ user: null, isAuthenticated: false, loading: false });
      }
    });

    // Nettoyer l'écouteur lors du démontage
    return () => unsubscribe();
  }, []);

  return {
    user,
    isAuthenticated,
    loading,
    error
  };
} 