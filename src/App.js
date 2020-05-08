import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import store from './store';
import NavigationService from './services/navigation';

import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { StatusBar } from 'react-native';


export default function App() {

    return(
      <>
      <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="rgba(30, 33, 41, 1)" />
        <Routes  ref={ navigatorRef => NavigationService.setNavigator(navigatorRef) } />
      </NavigationContainer>
      </Provider>
      </>
    );
}

