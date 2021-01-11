import React from 'react';

import { OverviewStackType } from '../../NavigationConfig';
import { createStackNavigator } from '@react-navigation/stack';
import DetailPage from './components/DetailPage';
import Main from './Main';

interface MoviesScreenProps {}

const OverviewStack = createStackNavigator<OverviewStackType>();

const MoviesScreen = () => (
  <OverviewStack.Navigator headerMode="none">
    <OverviewStack.Screen name="Main" component={Main} />
    <OverviewStack.Screen name="Detail" component={DetailPage} />
  </OverviewStack.Navigator>
);

export default MoviesScreen;
