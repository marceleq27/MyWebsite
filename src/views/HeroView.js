import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import CanvasDots from '../components/CanvasDots/CanvasDots';
import zdj2 from '../utils/zdj2.jpg';
import logo from '../utils/Logo4.png';

const animation = keyframes`
    0%{
        transform:translateX(150%);
    }

    100%{
        transform:translateX(-100vw);
    }
`;

const StyledSection = styled.section`
  position: relative;
  text-align: center;
  height: 100vh;
  width: 100vw;
  z-index: 5;
`;

const Developer = styled.p`
  position: absolute;
  top: 80%;
  font-size: ${({ theme }) => theme.h2};
  text-align: center;
  width: 100%;
  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.h1};
  }
  @media (min-width: 1200px) {
    top: 85%;
  }
  @media (min-width: 1600px) {
    top: 90%;
  }
`;

const StyledDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 30vh;
  background-image: url(${zdj2});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media (min-width: 768px) {
    height: 40vh;
  }
  @media (min-width: 1200px) {
    height: 60vh;
  }
  @media (min-width: 1600px) {
    height: 70vh;
  }
  h1 {
    padding: 0 5%;
    font-weight: 700;
    position: absolute;
    font-size: 500%;
    top: 0;
    right: 0;
    transform: translateY(-75%);
    width: 100%;
    letter-spacing: 3px;
    text-align: left;
    font-family: 'Kanit', sans-serif;
    line-height: 100%;
    @media (min-width: 1200px) {
      width: 85%;
    }
    @media (min-width: 1600px) {
      font-size: 650%;
    }
  }
  p {
    display: none;
    font-weight: 700;
    position: absolute;
    font-size: 70px;
    bottom: 0;
    right: 75%;
    transform: translateY(50%);
    z-index: 11;
    color: transparent;
    -webkit-text-stroke: 2px #000;
    @media (min-width: 412px) {
      display: block;
    }
    @media (min-width: 768px) {
      font-size: 100px;
    }
    @media (min-width: 1024px) {
      font-size: 150px;
    }
    @media (min-width: 1600px) {
      right: 70%;
    }
  }
  button {
    position: absolute;
    bottom: 0;
    right: 5%;
    transform: translateY(70%);
    padding: 20px;
    background-color: #000;
    border: none;
    font-size: ${({ theme }) => theme.p};
    font-family: 'Josefin Sans', sans-serif;
    letter-spacing: 2px;
    font-weight: 300;
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
    @media (min-width: 1600px) {
      right: 15%;
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
      <StyledDiv>
        <h1>Marcel Bednarz</h1>
        <p>00</p>
        <button type="button">
          <Link to="/about">Sprawdź moje projekty</Link>
        </button>
      </StyledDiv>
      <Developer>Front-End Developer</Developer>
      {IDs.map(item => (
        <StyledP key={item}>Chciałbym zostać junior frontend developerem!</StyledP>
      ))}
      <CanvasDots />
    </StyledSection>
  );
};

export default HeroView;
