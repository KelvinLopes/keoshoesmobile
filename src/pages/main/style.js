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

export const CardProductsContainer = styled.View`

width: auto;
height: 250px;


alignItems: center;
justifyContent: space-between;
position: relative;

flexDirection: row;

`;

export const CardProducts = styled.View`


marginTop: 120px;
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

margin-top: 0;

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
marginRight: 0;
position: relative;
borderRadius: 15px;

`;



export const TextProductTitle = styled.Text`

marginTop: 0;
paddingTop: 20px;
justifyContent: center;
alignItems: center;
color: #475df3;

textAlign: center;

fontWeight: bold;

fontFamily: Ubuntu;
fontSize: 15px;

`;


export const ToDescriptionItem = styled.Text`

fontFamily: Ubuntu;
fontSize: 18px;


marginTop: 20px;
paddingTop: 20px;
justifyContent: center;
alignItems: center;
color: #50fa7b;
`;
