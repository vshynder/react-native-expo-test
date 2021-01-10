import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerView } from '@react-navigation/drawer';

import { HomeScreen, MoviesScreen } from './src/screens';
import { DrawerType } from './src/NavigationConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Drawer = createDrawerNavigator<DrawerType>();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Movies" component={MoviesScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
