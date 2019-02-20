import React, { Component } from 'react';
import styled from 'styled-components';

import MenuBar from './MenuBar';
import headerImg from '../images/header.jpg';

const HeaderCon = styled.header`
  background: url(${headerImg}) bottom center no-repeat;
  background-size: 100%;
  min-height: 500px;
  @media (max-width: 800px){
    min-height: 400px;
    background-size: cover;
  }
`

const HeaderTitle = styled.div`
  width: 100%;
  max-width: 400px;
  text-transform: uppercase;
  margin: 0 auto;
  padding: 150px 20px;
  background: rgba(0,0,0,0.3);
  color: #ffffff;
  font-weight: bold;
  letter-spacing: 8px;
  font-size: 3rem;
  text-align: center;
  @media (max-width: 800px){
    max-width: 80%;
    padding: 100px 20px;
    margin-top: 20px;
  }
  @media (max-width: 500px){

    padding: 50px 20px;
  }
`

class Header extends Component {
  
  render() {
    return (
      <HeaderCon>
        <MenuBar />
        <HeaderTitle>{this.props.title}</HeaderTitle>
      </HeaderCon>
    );
  }
}

export default Header;
