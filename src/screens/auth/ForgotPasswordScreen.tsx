import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';
import { useAuthStore } from '../../store/authStore';

type ForgotPasswordScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'ForgotPassword'>;

export default function ForgotPasswordScreen() {
  const navigation = useNavigation<ForgotPasswordScreenNavigationProp>();
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const { resetPassword, loading, error, clearError } = useAuthStore();

  const handleResetPassword = async () => {
    if (!email) {
      // TODO: Afficher un message d'erreur
      return;
    }

    try {
      await resetPassword(email);
      setSuccess(true);
    } catch (error) {
      // L'erreur est déjà gérée par le store
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1">
        <View className="p-4">
          <Text className="text-3xl font-bold text-gray-900 mb-8">Reset Password</Text>

          {error && (
            <View className="bg-red-50 p-4 rounded-lg mb-4">
              <Text className="text-red-500">{error.message}</Text>
            </View>
          )}

          {success ? (
            <View className="space-y-4">
              <View className="bg-green-50 p-4 rounded-lg">
                <Text className="text-green-600">
                  Password reset email has been sent. Please check your inbox.
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                className="bg-primary py-3 rounded-lg"
              >
                <Text className="text-white text-center font-semibold">Back to Login</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View className="space-y-4">
              <Text className="text-gray-600 mb-4">
                Enter your email address and we'll send you instructions to reset your password.
              </Text>

              <View>
                <Text className="text-sm font-medium text-gray-700 mb-1">Email</Text>
                <TextInput
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Enter your email"
                  value={email}
                  onChangeText={(text) => {
                    setEmail(text);
                    clearError();
                  }}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  editable={!loading}
                />
              </View>

              <TouchableOpacity
                onPress={handleResetPassword}
                className={`bg-primary py-3 rounded-lg ${loading ? 'opacity-70' : ''}`}
                disabled={loading}
              >
                {loading ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <Text className="text-white text-center font-semibold">Send Reset Link</Text>
                )}
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                className="mt-4"
                disabled={loading}
              >
                <Text className="text-primary text-center">Back to Login</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 