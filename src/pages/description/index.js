import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as CartActions from '../../store/modules/cart/actions';

import {

  BodyPageHome,
  CardProducts,
  CardProductsContainer,
  ImageProduct,
  TextProductTitle,
  TextProductDescription
}
  from './style';

  function Description( {navigation, products })  {

  return(
    <BodyPageHome>
          <CardProductsContainer>
          {products.map(product =>
            <CardProducts key={String(product.id)}>
            <ImageProduct source={{ uri: product.image }} />
              <TextProductTitle> {product.title} </TextProductTitle>
              <TextProductDescription>{product.description}</TextProductDescription>
          </CardProducts>
         )}
        </CardProductsContainer>
     </BodyPageHome>
   )
}

const mapDispatchProps = dispatch =>
  bindActionCreators(CartActions,dispatch);

export default connect(mapDispatchProps)(Description);
