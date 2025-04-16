import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalendarScreen from '../screens/CalendarScreen';

const Stack = createNativeStackNavigator();

export default function CalendarNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="CalendarMain" 
        component={CalendarScreen}
        options={{
          title: 'Calendar',
        }}
      />
    </Stack.Navigator>
  );
} 