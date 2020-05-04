import React, { Component } from 'react';
import { Text, Image, ScrollView } from 'react-native';
import api from '../../services/api';
import PropTypes from 'proptypes';
import ShopppingCart from 'react-native-vector-icons/MaterialIcons';
import logo from '../../assets/images/logo.png';
import { Header,
  Icon,
  Logo,
  GroupItems,
  BodyPageHome,
  CardProducts,
  CardProductsContainer,
  ImageProduct
}
  from './style';

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

componentDidMount() {
  this.products();
}

products = async () => {

  const response = await api.get('/products');

  const data = response.data.map( product => ({
    ...product,
  }))

  this.setState({ products: data })
};

handleNavigate = () => {
  const { navigation } = this.props;
  navigation.navigate('Cart')
}

render() {

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
      <ScrollView
        horizontal = {true}
        showsHorizontalScrollIndicator = {false}
        >
        <BodyPageHome >

          <CardProducts>
            <CardProductsContainer>
              <Text> Product Title </Text>
              <ImageProduct source={logo} />
              <Text>Link procuct details</Text>
            </CardProductsContainer>
          </CardProducts>

          <CardProducts>
            <CardProductsContainer>
              <Text> Product Title </Text>
              <ImageProduct source={logo} />
              <Text>Link procuct details</Text>
            </CardProductsContainer>
          </CardProducts>

          <CardProducts>
            <CardProductsContainer>
              <Text> Product Title </Text>
              <ImageProduct source={logo} />
              <Text>Link procuct details</Text>
            </CardProductsContainer>
          </CardProducts>

          <CardProducts>
            <CardProductsContainer>
              <Text> Product Title </Text>
              <ImageProduct source={logo} />
              <Text>Link procuct details</Text>
            </CardProductsContainer>
          </CardProducts>

        </BodyPageHome>
        </ScrollView>

      </>
    );
  }
}



