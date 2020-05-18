import React from 'react';
import { connect } from 'react-redux';
import ShopppingCart from 'react-native-vector-icons/MaterialIcons';
import {  Header, Icon, GroupItems, ViewTextAmountCart, TextAmountCart } from './style';


function HeaderAppHome ({ navigation, cartSize }) {
  return (
    <Header>
    <GroupItems>
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
);
}

export default connect(
  state => ({
    cartSize: state.cart.length,
  }),
  0
)(HeaderAppHome);
