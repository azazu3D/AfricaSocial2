import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MediaScreen from '../screens/MediaScreen';

const Stack = createNativeStackNavigator();

export default function MediaNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="MediaMain" 
        component={MediaScreen}
        options={{
          title: 'Media',
        }}
      />
    </Stack.Navigator>
  );
} 