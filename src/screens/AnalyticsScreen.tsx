import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function AnalyticsScreen() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1">
        <View className="p-4">
          <Text className="text-2xl font-bold text-gray-900 mb-6">Analytics</Text>

          {/* Engagement Overview */}
          <View className="mb-6">
            <Text className="text-lg font-semibold text-gray-800 mb-4">Engagement Overview</Text>
            <View className="bg-white p-4 rounded-lg shadow-sm">
              <LineChart
                data={data}
                width={screenWidth - 32}
                height={220}
                chartConfig={{
                  backgroundColor: '#ffffff',
                  backgroundGradientFrom: '#ffffff',
                  backgroundGradientTo: '#ffffff',
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(37, 99, 235, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            </View>
          </View>

          {/* Platform Stats */}
          <View className="mb-6">
            <Text className="text-lg font-semibold text-gray-800 mb-4">Platform Stats</Text>
            <View className="space-y-4">
              <View className="bg-white p-4 rounded-lg shadow-sm">
                <Text className="text-sm text-gray-500">Facebook</Text>
                <Text className="text-2xl font-bold text-primary">1.2K</Text>
                <Text className="text-sm text-green-500">+12% from last month</Text>
              </View>
              <View className="bg-white p-4 rounded-lg shadow-sm">
                <Text className="text-sm text-gray-500">Instagram</Text>
                <Text className="text-2xl font-bold text-primary">2.5K</Text>
                <Text className="text-sm text-green-500">+8% from last month</Text>
              </View>
              <View className="bg-white p-4 rounded-lg shadow-sm">
                <Text className="text-sm text-gray-500">Twitter</Text>
                <Text className="text-2xl font-bold text-primary">800</Text>
                <Text className="text-sm text-red-500">-3% from last month</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 