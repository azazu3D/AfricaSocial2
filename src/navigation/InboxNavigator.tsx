import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InboxScreen from '../screens/InboxScreen';

const Stack = createNativeStackNavigator();

export default function InboxNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="InboxMain" 
        component={InboxScreen}
        options={{
          title: 'Inbox',
        }}
      />
    </Stack.Navigator>
  );
} 