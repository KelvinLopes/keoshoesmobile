import React from 'react';
import { connect } from 'react-redux';
import {  TextAmountCart } from './style';


function TextCartSize ({ cartSize }) {

  return (
    <>
      <TextAmountCart>{cartSize || 0}</TextAmountCart>
    </>
  );
}


export default connect(
  state => ({
    cartSize: state.cart.length
  })
)(TextCartSize);
