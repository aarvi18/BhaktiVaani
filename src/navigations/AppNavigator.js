import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
import { AboutScreen } from '../screens';
import { appColors } from '../themes/appColors';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
    headerShown: false
  }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
