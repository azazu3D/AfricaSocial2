import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-background p-4">
      <View className="items-center mb-6">
        <View className="w-24 h-24 rounded-full bg-gray-200 mb-4">
          {/* Placeholder for profile image */}
          <View className="flex-1 justify-center items-center">
            <Text className="text-gray-500">Photo</Text>
          </View>
        </View>
        <Text className="text-2xl font-bold">User Name</Text>
        <Text className="text-gray-500">user@email.com</Text>
      </View>

      <View className="space-y-4">
        <TouchableOpacity className="bg-white p-4 rounded-lg shadow-sm">
          <Text className="text-lg">Edit Profile</Text>
        </TouchableOpacity>
        
        <TouchableOpacity className="bg-white p-4 rounded-lg shadow-sm">
          <Text className="text-lg">Settings</Text>
        </TouchableOpacity>
        
        <TouchableOpacity className="bg-white p-4 rounded-lg shadow-sm">
          <Text className="text-lg">Help & Support</Text>
        </TouchableOpacity>
        
        <TouchableOpacity className="bg-red-50 p-4 rounded-lg">
          <Text className="text-red-500 text-lg">Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 