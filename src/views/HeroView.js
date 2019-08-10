import React from 'react';
import styled, { keyframes } from 'styled-components';
import zdj2 from '../utils/zdj2.jpeg';
import Hamburger from '../components/Hamburger/Hamburger';
import logo from '../utils/Logo4.png';

const animation = keyframes`
    0%{
        transform:translateX(-150%);
    }

    100%{
        transform:translateX(150%);
    }
`;

const StyledSection = styled.section`
  position: absolute;
  text-align: center;
  height: 100vh;
  width: 100vw;
  z-index: 5;
  text-align: center;
  h1 {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    position: absolute;
    font-size: 45px;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-text-stroke: 2px #000;
    z-index: 15;
    width: 100%;

    &::first-letter {
      font-size: 60px;
      color: transparent;
    }
  }
`;
const StyledImage = styled.img`
  opacity: 0.9;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  max-width: 80%;
  height: auto;
  z-index: 10;
  display: block;
`;
const Number = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  position: absolute;
  font-size: 100px;
  top: 80%;
  left: 20%;
  transform: translate(-50%, -50%);
  z-index: 5;
  color: transparent;
  -webkit-text-stroke: 2px #000;
  width: 100%;
`;
const StyledButton = styled.button`
  padding: 20px;
  background-color: #000;
  position: relative;
  border: none;
  color: #fff;
  font-size: 15px;
  font-family: 'Josefin Sans', sans-serif;
  letter-spacing: 2px;
  font-weight: 300;
  top: 85%;
  left: 15%;
  text-align: right;
  transition: 0.2s;
  z-index: 5;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    color: #000;
  }
  &::after {
    content: '';
    clear: both;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(100%);
    height: 100%;
    width: 100%;
    background-color: #fff;
    z-index: -1;
    transition: 0.2s;
  }
  &:hover::after {
    transform: translateY(0);
  }
`;

const StyledP = styled.p`
  position: absolute;
  bottom: 1%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  font-size: 11px;
  width: 100%;
  animation: ${animation} 8s linear infinite;
`;

const StyledLogo = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  max-width: 50%;
  height: 54px;
  margin: 15px 0 0 30px;
`;

const HeroView = () => {
  return (
    <StyledSection>
      <StyledLogo src={logo} alt="fdfsfs" />
      <Hamburger />
      <StyledImage src={zdj2} alt="sddfsfsdadfdsfada" />
      <h1>Hi, I&apos;m Marcel.</h1>
      <Number>01</Number>
      <StyledButton>Look at my projects</StyledButton>
      <StyledP>I want to be a junior frontend developer!</StyledP>
    </StyledSection>
  );
};

export default HeroView;
