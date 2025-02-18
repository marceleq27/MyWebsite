import React, { Component } from 'react';
import { Tween } from 'react-gsap';
import styled from 'styled-components';

const StyledBox = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 9999;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledH3 = styled.h3`
  position: fixed;
  top: 50%;
  left: 50%;
  text-align: center;
  z-index: 8000;
  background-color: transparent;
  font-size: 150px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  transform: translateX(-40%) rotate(90deg);
`;

const StyledSecondH3 = styled(StyledH3)`
  transform: translateX(-50%) rotate(90deg);
  -webkit-text-stroke: 2px #000;
  color: transparent;
  top: 30%;
  right: 50%;
  width: 100%;
`;

class LoadingScreenView extends Component {
  state = {};

  render() {
    return (
      <Tween
        from={{ opacity: 1 }}
        to={{ opacity: 0, zIndex: -1, display: 'none' }}
        duration={0.9}
        delay={1.5}
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
