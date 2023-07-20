import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../components/screens/home';
import NewsPage from '../components/screens/news';


const Drawer = createDrawerNavigator();

 const SideBar = () => {
    return (
        <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="New" component={NewsPage} />
      </Drawer.Navigator>
    );
    
};

export default SideBar;