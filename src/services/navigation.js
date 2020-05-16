//import { NavigationActions } from  'react-navigation';
import { CommonActions } from '@react-navigation/native'

let navigator;

function setNavigator(ref) {
  navigator = ref;
}


/*
function navigate(routeName, params) {
 navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  )
}*/

function navigate(routeName, params) {
  navigator.dispatch(
   CommonActions.navigate('Cart',{
     screen: 'Main',
   },
   routeName,
   params,
   )
 )
}

/*navigation.navigate('Main', {
  screen: 'Cart',
  params: { products: '1' },
});*/

export default {
  navigate,
  setNavigator,
};
