import styled from 'styled-components';

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

export const GroupItems = styled.View`

marginTop: -130px;
flexDirection: row;
alignItems: center;
justifyContent: center;
position: relative;
padding: 20px 30px;
zIndex: 4;

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

export const TextAmountCart = styled.Text`

fontFamily: Ubuntu;
fontSize: 18px;
textAlign: center;


marginTop: -18px;
marginBottom: 10px;
paddingTop: 20px;
justifyContent: center;
alignItems: center;
color: #fff;
`;
