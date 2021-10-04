import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import HelloworldScreen from '@Screen/HelloworldScreen';

const App = () => (
  <SafeAreaView style={styles.container}>
    <HelloworldScreen />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
