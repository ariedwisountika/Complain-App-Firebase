import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {FormScreen, HomeScreen, LoginScreen, ChatScreen} from '../screen';

const Drawer = createDrawerNavigator();

function Router() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Chat" component={ChatScreen} />
      <Drawer.Screen name="Form" component={FormScreen} />
    </Drawer.Navigator>
  );
}

export default Router;
