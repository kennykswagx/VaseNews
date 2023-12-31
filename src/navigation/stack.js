import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../components/screens/home';
import NewsPage from '../components/screens/news';
import SideBar  from './sidedrawer';
import Newspage from '../components/screens/newspage';

const Stack = createStackNavigator();

const Appstack = () => {
  return (
    <Stack.Navigator
    initialRouteName='Home'  
    screenOptions={{
      headerShown: false,
      headerStyle: {
        height: 50, 
        borderWidth: 1, }
      }}>
      <Stack.Screen name="SideNav" component={SideBar} />
      <Stack.Screen name="Newspage" component={NewsPage} />
    </Stack.Navigator>
  );
};

export default Appstack;

