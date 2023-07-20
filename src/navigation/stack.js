import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../components/screens/home';
import NewsPage from '../components/screens/news';
import SideBar  from './sidedrawer';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
    initialRouteName='Home'
    headerShown>
      <Stack.Screen name="SideNav" component={SideBar} />
      {/* <Stack.Screen name="Home" component={Home} /> */}
      {/* <Stack.Screen name="NewsPage" component={NewsPage} /> */}
    </Stack.Navigator>
  );
};

export default AppStack;
