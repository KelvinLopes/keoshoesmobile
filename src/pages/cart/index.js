import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/formatprice';
import ShopppingCart from 'react-native-vector-icons/MaterialIcons';

import { View, Text, ScrollView } from 'react-native';

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
  TextSubTotal,
  TextTotalItemsCart,
  TextTotalValue,
  TextAmount,
  TextUnicValue,
  Scroll,
  TotalHeader,
  TotalItemsCart,
  EmptyCart,
}
  from './style';


function Cart( { products, total, removeFromCart, updateAmountRequest })  {

  function decrement(product) {
    updateAmountRequest(product.id, product.amount -1)
  }

  function increment(product) {
    updateAmountRequest(product.id, product.amount +1)
  }

    return(
      <>
        <TotalHeader>
        <TextTotalValue>{total}</TextTotalValue>
        </TotalHeader>
        <TotalItemsCart>
        <ShopppingCart name="add-shopping-cart" color="rgba(72, 167, 243, 1)" size={35} />
        <TextTotalItemsCart>
          { products.length > 1 ? ` ${products.length} com itens` :
            products.length > 0 ? ` ${products.length} com item`  :
           'Vazio'
          }
          </TextTotalItemsCart>
        </TotalItemsCart>
      <Scroll>
      <BodyPageHome>
        {
        products.length ?
        (
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
                  <ButtonDrecement
                        name="remove-circle-outline"
                        size={30}
                        color="#475df3"
                      />
                    </ButtonControlsProductAmount>

                    <ProductAmount value={String(product.amount)}/>

                    <ButtonControlsProductAmount onPress={ () => increment(product) }>
                      <ButtonIncrement
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
        )
        :
        (
        <EmptyCart>
           <ShopppingCart
           name="remove-shopping-cart"
           color="rgba(21, 206, 188, 1)"
           size={135} />
        </EmptyCart>
        )
     }
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
