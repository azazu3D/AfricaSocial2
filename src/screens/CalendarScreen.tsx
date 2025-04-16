import React from 'react';
import { View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function CalendarScreen() {
  return (
    <View className="flex-1 bg-background">
      <Calendar
        // Enable marking of dates
        markingType={'multi-dot'}
        // Theme customization
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#2563eb',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#2563eb',
          dayTextColor: '#2d3748',
          textDisabledColor: '#d9e2ec',
          dotColor: '#2563eb',
          selectedDotColor: '#ffffff',
          arrowColor: '#2563eb',
          monthTextColor: '#2d3748',
          indicatorColor: '#2563eb',
        }}
      />
    </View>
  );
} 