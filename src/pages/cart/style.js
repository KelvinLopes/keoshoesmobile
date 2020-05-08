import styled from 'styled-components';

import logo from '../../assets/images/logo.png';


export const BodyPageHome = styled.View`

background: #282a36;
height: 800px;
alignItems: center;
flexDirection: row;

width: auto;

`;

export const CardProductsContainer = styled.View`

width: auto;
height: 250px;

marginTop: 190px;
marginBottom: 30px;
alignItems: center;
justifyContent: center;
position: relative;

flexDirection: column;

`;

export const CardProducts = styled.View`


marginTop: 120px;
marginBottom: 540px;
marginLeft: 20px;
marginRight: 20px;
background: rgba(0, 0, 0, 0.5);

width: 320px;
height: 400px;

border: 0.8px;
borderRadius: 15px;
borderColor: #50fa7b;
alignItems: center;
justifyContent: center;
position: relative;

flexDirection: column;

`;


export const ImageProduct = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`

/*width: 220px;
height: 170px;*/

width: 200px;
height: 25px;

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
export const GroupControlsAddAndRemove = styled.View`

  background: transparent;
  width: auto;
  marginLeft: 18px
  flexDirection: row;
`;


export const TextTotal = styled.Text`

  alignItems: center;
  justifyContent: center;
  color:#475df3 ;
  fontSize: 35px;

`;

export const TextTotalValue = styled.Text`

  alignItems: center;
  justifyContent: center;

  fontSize: 30px;
  fontFamily: Ubuntu;
  color: #50fa7b;

`;

export const TotalValueProduct = styled.View`

  background: transparent;
  width: 200;
  alignItems: center;
  flexDirection: column;
  marginTop: 40px;
`;

export const SpaceDelete = styled.View`

  background: transparent;
  width: 120px;
  flexDirection: row;
`;
