import styled from 'styled-components';

import logo from '../../assets/images/logo.png';

export const Header = styled.View`


  width: auto;
  height: 150px;

  background: #1e2129;

  flexDirection: column;
  alignItems: center;
  justifyContent: space-between;
  zIndex: 5;
  marginTop: -20px;
  marginBottom: 5px;
  borderRadius: 15px;
`;

export const HeaderBackground = styled.View`


  width: auto;
  height: auto;

  background: rgba(72, 167, 243, 1);

  flexDirection: column;
  alignItems: center;
  justifyContent: space-between;
  zIndex: 5;
  marginTop: 0;
  marginBottom: 0;
`;


export const Icon = styled.View`

  flex: 1;
  width: 180px;
  height: 200px;

  background: transparent;
  flexDirection: column;
  alignItems: center;
  justifyContent: space-between;

  marginBottom: 0;
  marginTop: 120px;
  marginLeft: -110px;
  position: relative;
`;


export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`

  width: 180px;
  height: 25px;

  flexDirection: row;
  alignItems: center;
  background: transparent;
  justifyContent: center;

  marginBottom: 0;
  marginTop: 70px;
  marginRight: 150px;
  position: relative;

`;

export const GroupItems = styled.View`

marginTop: -130px;
flexDirection: row;
alignItems: center;
justifyContent: center;
position: relative;
padding: 20px 30px;
zIndex: 4;

`;

export const BodyPageHome = styled.View`

background: #1e2129;
height: 800px;
alignItems: center;
flexDirection: row;

width: auto;
`;

export const CardProductsContainer = styled.View`

width: auto;
height: 250px;


alignItems: center;
justifyContent: space-between;
position: relative;
flexDirection: row;
marginBottom: 10px;
`;

export const CardProducts = styled.View`


marginTop: 140px;
marginBottom: 540px;
marginLeft: 20px;
marginRight: 20px;
background: rgba(0, 0, 0, 0.5);

width: 300px;
height: 320px;

border: 0.8px;
borderRadius: 15px;
borderColor: #50fa7b;
alignItems: center;
justifyContent: center;
position: relative;

flexDirection: column;

`;

export const List = styled.FlatList.attrs({

  showsHorizontalScrollIndicator: false,

})`
marginTop: 0;

`

export const ImageProduct = styled.Image.attrs({

  resizeMode: 'cover',
})`

width: 220px;
height: 170px;

flexDirection: row;
alignItems: center;
background: transparent;
justifyContent: center;


marginBottom: 4px;
marginTop: 20px;
marginLeft: 30px;
marginRight: 0;
position: relative;
borderRadius: 15px;

`;

export const TextProductTitle = styled.Text`

marginTop: -15px;
paddingTop: 20px;
justifyContent: center;
alignItems: center;
color: #475df3;

textAlign: center;

fontWeight: bold;

fontFamily: Ubuntu;
fontSize: 15px;

`;


export const DescriptionItemContainer = styled.View`

width: auto;

marginTop: -23px;
marginBottom: 5px;
paddingTop: 20px;
justifyContent: center;
alignItems: center;


`;

export const DescriptionItem = styled.Text`

fontFamily: Ubuntu;
fontSize: 18px;
width: auto;

marginTop: 10px;
marginLeft: 25px;
marginBottom: 35px;
paddingTop: 20px;
justifyContent: center;
alignItems: center;
color: rgba(72, 167, 243, 1);

textAlign: left;

`;

export const PriceProduct = styled.Text`

fontFamily: Ubuntu;
fontSize: 18px;

marginTop: -15px;
marginBottom: 10px;
paddingTop: 20px;
justifyContent: center;
alignItems: center;
color: #50fa7b;
textAlign: center;
`;

export const ViewTextAmountCart = styled.View`

top: -120px;
left: -25px;
borderRadius: 50px;
background: hotpink,
borderRadius: 15px;
width: 30px;
height: 30px;
zIndex: 7;
`;


export const TextButtonAddToCart = styled.Text`

marginTop: -15px;
paddingTop: 20px;
justifyContent: center;
alignItems: center;
color: rgba(72, 167, 243, 1);

textAlign: center;

fontWeight: bold;

fontFamily: Ubuntu;
fontSize: 15px;

flex: 1;

`;

export const AddButtonToCartProduct = styled.TouchableOpacity`

background: #50fa7b;

width: 280px;
height: 30px;
borderRadius: 15px;

alignItems: center;
marginTop: auto;
marginLeft: 8px;
marginBottom: 5px;

`;

export const ContainerIconShooppingButtonAddToCart = styled.View`

  background: #028985;
  width: 35px;
  height: 31px;
  marginLeft: -12px;
  flexDirection: row;

  alignItems: center;
  justifyContent: center;
  borderRadius: 15px;

`;

export const ProductAmount = styled.View`

  padding: 12px;
  flexDirection: row;
  alignItems: center;
  justifyContent: space-between;
  padding: 12px;

  marginTop: auto;
  marginBottom: auto;

`;

export const ProductTextAmount = styled.Text`

  color: #fff;
  marginTop: 0;
  marginLeft: 2px;
  marginRight: 0;
  marginBottom: 10px;

  fontWeight: bold;


`;
