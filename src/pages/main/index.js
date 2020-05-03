import React from 'react';
import { Text, Image } from 'react-native';
import ShopppingCart from 'react-native-vector-icons/MaterialIcons';
import logo from '../../assets/images/logo.svg';
import { Header, Icon, Logo } from './style';

export default function Main( {navigation}) {

    return(

      <Header>

        <Logo>
        <Image source={logo} />
        </Logo>

        <Text> Page Main </Text>
        <Icon>
        <ShopppingCart
          name="shopping-basket"
          color="orange" size={35}
          onPress={ () => navigation.navigate("Cart")}/>
          </Icon>
      </Header>
    );
  }


