import styled from 'styled-components';

export const BodyPageHome = styled.View`

background:rgba(30, 33, 41, 1);
height: auto;
alignItems: center;
justifyContent: center;
flexDirection: row;

width: auto;
zIndex: 5;

`;

export const TotalHeader = styled.View`

backgroundColor: rgba(30, 33, 41, 1);
height: 50px;
alignItems: center;
justifyContent: center;
flexDirection: row;
marginTop: 0;
textAlign: center;
zIndex: 5;

width: auto;
`;

export const TotalItemsCart = styled.View`

backgroundColor: rgba(30, 33, 41, 1);
height: 50px;
alignItems: center;
justifyContent: center;
flexDirection: row;
marginTop: 0;
textAlign: center;
zIndex: 5;

width: auto;
`;

export const Scroll = styled.ScrollView.attrs({

  showsHorizontalScrollIndicator: false,

})`
height: auto;
marginTop: 0;
background: rgba(30, 33, 41, 1);
`;

export const CardProductsContainer = styled.View`

width: auto;
height: auto;

marginTop: 30px;
marginBottom: 30px;
alignItems: center;
justifyContent: center;
position: relative;

flexDirection: column;

`;


export const CardProducts = styled.View`


marginTop: 0;
marginBottom: 30px;
marginLeft: 20px;
marginRight: 20px;
background: rgba(0, 0, 0, 0.5);

width: 320px;
height: 400px;

border: 0.8px;
borderRadius: 15px;
borderColor: rgba(21, 206, 188, 1);
alignItems: center;
justifyContent: center;
position: relative;

flexDirection: column;

`;


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

export const PriceProduct = styled.Text`

fontFamily: Ubuntu;
fontSize: 18px;

marginTop: -15px;
marginBottom: 10px;
paddingTop: 20px;
justifyContent: center;
alignItems: center;
color: #50fa7b;
`;


export const ProductControls = styled.View`

background: #50fa7b;

width: 300px;
height: 35px;
borderRadius: 15px;

alignItems: center;
marginTop: auto;
marginBottom: 5px;

flexDirection: row;

`;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true
})`

  background: #d1d1d1;
  padding: 5px;
  borderRadius: 4px;
  minWidth: 52px;

  textAlign: center;
  color:#475df3 ;
  fontWeight: bold;
  fontSize: 20px;
  marginLeft: 5px;
  marginRight: 5px;

`;

export const ButtonControlsProductAmount = styled.TouchableOpacity``;

export const ButtonControlsProductDelete = styled.TouchableOpacity``;


export const GroupControlsAddAndRemove = styled.View`

  background: transparent;
  width: auto;
  marginLeft: 18px
  flexDirection: row;
`;

export const TextAmount = styled.Text`

  alignItems: center;
  justifyContent: center;
  color: #475df3;
  fontSize: 20px;

`;

export const TextSubTotal = styled.Text`

  alignItems: center;
  justifyContent: center;
  color: rgba(72, 167, 243, 1);
  fontSize: 20px;

`;

export const NumberSubtotal = styled.Text`

  alignItems: center;
  justifyContent: center;
  color:#475df3 ;
  fontSize: 25px;

`;


export const TextTotalItemsCart = styled.Text`

  alignItems: center;
  justifyContent: center;
  textAlign: center;

  fontSize: 20px;
  fontFamily: Ubuntu;
  color: rgba(72, 167, 243, 1);
  marginTop: 5px;
`;


export const TextTotalValue = styled.Text`

  alignItems: center;
  justifyContent: center;
  textAlign: center;

  fontSize: 28px;
  fontFamily: Ubuntu;
  color: #50fa7b;
  marginTop: 5px;
`;

export const TextUnicValue = styled.Text`

alignItems: center;
justifyContent: center;
color: rgba(72, 167, 243, 1);
fontSize: 18px;
marginTop: 10px;

`;

export const SpaceDelete = styled.View`

  background: transparent;
  width: 60px;
  flexDirection: row;
`;

export const EmptyCart = styled.View`

  alignItems: center;
  justifyContent: center;
  flexDirection: column;
  marginTop: 130px;
`;
