import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
});
interface LikedProps {}

const Liked = ({}: LikedProps) => {
  return <View style={styles.container} />;
};

export default Liked;
