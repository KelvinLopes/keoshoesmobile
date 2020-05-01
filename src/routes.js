import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

import Main from './pages/main';
import Cart from './pages/cart';

export default function Routes() {
  return(

    <Stack.Navigator initialRouteName="Main"
      screenOptions={ { headerStyle: { backgroundColor: 'rgba(71, 93, 243, 1)' },
        headerTintColor: 'rgba(72, 167, 243, 1)', headerTitleAlign: 'center'
      } } >
        <Stack.Screen name="Main" component = {Main} options={ { title: 'KeoShoes Products' } }/>
        <Stack.Screen name="Cart" component = { Cart } options={ { title: 'My Cart' } } />
    </Stack.Navigator>
  );
}
