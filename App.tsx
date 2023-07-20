
import React from 'react';
import { View, Text } from 'react-native';
import Home from './src/components/screens/home';
import Mainstack from './src/navigation/Mainstack';
import { NavigationContainer } from '@react-navigation/native';
import Appstack from './src/navigation/stack';


const App = () => {
  return (
    
   <NavigationContainer>
    <Appstack />
   </NavigationContainer>
  );
};

export default App;

