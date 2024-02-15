import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { RootStackParamList } from './types';
import LinkingConfiguration from './LinkingConfiguration';
import TodoListScreen from '../screens/TodoListScreen/TodoListScreen';
import colors from '../constants/colors';

export default function Navigation() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.background,
      card: colors.background,
    },
  };

  return (
    <NavigationContainer linking={LinkingConfiguration} theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: true, headerShadowVisible: false }}>
      <Stack.Screen
        options={{
          title: 'Todos',
          headerLargeTitle: true,
          headerTintColor: colors.primary,
          headerLargeTitleStyle: { color: colors.primary },
        }}
        name="TodoListScreen"
        component={TodoListScreen}
      />
    </Stack.Navigator>
  );
}
