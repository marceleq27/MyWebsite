import React, { Component } from 'react';
import styled from 'styled-components';
import '../../theme/hamburgers.css';

const StyledHamburger = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 50;
`;

const StyledP = styled.p`
  display: inline-block;
  margin-left: 10px;
  text-align: center;
  font-weight: 400;
  color: #000;
  &.active {
    color: #fff;
  }
`;

class Hamburger extends Component {
  state = {};

  handleClick = () => {
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('is-active');
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }));
  };

  render() {
    return (
      <StyledHamburger
        className="hamburger hamburger--spring"
        type="button"
        onClick={this.handleClick}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
        <StyledP className="menu">Menu</StyledP>
      </StyledHamburger>
    );
  }
}

export default Hamburger;
