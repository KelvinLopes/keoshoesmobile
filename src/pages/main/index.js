import React from 'react';
import { Text, Image, ScrollView, Scr } from 'react-native';
import ShopppingCart from 'react-native-vector-icons/MaterialIcons';
import logo from '../../assets/images/logo.png';
import { Header, Icon, Logo, GroupItems, BodyPageHome, CardProducts } from './style';

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
      <ScrollView
        horizontal = {true}
        showsHorizontalScrollIndicator = {false}
        >
        <BodyPageHome >

          <CardProducts>
          <Text> Page Home </Text>
          </CardProducts>

           <CardProducts>
          <Text> Page Home </Text>
          </CardProducts>

        </BodyPageHome>
        </ScrollView>

      </>
    );
  }


