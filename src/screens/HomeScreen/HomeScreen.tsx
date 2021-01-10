import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import { Colors } from '../../constants';
import { DrawerType } from '../../NavigationConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    paddingVertical: 10,
  },
});

interface HomeScreenProps {
  navigation: DrawerNavigationProp<DrawerType, 'Home'>;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>This is my expo test app</Text>
      <FontAwesome.Button
        name="folder-open"
        color={Colors.primary}
        onPress={openDrawer}
      >
        Open the drawer to choose the project
      </FontAwesome.Button>
    </View>
  );
};

export default HomeScreen;
