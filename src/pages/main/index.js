import React from 'react';
import { Text, Image } from 'react-native';
import ShopppingCart from 'react-native-vector-icons/MaterialIcons';
import logo from '../../assets/images/logo.png';
import { Header, Icon, Logo, GroupItems, BodyPageHome } from './style';

export default function Main( {navigation}) {

    return(
    <>
      <Header>
        <GroupItems>
        <Logo />
          <Icon>
          <ShopppingCart
            name="shopping-basket"
            color="#475df3" size={80}
            onPress={ () => navigation.navigate("Cart")}/>
            </Icon>
          </GroupItems>
      </Header>

        <BodyPageHome >
            <Text> Page Home </Text>
        </BodyPageHome>
      </>
    );
  }


