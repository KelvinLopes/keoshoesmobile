import React from 'react';
import { connect } from 'react-redux';
import ShopppingCart from 'react-native-vector-icons/MaterialIcons';
import {  Header, Icon, Logo, GroupItems, ViewTextAmountCart, TextAmountCart, HeaderBackground } from './style';


function HeaderAppHome ({ navigation, cartSize }) {
  return (
  <HeaderBackground>
    <Header>
    <GroupItems>
    <Logo />
    <Icon>
      <ShopppingCart
        name="shopping-basket"
        color="#475df3" size={80}
        onPress={ () => this.handleNavigateToCart()} />
      <ViewTextAmountCart>
        <TextAmountCart>{cartSize || 0}</TextAmountCart>
      </ViewTextAmountCart>
      </Icon>
      </GroupItems>
  </Header>
</HeaderBackground>
);
}

export default connect(
  state => ({
    cartSize: state.cart.length,
  }),
  0
)(HeaderAppHome);
