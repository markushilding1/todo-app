import React from 'react';
import { StyleSheet, View, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from './src/navigation';

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Navigation colorScheme={colorScheme} />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#fff',
  },
});
