import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DashboardScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1">
        <View className="p-4">
          <Text className="text-2xl font-bold text-gray-900">Dashboard</Text>
          
          {/* Overview Section */}
          <View className="mt-6">
            <Text className="text-lg font-semibold text-gray-800">Overview</Text>
            <View className="mt-4 flex-row flex-wrap justify-between">
              {/* Stats Cards */}
              <View className="w-[48%] bg-white p-4 rounded-lg shadow-sm mb-4">
                <Text className="text-sm text-gray-500">Total Posts</Text>
                <Text className="text-2xl font-bold text-primary">0</Text>
              </View>
              <View className="w-[48%] bg-white p-4 rounded-lg shadow-sm mb-4">
                <Text className="text-sm text-gray-500">Engagement</Text>
                <Text className="text-2xl font-bold text-primary">0%</Text>
              </View>
              <View className="w-[48%] bg-white p-4 rounded-lg shadow-sm mb-4">
                <Text className="text-sm text-gray-500">Followers</Text>
                <Text className="text-2xl font-bold text-primary">0</Text>
              </View>
              <View className="w-[48%] bg-white p-4 rounded-lg shadow-sm mb-4">
                <Text className="text-sm text-gray-500">Messages</Text>
                <Text className="text-2xl font-bold text-primary">0</Text>
              </View>
            </View>
          </View>

          {/* Recent Activity Section */}
          <View className="mt-6">
            <Text className="text-lg font-semibold text-gray-800">Recent Activity</Text>
            <View className="mt-4 bg-white rounded-lg shadow-sm p-4">
              <Text className="text-gray-500">No recent activity</Text>
            </View>
          </View>

          {/* Scheduled Posts Section */}
          <View className="mt-6 mb-6">
            <Text className="text-lg font-semibold text-gray-800">Scheduled Posts</Text>
            <View className="mt-4 bg-white rounded-lg shadow-sm p-4">
              <Text className="text-gray-500">No scheduled posts</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 