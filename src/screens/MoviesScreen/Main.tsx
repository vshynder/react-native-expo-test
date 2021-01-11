import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { BottomTabsType } from '../../NavigationConfig';
import { Colors } from './constants';
import { Liked, Overview, Search } from './components';

const BottomTabs = createBottomTabNavigator<BottomTabsType>();

const Main = () => (
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

export default Main;
