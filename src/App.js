import React from 'react';
import Routes from './routes';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native';


export default function App() {

    return(
      <>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="rgba(30, 33, 41, 1)" />
        <Routes />
      </NavigationContainer>
      </>
    );
}

