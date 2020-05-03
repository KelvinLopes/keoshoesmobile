import styled from 'styled-components';

export const Header = styled.View`

  flex: 1;
  width: auto;
  height: 100px;

  background: #999;
  flexDirection: column;
  alignItems: center;
  justifyContent: space-between;

  marginBottom: 0;
  top: 30px;

`;


export const Icon = styled.View`

  flex: 1;
  width: auto;
  height: 200px;

  background: transparent;
  flexDirection: column;
  alignItems: flex-start;

  marginBottom: 0;
  marginTop: -45px;
  marginLeft: 230px;
  position: relative;

`;


export const Logo = styled.View`

  flex: 1;
  width: auto;
  height: 200px;

  background: #999;
  flexDirection: row;
  alignItems: flex-start;


  marginBottom: 0;
  marginTop: 0;
  position: absolute;

`;
