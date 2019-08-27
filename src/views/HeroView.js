import React from 'react';
import styled, { keyframes } from 'styled-components';
import CanvasDots from '../components/CanvasDots/CanvasDots';
import zdj2 from '../utils/zdj2.jpeg';
import logo from '../utils/Logo4.png';

const animation = keyframes`
    0%{
        transform:translateX(-150%);
    }

    100%{
        transform:translateX(100vw);
    }
`;

const StyledSection = styled.section`
  position: relative;
  text-align: center;
  height: 100vh;
  width: 100vw;
  z-index: 5;
  text-align: center;
  max-width: 1600px;
  margin: 0 auto;
  h1 {
    font-weight: 700;
    position: absolute;
    font-size: 45px;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 10px 0;
    z-index: 15;
    width: 100%;
    @media (min-width: 768px) {
      font-size: 70px;
      padding: 13px 0;
    }
  }
`;
const StyledImage = styled.img`
  opacity: 0.9;
  position: absolute;
  top: 45%;
  left: 60%;
  transform: translate(-50%, -50%);
  max-width: 80%;
  height: auto;
  z-index: 10;
  display: block;
  @media (min-width: 768px) {
    max-width: 60%;
    opacity: 1;
    left: 70%;
  }
  @media (min-width: 1024px) {
    transform: translate(-50%, -50%);
    height: 70vh;
    max-width: 100%;
  }
  @media (min-width: 1400px) {
    height: 100vh;
  }
`;
const Number = styled.p`
  font-weight: 700;
  position: absolute;
  font-size: 100px;
  top: 75%;
  left: 20%;
  transform: translate(-50%, -50%);
  z-index: 5;
  color: transparent;
  -webkit-text-stroke: 2px #000;
  width: 100%;
  @media (min-width: 768px) {
    font-size: 130px;
  }
`;
const StyledButton = styled.button`
  padding: 20px;
  background-color: #000;
  position: absolute;
  border: none;
  font-size: 15px;
  font-family: 'Josefin Sans', sans-serif;
  letter-spacing: 2px;
  font-weight: 300;
  bottom: 13%;
  right: 5%;
  text-align: right;
  transition: 0.2s;
  z-index: 5;
  overflow: hidden;
  z-index: 10;
  cursor: pointer;
  @media (min-width: 768px) {
    font-size: 25px;
    padding: 25px;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  &:hover a {
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
  position: fixed;
  bottom: 2%;
  left: 0;
  text-align: center;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  font-size: 11px;
  width: 100vw;
  animation: ${animation} 20s linear infinite both;
  &:nth-of-type(2) {
    animation: ${animation} 20s 5s linear infinite both;
  }
  &:nth-of-type(3) {
    animation: ${animation} 20s 10s linear infinite both;
  }
  &:nth-of-type(4) {
    animation: ${animation} 20s 15s linear infinite both;
  }
`;

const StyledLogo = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  max-width: 50%;
  height: 54px;
  margin: 15px 0 0 30px;
  @media (min-width: 768px) {
    height: 70px;
  }
  @media (min-width: 1024px) {
    margin: 30px 0 0 45px;
  }
`;

const HeroView = () => {
  const IDs = [1, 2, 3, 4];
  return (
    <StyledSection>
      <StyledLogo src={logo} alt="logo" />
      <StyledImage src={zdj2} alt="me" />
      <h1>Hi, I&apos;m Marcel.</h1>
      <Number>00</Number>
      <StyledButton>
        <a href="/about">Look at my projects</a>
      </StyledButton>
      {IDs.map(item => (
        <StyledP key={item}>I want to be a junior frontend developer!</StyledP>
      ))}
      <CanvasDots />
    </StyledSection>
  );
};

export default HeroView;
