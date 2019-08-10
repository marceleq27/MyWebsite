import React, { Component } from 'react';
import styled from 'styled-components';
import '../../utils/hamburgers.css';

const StyledHamburger = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;

const StyledP = styled.p`
  display: inline-block;
  margin-left: 10px;
  text-align: center;
  font-weight: 400;
`;

class Hamburger extends Component {
  state = {};

  handleClick = () => {
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('is-active');
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
        <StyledP>Menu</StyledP>
      </StyledHamburger>
    );
  }
}

export default Hamburger;
