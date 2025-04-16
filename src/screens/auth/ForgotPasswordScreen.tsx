import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';

type ForgotPasswordScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'ForgotPassword'>;

export default function ForgotPasswordScreen() {
  const navigation = useNavigation<ForgotPasswordScreenNavigationProp>();
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    // TODO: Implement password reset logic
    console.log('Reset password for:', email);
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1">
        <View className="p-4">
          <Text className="text-3xl font-bold text-gray-900 mb-8">Reset Password</Text>
          
          <View className="space-y-4">
            <Text className="text-gray-600">
              Enter your email address and we'll send you instructions to reset your password.
            </Text>

            <View>
              <Text className="text-sm font-medium text-gray-700 mb-1">Email</Text>
              <TextInput
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <TouchableOpacity
              onPress={handleResetPassword}
              className="bg-primary py-3 rounded-lg"
            >
              <Text className="text-white text-center font-semibold">Send Reset Instructions</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              className="self-center mt-4"
            >
              <Text className="text-primary">Back to Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 