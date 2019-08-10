import React, { Component } from 'react';
import { Tween } from 'react-gsap';
import styled from 'styled-components';

const StyledBox = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 9999;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledH3 = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  z-index: 8000;
  background-color: transparent;
  font-size: 150px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  transform: translateX(-40%) rotate(90deg);
  overflow: hidden;
`;

const StyledSecondH3 = styled(StyledH3)`
  transform: translateX(-50%) rotate(90deg);
  -webkit-text-stroke: 2px #000;
  color: transparent;
  top: 30%;
  right: 50%;
  width: 100%;
  overflow: initial;
`;

class LoadingScreenView extends Component {
  state = {};

  handleUnmount = () => {
    const box = document.querySelector('.box');
    box.style.display = 'none';
  };

  render() {
    return (
      <Tween
        from={{ opacity: 1 }}
        to={{ opacity: 0 }}
        duration={0.9}
        delay={1.5}
        onComplete={this.handleUnmount}
      >
        <StyledBox className="box">
          <Tween from={{ y: '-100%' }} to={{ y: '100%' }} duration="5">
            <StyledH3>MARCEL</StyledH3>
          </Tween>
          <Tween from={{ y: '100%' }} to={{ y: '-100%' }} duration="5">
            <StyledSecondH3>BEDNARZ</StyledSecondH3>
          </Tween>
        </StyledBox>
      </Tween>
    );
  }
}

export default LoadingScreenView;
