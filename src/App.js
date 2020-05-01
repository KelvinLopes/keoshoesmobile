import React from 'react';
import Routes from './routes';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

export default function App() {

  return(

    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="rgba(71, 93, 243, 1)" />
      <Routes />
    </NavigationContainer>

  );
}

