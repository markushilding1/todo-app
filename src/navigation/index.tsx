import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ColorSchemeName } from 'react-native';

import { RootStackParamList } from './types';
import LinkingConfiguration from './LinkingConfiguration';
import TodoListScreen from '../screens/TodoListScreen/TodoListScreen';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        options={{
          title: 'Todos',
          headerLargeTitle: true,
        }}
        name="TodoListScreen"
        component={TodoListScreen}
      />
    </Stack.Navigator>
  );
}
