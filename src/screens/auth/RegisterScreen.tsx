import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';

type RegisterScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Register'>;

export default function RegisterScreen() {
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    // TODO: Implement registration logic
    console.log('Register with:', { name, email, password, confirmPassword });
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1">
        <View className="p-4">
          <Text className="text-3xl font-bold text-gray-900 mb-8">Create Account</Text>
          
          <View className="space-y-4">
            <View>
              <Text className="text-sm font-medium text-gray-700 mb-1">Full Name</Text>
              <TextInput
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Enter your full name"
                value={name}
                onChangeText={setName}
              />
            </View>

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

            <View>
              <Text className="text-sm font-medium text-gray-700 mb-1">Password</Text>
              <TextInput
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>

            <View>
              <Text className="text-sm font-medium text-gray-700 mb-1">Confirm Password</Text>
              <TextInput
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
              />
            </View>

            <TouchableOpacity
              onPress={handleRegister}
              className="bg-primary py-3 rounded-lg"
            >
              <Text className="text-white text-center font-semibold">Sign Up</Text>
            </TouchableOpacity>

            <View className="flex-row justify-center mt-4">
              <Text className="text-gray-600">Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text className="text-primary font-semibold">Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 