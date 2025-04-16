import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Auth0ProviderWithConfig } from './src/services/auth';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  return (
    <Auth0ProviderWithConfig>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </Auth0ProviderWithConfig>
  );
}
