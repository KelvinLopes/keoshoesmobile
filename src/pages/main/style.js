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
`;
