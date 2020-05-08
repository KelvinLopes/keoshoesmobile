import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/formatprice';

import { View, Text } from 'react-native';
import logo from '../../assets/images/logo.png';


import ButtonIncrement  from 'react-native-vector-icons/MaterialIcons';
import ButtonDrecement from 'react-native-vector-icons/MaterialIcons';
import ButtonDeleteItem from 'react-native-vector-icons/MaterialIcons';

import {

  BodyPageHome,
  CardProducts,
  CardProductsContainer,
  ImageProduct,
  TextProductTitle,
  ProductControls,
  ProductAmount,
  PriceProduct,
  SpaceDelete,
  GroupControlsAddAndRemove,
  TotalValueProduct,
  TextTotal,
  TextTotalValue
}
  from './style';


export default function Cart(
  { navigation,
    products,
    total,
    removeFromCart,
    updateAmountRequest }
)  {

  function decrement(product) {
    updateAmountRequest(product.id, product.amount -1)
  }

  function increment(product) {
    updateAmountRequest(product.id, product.amount +1)
  }

    return(
      <BodyPageHome>
      <CardProductsContainer>

      <TotalValueProduct>
                <TextTotal> Total</TextTotal>
                <TextTotalValue> {total}</TextTotalValue>
              </TotalValueProduct>


        {products.map(product =>
          <CardProducts key={product.id}>
          <ImageProduct source={{ uri: product,image }} />
            <TextProductTitle> {product.title} </TextProductTitle>
            <PriceProduct> {product.priceFormatted} </PriceProduct>


              <ProductControls  >
              <GroupControlsAddAndRemove>
                <ButtonIncrement
                      name="remove-circle-outline"
                      size={30}
                      color="#475df3"
                    />

                  <ProductAmount value={String(product.amount)}/>

                    <ButtonDrecement
                      name="add-circle-outline"
                      size={30}
                      color="#475df3"
                    />
                    </GroupControlsAddAndRemove>

                    <SpaceDelete />
                    <ButtonDeleteItem
                      name="delete-forever"
                      size={30}
                      color="#475df3"
                    />

                </ProductControls>

        </CardProducts>
       )}

      </CardProductsContainer>
     </BodyPageHome>
    );
}
