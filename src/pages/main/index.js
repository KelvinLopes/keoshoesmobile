import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import api from '../../services/api'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/formatprice';
import ShopppingCart from 'react-native-vector-icons/MaterialIcons';
import ShopppingCartButton from 'react-native-vector-icons/MaterialIcons';
import TextCartSize from '../../components/TextAmountCart';

import {
  Header,
  HeaderBackground,
  Icon,
  Logo,
  GroupItems,
  BodyPageHome,
  CardProducts,
  CardProductsContainer,
  ImageProduct,
  List,
  TextProductTitle,
  DescriptionItemContainer,
  DescriptionItem,
  TextButtonAddToCart,
  AddButtonToCartProduct,
  ProductAmount,
  ProductTextAmount,
  ContainerIconShooppingButtonAddToCart,
  PriceProduct,
  ViewTextAmountCart,
}
  from './style';

class Main extends Component {

  state = {
    products: [],
  };


 async componentDidMount() {
  this.loadProducts();
}


loadProducts = async () => {

  const response = await api.get('/products');

  const data = response.data.map( product => ({
    ...product,
    priceFormatted: formatPrice(product.price)
  }));

  this.setState({ products: data })

};

handleNavigateToCart = () => {
  const { navigation } = this.props;
  navigation.navigate('Cart')
}

handleAddProductToCart = (id) => {
  const { addToCartRequest } = this.props;
    addToCartRequest(id);
}

showProducts = ({ item }) => {

  const { amount } = this.props;

  return(

    <BodyPageHome>
     <CardProductsContainer  key={item.id}>
      <CardProducts>
        <ScrollView>
        <TextProductTitle> {item.title} </TextProductTitle>
        <ImageProduct source={{ uri: item.image }} />

        <DescriptionItemContainer>
        <DescriptionItem >
              {item.description}
          </DescriptionItem>
        </DescriptionItemContainer>


        <PriceProduct>Valor {formatPrice(item.price)} </PriceProduct>

           <AddButtonToCartProduct onPress={() => this.handleAddProductToCart(item.id)} >
            <ProductAmount>
              <ContainerIconShooppingButtonAddToCart>
                <ShopppingCartButton name="add-shopping-cart" color="#fff" size={20} />
                <ProductTextAmount>{amount[item.id] || 0}</ProductTextAmount>
              </ContainerIconShooppingButtonAddToCart>
                <TextButtonAddToCart>Adicionar Produto</TextButtonAddToCart>
            </ProductAmount>
             </AddButtonToCartProduct>
         </ScrollView>
      </CardProducts>
     </CardProductsContainer>
    </BodyPageHome>

  )
}

render() {

  const { products } = this.state;

  return(
    <>
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
            <TextCartSize />
            </ViewTextAmountCart>
            </Icon>
          </GroupItems>
      </Header>
    </HeaderBackground>
        <List
          data={products}
          extraData={[products, this.props.amount]}
          keyExtractor={(item) => String(item.id)}
          horizontal
          renderItem={this.showProducts}
        />
    </>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {})
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

