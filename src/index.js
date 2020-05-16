import React from 'react';

import './config/ReactotronConfig';
import store from './store';
import NavigationService from './services/navigation';

import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native';

import Routes from './routes';
import { Provider } from 'react-redux';

export default function App() {

    return(
      <>
      <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(30, 33, 41, 1)" />
      <NavigationContainer  ref={ navigatorRef => (NavigationService.setNavigator(navigatorRef)) }>
        <Routes />
      </NavigationContainer>
      </Provider>
      </>
    );
}
