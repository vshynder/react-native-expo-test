import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export interface MoviewScreenProps {}

const MoviewScreen = () => (
  <View style={styles.container}>
    <Text>Moview screen</Text>
  </View>
);

export default MoviewScreen;
