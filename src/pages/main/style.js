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

background: #282a36;
height: 800px;
alignItems: center;
flexDirection: row;

width: auto;

`;

export const CardProducts = styled.View`


marginTop: -200px;
marginBottom: 200px;
marginLeft: 20px;
background: #343746;

width: 300px;
height: 250px;

border: 0.8px;
borderRadius: 15px;
borderColor: #50fa7b;
alignItems: center;
justifyContent: center;
position: relative;

flexDirection: column;
`;


export const List = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
  showHorizontalScrollIndicator: false,
})`
  marginTop: 0;
`


export const CardProductsContainer = styled.View`

width: 300px;
height: 250px;


alignItems: center;
justifyContent: center;
position: relative;

flexDirection: column;
`;

export const ImageProduct = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`

width: 190px;
height: 25px;

flexDirection: row;
alignItems: center;
background: transparent;
justifyContent: center;


marginBottom: 80px;
marginTop: 80px;
marginRight: 0;
position: relative;

`;
