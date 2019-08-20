import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Hamburger from '../components/Hamburger/Hamburger';

const animateOpacity = keyframes`
from{
  opacity:0;
}
top{
  opacity:0;
}
`;

const StyledNavigation = styled.nav`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: -100;
  opacity: 0;
  transition: 0.3s;
  background-color: #000;
  &.active {
    opacity: 1;
    z-index: 18;
  }
  &.active li {
    animation: ${animateOpacity} 0.3s 0.2s linear both;
    &:nth-of-type(2) {
      animation: ${animateOpacity} 0.3s 0.35s linear both;
    }
    &:nth-of-type(3) {
      animation: ${animateOpacity} 0.3s 0.5s linear both;
    }
    &:nth-of-type(4) {
      animation: ${animateOpacity} 0.3s 0.65s linear both;
    }
  }
  &.active .socials {
    animation: ${animateOpacity} 0.3s 0.8s linear both;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    font-weight: 700;
    li {
      padding: 10px 0;
      font-size: 45px;
      width: 100vw;
      text-align: center;
      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }
`;

const StyledDiv = styled.div`
  position: absolute;
  bottom: 5%;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  button {
    background-color: transparent;
    padding: 10px;
    margin-bottom: 30px;
    border: none;
    position: relative;
    overflow: hidden;
    margin: 10px;
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
    a {
      text-decoration: none;
      color: #fff;
      font-weight: 300;
      letter-spacing: 5px;
      font-size: 14px;
    }
  }
`;

class NavigationView extends Component {
  state = {};

  handleActiveState = () => {
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('is-active');
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
  };

  render() {
    return (
      <>
        <Hamburger clickFunc={() => this.handleActiveState(this)} />
        <StyledNavigation>
          <ul>
            <li>
              <NavLink to="/" href="#section1" onClick={this.handleActiveState}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/information" href="#section2" onClick={this.handleActiveState}>
                About me
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" href="#section3" onClick={this.handleActiveState}>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" href="#section4" onClick={this.handleActiveState}>
                Contact
              </NavLink>
            </li>
          </ul>
          <StyledDiv className="socials">
            <button type="button">
              <a href="https://github.com/marceleq27" target="_blank" rel="noopener noreferrer">
                GITHUB
              </a>
            </button>
            <button type="button">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                LINKEDIN
              </a>
            </button>
          </StyledDiv>
        </StyledNavigation>
      </>
    );
  }
}

export default NavigationView;
