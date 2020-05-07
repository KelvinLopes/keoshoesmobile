import React from 'react';
import { createStackNavigator  } from '@react-navigation/stack';

import Main from './pages/main';
import Cart from './pages/cart';
import Description from './pages/description';

import './config/Reactotron';

const Stack = createStackNavigator();


  export default function Routes (  ) {

    return(

      <Stack.Navigator
        initialRouteName="Main"
        screenOptions= { {
          headerStyle: { backgroundColor: 'rgba(30, 33, 41, 1)' },
          headerTintColor: 'rgba(72, 167, 243, 1)',
          headerTitleAlign: 'center',
         } }
        >

          <Stack.Screen
            name="Main"
            component = {Main}
            options={ { title: '' }}
          />

          <Stack.Screen
            name="Cart"
            component = { Cart }
            options={ { title: 'My Cart' } }
          />

          <Stack.Screen
            name="Description"
            component = { Description }
            options={ { title: 'Description Product' } }
          />

      </Stack.Navigator>
  );
}
