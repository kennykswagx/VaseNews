import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../components/screens/home';
import NewsPage from '../components/screens/news';
import Sport from '../components/screens/sports';
import FinanceScreen from '../components/screens/finance';
import Colors from '../components/colors/color';

const Drawer = createDrawerNavigator();

 const SideBar = () => {
    return (
        <Drawer.Navigator   
        screenOptions={{
          // headerShown: false,
          drawerStyle: {
            backgroundColor: '#ffff',
            width: '40%',
          },
          headerStyle: {
            height: 50, 
            borderWidth: 1, 
          },
        }}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="New" component={NewsPage} />
        <Drawer.Screen name="Sport" component={Sport} />
        <Drawer.Screen name="Finance" component={FinanceScreen} />
      </Drawer.Navigator>
    );
    
};

export default SideBar;