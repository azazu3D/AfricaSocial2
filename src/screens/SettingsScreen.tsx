import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../config/firebase';

export default function SettingsScreen() {
  const navigation = useNavigation();
  const [notifications, setNotifications] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      // Navigation will be handled by the auth state listener
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1">
        <View className="p-4">
          <Text className="text-2xl font-bold text-gray-900 mb-6">Settings</Text>

          {/* Account Settings */}
          <View className="mb-6">
            <Text className="text-lg font-semibold text-gray-800 mb-4">Account</Text>
            <View className="bg-white rounded-lg shadow-sm">
              <TouchableOpacity className="p-4 border-b border-gray-100">
                <Text className="text-gray-800">Profile Information</Text>
              </TouchableOpacity>
              <TouchableOpacity className="p-4 border-b border-gray-100">
                <Text className="text-gray-800">Change Password</Text>
              </TouchableOpacity>
              <TouchableOpacity className="p-4">
                <Text className="text-gray-800">Connected Accounts</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Preferences */}
          <View className="mb-6">
            <Text className="text-lg font-semibold text-gray-800 mb-4">Preferences</Text>
            <View className="bg-white rounded-lg shadow-sm">
              <View className="p-4 border-b border-gray-100 flex-row justify-between items-center">
                <Text className="text-gray-800">Push Notifications</Text>
                <Switch
                  value={notifications}
                  onValueChange={setNotifications}
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={notifications ? '#2563eb' : '#f4f3f4'}
                />
              </View>
              <View className="p-4 flex-row justify-between items-center">
                <Text className="text-gray-800">Dark Mode</Text>
                <Switch
                  value={darkMode}
                  onValueChange={setDarkMode}
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={darkMode ? '#2563eb' : '#f4f3f4'}
                />
              </View>
            </View>
          </View>

          {/* Support */}
          <View className="mb-6">
            <Text className="text-lg font-semibold text-gray-800 mb-4">Support</Text>
            <View className="bg-white rounded-lg shadow-sm">
              <TouchableOpacity className="p-4 border-b border-gray-100">
                <Text className="text-gray-800">Help Center</Text>
              </TouchableOpacity>
              <TouchableOpacity className="p-4 border-b border-gray-100">
                <Text className="text-gray-800">Contact Support</Text>
              </TouchableOpacity>
              <TouchableOpacity className="p-4">
                <Text className="text-gray-800">Privacy Policy</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Logout */}
          <TouchableOpacity
            onPress={handleLogout}
            className="bg-red-500 py-3 rounded-lg"
          >
            <Text className="text-white text-center font-semibold">Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 