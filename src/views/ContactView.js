import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faTimes } from '@fortawesome/free-solid-svg-icons';

const animation = keyframes`
 0%{
   opacity:0;
 }
 30%{
   opacity:1;
 }
 35%{
   opacity:0;
 }
 100%{
   opacity:0;
 }
`;

const rotate = keyframes`
from{
  transform:rotate(0deg);
}
to{
  transform:rotate(360deg);
}
`;

const StyledSection = styled.section`
  height: 80vh;
  background-color: #1c1c1c;
  position: relative;
  overflow: hidden;
  h1 {
    text-align: center;
    color: #fff;
    opacity: 0.1;
    font-size: 180px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  p {
    text-align: center;
    color: transparent;
    -webkit-text-stroke: 0.5px #f2f2f2;
    font-weight: 900;
    font-family: 'Montserrat', sans-serif;
    font-size: 38px;
    position: absolute;
    top: 50%;
    left: 50%;
    text-transform: uppercase;
    transform: translate(-50%, -50%);
    line-height: 130%;
    span {
      position: absolute;
      transform: translateX(-50%);
      width: 100vw;
      opacity: 1;
      letter-spacing: 1px;
      &:nth-of-type(1) {
        animation: ${animation} 9s infinite both;
      }
      &:nth-of-type(2) {
        animation: ${animation} 9s 3s infinite both;
      }
      &:nth-of-type(3) {
        animation: ${animation} 9s 6s infinite both;
      }
    }
  }
  h2 {
    color: #f2f2f2;
    font-size: 200px;
    font-weight: 700;
    letter-spacing: 10px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
  }
`;

const StyledFooter = styled.footer`
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 10px;
  border: 2px solid #1c1c1c;
  border-radius: 50%;
  animation: ${rotate} 5s linear infinite;
  cursor: pointer;
  transition: 0.3s;
  &:hover svg {
    transform: scale(2);
  }
  &:hover {
    padding: 25px;
  }
  svg {
    transition: 0.3s;
    padding: 5px;
    font-size: 35px;
    color: #1c1c1c;
  }
`;

const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 20vh;
  background-color: #1c1c1c;
  border-top: 2px solid #1c1c1c;
  color: #fff;
  width: 100%;
  text-align: center;
  padding: 5px 0;
  font-size: 15px;
  font-family: 'Montserrat', sans-serif;
  transition: 0.3s;
  opacity: 0;
  z-index: -1;
  &.active {
    opacity: 1;
    z-index: 5;
    section {
      overflow: visible;
    }
  }
  .close {
    border: none;
    background-color: transparent;
    color: #fff;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 20px;
    svg {
      font-size: 30px;
    }
  }
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    font-size: 20px;
  }
`;

class ContactView extends Component {
  state = {};

  handleEmail = () => {
    const mail = document.querySelector('.mail');
    mail.classList.toggle('active');
  };

  handlePhone = () => {
    const phone = document.querySelector('.phone');
    phone.classList.toggle('active');
  };

  render() {
    return (
      <>
        <StyledSection>
          <h1>PO</h1>
          <p>
            <span>rozmawiajmy.</span>
            <span>pracujmy.</span>
            <span>znajmy się.</span>
          </p>
          <h2>MB</h2>
        </StyledSection>
        <StyledFooter>
          <StyledButton type="button" onClick={this.handleEmail}>
            <FontAwesomeIcon icon={faEnvelope} />
          </StyledButton>
          <StyledButton type="button" onClick={this.handlePhone}>
            <FontAwesomeIcon icon={faPhone} />
          </StyledButton>
          <StyledDiv className="mail">
            <p>marcel.bednarz16@gmail.com</p>
            <button type="button" className="close" onClick={this.handleEmail}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </StyledDiv>
          <StyledDiv className="phone">
            <p>+48 696 533 998</p>
            <button type="button" className="close" onClick={this.handlePhone}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </StyledDiv>
        </StyledFooter>
      </>
    );
  }
}

export default ContactView;
