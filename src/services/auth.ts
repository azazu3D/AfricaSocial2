import { Auth0Provider, useAuth0, LogoutOptions } from '@auth0/auth0-react';
import React from 'react';
import { Platform } from 'react-native';

export class AuthError extends Error {
  constructor(public code: string, message: string) {
    super(message);
    this.name = 'AuthError';
  }
}

const getRedirectUri = () => {
  if (Platform.OS === 'web') {
    return process.env.EXPO_PUBLIC_AUTH0_REDIRECT_URI_WEB;
  }
  return process.env.EXPO_PUBLIC_AUTH0_REDIRECT_URI_MOBILE;
};

export const authService = {
  async login() {
    try {
      const { loginWithRedirect } = useAuth0();
      await loginWithRedirect();
    } catch (error) {
      throw new AuthError('login-failed', 'Failed to login');
    }
  },

  async logout() {
    try {
      const { logout } = useAuth0();
      const options: LogoutOptions = {
        logoutParams: {
          returnTo: getRedirectUri()
        }
      };
      await logout(options);
    } catch (error) {
      throw new AuthError('logout-failed', 'Failed to logout');
    }
  },

  getCurrentUser() {
    const { user } = useAuth0();
    return user;
  },
};

interface Auth0ProviderProps {
  children: React.ReactNode;
}

export const Auth0ProviderWithConfig = ({ children }: Auth0ProviderProps) => {
  const domain = process.env.EXPO_PUBLIC_AUTH0_DOMAIN || '';
  const clientId = process.env.EXPO_PUBLIC_AUTH0_CLIENT_ID || '';
  const redirectUri = getRedirectUri() || '';

  return React.createElement(
    Auth0Provider,
    {
      domain,
      clientId,
      authorizationParams: {
        redirect_uri: redirectUri,
      },
    },
    children
  );
};

export const useAuth = () => {
  const { user, isLoading, error, loginWithRedirect, logout: auth0Logout } = useAuth0();

  return {
    user,
    loading: isLoading,
    error,
    login: loginWithRedirect,
    logout: () => {
      const options: LogoutOptions = {
        logoutParams: {
          returnTo: getRedirectUri()
        }
      };
      auth0Logout(options);
    },
  };
}; 