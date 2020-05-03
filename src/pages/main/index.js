import React from 'react';
import { Text, Image } from 'react-native';
import ShopppingCart from 'react-native-vector-icons/MaterialIcons';
import logo from '../../assets/images/logo.svg';
import { Header, Icon, Logo } from './style';

export default function Main( {navigation}) {

    return(

      <Header>
    <>
      <Text> Page Main </Text>
        <Logo>
          <Image source={logo} alt="Logo"/>
        </Logo>

        <Icon>
        <ShopppingCart
          name="shopping-basket"
          color="orange" size={90}
          onPress={ () => navigation.navigate("Cart")}/>
          </Icon>

         </>
      </Header>
    );
  }


