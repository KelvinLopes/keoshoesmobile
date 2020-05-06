import React, { Component } from 'react';
import api from '../../services/api'
import PropTypes from 'proptypes';
import ShopppingCart from 'react-native-vector-icons/MaterialIcons';


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

export default class Description extends Component {

  static navigationOptions = {
    title: 'Cart'
  }

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired
  };

  state = {
    products: [],
   // idProduct: this.props.navigation.item.id
  }

  async componentDidMount() {

  this.loadProducts();

}

loadProducts = async () => {

  const response = await api.get(`/products`);

  const data = response.data.map( product => ({
    ...product,
  }));

  this.setState({ products: data, idProduct: this.props.navigation.item.id })
};

handleNavigate = () => {
  const { navigation } = this.props;
  navigation.navigate('Cart')
}

showProductsDetails = () => {


  return(
    <BodyPageHome>
     <CardProductsContainer key={item.idProduct.id} item={item.idProduct}>
      <CardProducts >
        <TextProductTitle> {item.idProduct.title} </TextProductTitle>
        <ImageProduct source={{ uri: item.idProduct.image }} />
        <TextProductDescription>{item.idProduct.description}</TextProductDescription>
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
          keyExtractor={ idProduct => String(idProduct.id)}
          horizontal={true}
          renderItem={this.showProductsDetails}
        />

      </>
    </>
    );
  }
}
