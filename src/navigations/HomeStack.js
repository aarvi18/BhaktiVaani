import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AartiScreen from '../screens/AartiScreen/AartiScreen';
import { HomeScreen } from '../screens';
import { appColors } from '../themes/appColors';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
       
        options={{
            title: 'BhaktiVaani',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: appColors.primary,
            },
            headerTintColor: '#fff',
          }}
      />
      <Stack.Screen
        name="AartiScreen"
        component={AartiScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
