import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export interface HomeScreenProps {}

const HomeScreen = () => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <Text>Home screen</Text>
  </View>
);

export default HomeScreen;
