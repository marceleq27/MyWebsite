import React from 'react';
import styled, { keyframes } from 'styled-components';

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

const StyledSection = styled.section`
  height: 70vh;
  background-color: #1c1c1c;
  position: relative;
  overflow: hidden;
  h1 {
    text-align: center;
    color: #fff;
    opacity: 0.3;
    font-size: 100px;
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
  }
  p {
    text-align: center;
    color: transparent;
    -webkit-text-stroke: 0.5px #f2f2f2;
    font-weight: 900;
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    text-transform: uppercase;
    transform: translate(-40%, -60%);
    line-height: 130%;
    span {
      position: absolute;
      transform: translate(-40%, -60%);
      width: 100vw;
      opacity: 1;
      letter-spacing: 2px;
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

const ContactView = () => {
  return (
    <StyledSection>
      <h1>PO</h1>
      <p>
        <span>rozmawiajmy.</span>
        <span>pracujmy.</span>
        <span>znajmy się.</span>
      </p>
      <h2>MB</h2>
    </StyledSection>
  );
};

export default ContactView;
