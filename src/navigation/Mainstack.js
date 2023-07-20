import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../components/screens/home';
import NewsPage from '../components/screens/news';
import SideBar from './sidedrawer';

const Stack = createStackNavigator();

const Mainstack = () => {
  return (
    <Stack.Navigator
    initialRouteName='Home'
    screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="SideNav" component={SideBar} />
    </Stack.Navigator>
  );
};

export default Mainstack;
