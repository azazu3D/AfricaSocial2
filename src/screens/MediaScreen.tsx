import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function MediaScreen() {
  return (
    <View className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold mb-4">Media Library</Text>
      <FlatList
        data={[]}
        renderItem={() => null}
        ListEmptyComponent={() => (
          <View className="flex-1 justify-center items-center">
            <Text className="text-gray-500">No media files yet</Text>
          </View>
        )}
      />
    </View>
  );
} 