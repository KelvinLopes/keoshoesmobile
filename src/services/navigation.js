import { CommonActions } from '@react-navigation/native'

let navigator;

function setNavigator(ref) {
  navigator = ref;
}

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

export default {
  navigate,
  setNavigator,
};
