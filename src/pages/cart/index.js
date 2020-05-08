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
  ButtonControlsProductAmount,
  ButtonControlsProductDelete,
  TextSubtotal,
  TotalValueProduct,
  TextTotal,
  TextTotalValue
}
  from './style';


function Cart(
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

        {products.map(product =>
          <CardProducts key={product.id}>
          <ImageProduct source={{ uri: product.image }} />
            <TextProductTitle> {product.title} </TextProductTitle>
            <PriceProduct> {product.priceFormatted} </PriceProduct>
              <TextSubtotal>{product.subtotal}</TextSubtotal>
            <TextTotal>Total</TextTotal>
            <TextTotalValue>{total}</TextTotalValue>

              <ProductControls  >
              <GroupControlsAddAndRemove>

              <ButtonControlsProductAmount onPress={ () => increment(product)}>
                <ButtonIncrement
                      name="remove-circle-outline"
                      size={30}
                      color="#475df3"
                    />
                  </ButtonControlsProductAmount>

                  <ProductAmount value={String(product.amount)}/>

                  <ButtonControlsProductAmount onPress={ () => decrement(product) }>
                    <ButtonDrecement
                        name="add-circle-outline"
                        size={30}
                        color="#475df3"
                      />
                  </ButtonControlsProductAmount>

                    </GroupControlsAddAndRemove>

                    <SpaceDelete />

                    <ButtonControlsProductDelete onPress={() => removeFromCart(product.id)}>
                      <ButtonDeleteItem
                        name="delete-forever"
                        size={30}
                        color="#475df3"
                      />
                    </ButtonControlsProductDelete>
                </ProductControls>

        </CardProducts>
       )}

      </CardProductsContainer>
     </BodyPageHome>
    );
}

const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
    priceFormatted: formatPrice(product.price)
  })),
  total: formatPrice(
    state.cart.reduce(
      (total, product) => total + product.price * product.amount,
      0
    )
  ),
});

const mapDispatchProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

  export default connect(mapStateToProps, mapDispatchProps)(Cart);
