import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from './types';
import DashboardNavigator from './DashboardNavigator';
import CalendarNavigator from './CalendarNavigator';
import InboxNavigator from './InboxNavigator';
import MediaNavigator from './MediaNavigator';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2563eb',
        tabBarInactiveTintColor: '#6b7280',
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardNavigator}
        options={{
          tabBarLabel: 'Dashboard',
          // TODO: Add icons
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarNavigator}
        options={{
          tabBarLabel: 'Calendar',
          // TODO: Add icons
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={InboxNavigator}
        options={{
          tabBarLabel: 'Inbox',
          // TODO: Add icons
        }}
      />
      <Tab.Screen
        name="Media"
        component={MediaNavigator}
        options={{
          tabBarLabel: 'Media',
          // TODO: Add icons
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          // TODO: Add icons
        }}
      />
    </Tab.Navigator>
  );
} 