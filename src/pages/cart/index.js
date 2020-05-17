import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/formatprice';
import ShopppingCart from 'react-native-vector-icons/MaterialIcons';

import { View, Text, ScrollView } from 'react-native';
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
  NumberSubtotal,
  TotalValueProduct,
  TextSubTotal,
  TextTotalItemsCart,
  TextTotalValue,
  TextAmount,
  TextUnicValue,
  Scroll,
  TottalHeader,
  TottalItemsCart
}
  from './style';


function Cart( {navigation, products, total, removeFromCart, updateAmountRequest })  {


  function decrement(product) {
    updateAmountRequest(product.id, product.amount -1)
  }

  function increment(product) {
    updateAmountRequest(product.id, product.amount +1)
  }

    return(
      <>
        <TottalHeader>
        <TextTotalValue>{total}</TextTotalValue>
        </TottalHeader>
        <TottalItemsCart>
        <ShopppingCart name="add-shopping-cart" color="#50fa7b" size={35} />
        <TextTotalItemsCart>com {products.length} itens</TextTotalItemsCart>
        </TottalItemsCart>

      <Scroll>
      <BodyPageHome>
      <CardProductsContainer>
        {products.map(product =>
          <CardProducts key={String(product.id)}>
          <ImageProduct source={{ uri: product.image }} />
            <TextProductTitle> {product.title} </TextProductTitle>
            <TextUnicValue>Valor unitário</TextUnicValue>
            <PriceProduct> {product.priceFormatted} </PriceProduct>
              <TextSubTotal>Subtotal</TextSubTotal>
              <NumberSubtotal>{product.subtotal}</NumberSubtotal>

              <ProductControls  >
              <GroupControlsAddAndRemove>
              <TextAmount>Quant.</TextAmount>
              <ButtonControlsProductAmount onPress={ () => decrement(product)}>
                <ButtonIncrement
                      name="remove-circle-outline"
                      size={30}
                      color="#475df3"
                    />
                  </ButtonControlsProductAmount>

                  <ProductAmount value={String(product.amount)}/>

                  <ButtonControlsProductAmount onPress={ () => increment(product) }>
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
     </Scroll>
     </>
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
      (total, product) => {
        return total + product.price * product.amount;
    },0)),
});

const mapDispatchProps = dispatch =>
  bindActionCreators(CartActions,dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Cart);
