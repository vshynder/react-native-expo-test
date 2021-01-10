import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

import { BottomTabsType } from '../../NavigationConfig';
import { Liked, Overview, Search } from './components';
import { Colors } from '../../constants';

interface MoviesScreenProps {}

const BottomTabs = createBottomTabNavigator<BottomTabsType>();

const MoviesScreen = () => (
  <BottomTabs.Navigator
    tabBarOptions={{
      activeTintColor: Colors.primary,
      inactiveTintColor: Colors.secondary,
    }}
  >
    <BottomTabs.Screen
      name="Search"
      component={Search}
      options={{
        tabBarIcon: ({ color }) => (
          <AntDesign name="search1" size={24} color={color} />
        ),
      }}
    />
    <BottomTabs.Screen
      name="Overview"
      component={Overview}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="collections" size={24} color={color} />
        ),
      }}
    />
    <BottomTabs.Screen
      name="Liked"
      component={Liked}
      options={{
        tabBarIcon: ({ color }) => (
          <AntDesign name="like1" size={24} color={color} />
        ),
      }}
    />
  </BottomTabs.Navigator>
);

export default MoviesScreen;
