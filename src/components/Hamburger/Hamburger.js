import React, { Component } from 'react';
import styled from 'styled-components';
import '../../theme/hamburgers.css';

const StyledHamburger = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 21;
`;

class Hamburger extends Component {
  state = {};

  handleClick = () => {
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('is-active');
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
    // const menu = document.querySelector('.menu');
    // menu.classList.toggle('active');
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
      </StyledHamburger>
    );
  }
}

export default Hamburger;
