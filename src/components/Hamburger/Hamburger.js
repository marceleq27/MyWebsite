import React, { Component } from 'react';
import styled from 'styled-components';
import '../../theme/hamburgers.css';
import PropTypes from 'prop-types';

const StyledHamburger = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 19;
  transition: 0.3s;
`;

class Hamburger extends Component {
  state = {};

  render() {
    const { clickFunc } = this.props;
    return (
      <StyledHamburger
        className="hamburger hamburger--spring"
        type="button"
        onClick={() => clickFunc(this)}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </StyledHamburger>
    );
  }
}
Hamburger.propTypes = {
  clickFunc: PropTypes.func.isRequired,
};
export default Hamburger;
