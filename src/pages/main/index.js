import React, { Component } from 'react';
import { Text, Image, ScrollView, FlatList, Linking } from 'react-native';
import api from '../../services/api'
import PropTypes from 'proptypes';
import ShopppingCart from 'react-native-vector-icons/MaterialIcons';
import logo from '../../assets/images/logo.png';

import {
  Header,
  Icon,
  Logo,
  GroupItems,
  BodyPageHome,
  CardProducts,
  CardProductsContainer,
  ImageProduct,
  List,
  TextProductTitle,
  TextProductDescription
}
  from './style';

import AsyncStorage from '@react-native-community/async-storage';

export default class Main extends Component {

  static navigationOptions = {
    title: 'Cart'
  }

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired
  };

  state = {
    products: []
  }

  async componentDidMount() {

  this.loadProducts();

  const products = await AsyncStorage.getItem('products');
  if (products) {
    this.setState({ products: JSON.parse(products) });
  }


}


async componentDidUpdate(_, prevState) {
  const { products } = await this.state;
  if (prevState.products !== this.setState.products) {
    AsyncStorage.setItem('products', JSON.stringify(products));
  }
}

loadProducts = async () => {

  const response = await api.get('/products');

  const data = response.data.map( product => ({
    ...product,
  }));

  this.setState({ products: data })
};

handleNavigate = () => {
  const { navigation } = this.props;
  navigation.navigate('Cart')
}

showProducts = ({ item }) => {

  return(
    <BodyPageHome>
     <CardProductsContainer key={item.id}>
      <CardProducts >
        <TextProductTitle> {item.title} </TextProductTitle>
        <ImageProduct source={{ uri: item.image }} />
        <TextProductDescription>{item.id}</TextProductDescription>
      </CardProducts>
     </CardProductsContainer>
    </BodyPageHome>

  )
}


render() {

  const { products } = this.state;

  return(
    <>
      <Header>
        <GroupItems>
        <Logo />
          <Icon>
          <ShopppingCart
            name="shopping-basket"
            color="#475df3" size={80}
            onPress={ () => this.handleNavigate()}/>
            </Icon>
          </GroupItems>
      </Header>
      < >

        <List
          data={products}
          extraData={this.props}
          keyExtractor={item => String(item.id)}
          horizontal={true}
          renderItem={this.showProducts}
        />

      </>
    </>
    );
  }
}

