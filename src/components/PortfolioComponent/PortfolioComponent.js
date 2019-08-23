import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';

const rotate = keyframes`
from{
  transform:rotate(0deg);
}
to{
  transform:rotate(360deg);
}
`;

const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  height: 100vh;
  width: 100vw;
  position: relative;
  margin-bottom: 50px;
  @media (min-width: 1200px) {
    margin-bottom: 100px;
  }
  &:nth-of-type(4) {
    margin-bottom: 0;
  }
  .info01,
  .info02,
  .info03,
  .info04 {
    color: #fff;
    height: 100vh;
    width: 75vw;
    position: fixed;
    top: 0;
    left: 0;
    transition: 0.3s;
    background-color: #333;
    display: block;
    z-index: 16;
    opacity: 0;
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    h1 {
      margin: 20px;
      font-size: 35px;
      letter-spacing: 1px;
      font-weight: 700;
      font-family: 'Josefin Sans', sans-serif;
    }
    p {
      margin: 20px;
      font-size: 25px;
      line-height: 120%;
      font-weight: 300;
      font-family: 'Josefin Sans', sans-serif;
    }
    &.activeInfo {
      opacity: 1;
    }
  }
`;

const ContainerPhotoNumber = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  height: 100vh;
  justify-content: center;
  align-items: center;
  width: 70vw;
`;

const StyledNumber = styled.p`
  font-size: 120px;
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 2px #333;
  position: absolute;
  top: 12%;
  transform: translateY(-10%);
  right: 0;
  @media (min-width: 768px) {
    font-size: 180px;
  }
`;

const Image = styled.div`
  position: absolute;
  left: 0%;
  top: 10%;
  right: 0%;
  bottom: 0%;
  width: 85%;
  background-image: ${props => props.image};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: scroll;
  z-index: 2;
  @media (min-width: 768px) {
    width: 70%;
    top: 5%;
  }
  @media (min-width: 1400px) {
    width: 33%;
    top: 5%;
    left: 15%;
  }
`;

const StyledText = styled.p`
  position: absolute;
  font-size: 55px;
  top: 0;
  right: 0;
  font-family: 'Montserrat', sans-serif;
  transform: rotate(-90deg) translate(-55vw, -45vw);
  font-weight: 900;
  letter-spacing: 10px;
  color: #fff;
  z-index: 3;
  width: 95vw;
  @media (min-width: 1400px) {
    transform: rotate(0) translate(-50%, 0);
    top: 15%;
    left: 50%;
    font-size: 90px;
    width: 100%;
    z-index: -1;
    &.front {
      color: transparent;
      -webkit-text-stroke: 1px #fff;
      z-index: 5;
    }
  }
`;
const Circle = styled.div`
  position: absolute;
  bottom: 6%;
  right: 5%;
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
  z-index: 10;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    width: 70px;
    height: 70px;
  }
  &:hover {
    background-color: #fff;
  }
  &:hover a {
    color: #2741b7;
  }
  a {
    margin: 0 auto;
    font-weight: 300;
    letter-spacing: 5px;
    text-decoration: none;
    color: #fff;
    svg {
      color: #000;
      font-size: 20px;
      animation: ${rotate} 4s linear infinite;
      @media (min-width: 768px) {
        font-size: 25px;
      }
    }
  }
  &.second {
    right: 30%;
    z-index: 17;
  }
`;

const StyledP = styled.p`
  position: absolute;
  bottom: 45%;
  left: 25%;
  width: 60vh;
  color: #333;
  font-size: 13px;
  transform: rotate(90deg);
  letter-spacing: 2px;
  z-index: 5;
  @media (min-width: 768px) {
    left: 40%;
    font-size: 18px;
  }
  @media (min-width: 1024px) {
    left: 50%;
  }
  @media (min-width: 1200px) {
    left: 55%;
  }
  @media (min-width: 1400px) {
    bottom: 0;
    top: 50%;
    left: 40%;
    transform: rotate(90deg) translate(-25vh, 0vh);
    font-size: 20px;
    font-weight: 700;
  }
  @media (min-width: 1600px) {
    left: 50%;
  }
  @media (min-width: 1800px) {
    left: 65%;
  }
`;

const StyledDots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  bottom: 6%;
  left: 5%;
  span {
    width: 5px;
    height: 5px;
    background-color: #fff;
    border-radius: 50%;
    margin-bottom: 5px;
    &.active {
      background-color: #000;
    }
  }
`;

const CircleButton = styled.button`
  border: none;
  position: absolute;
  bottom: 6%;
  right: 6%;
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    width: 70px;
    height: 70px;
  }
  p {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 900;
    letter-spacing: 1px;
    margin: 0 auto;
    font-size: 16px;
    animation: ${rotate} 4s linear infinite;
    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
`;

class PortfolioComponent extends Component {
  state = {
    activeButton: false,
  };

  handleActiveInfo = e => {
    const info1 = document.querySelector('.info01');
    const info2 = document.querySelector('.info02');
    const info3 = document.querySelector('.info03');
    const info4 = document.querySelector('.info04');
    const button = document.querySelector('.hamburger');
    document.body.classList.toggle('noscroll');
    this.setState(prevState => ({
      activeButton: !prevState.activeButton,
    }));

    switch (e.target.classList[0] || e.currentTarget.classList[0]) {
      case 'button01':
        info1.classList.toggle('activeInfo');
        button.classList.toggle('noview');
        break;
      case 'button02':
        info2.classList.toggle('activeInfo');
        break;
      case 'button03':
        info3.classList.toggle('activeInfo');
        break;
      case 'button04':
        info4.classList.toggle('activeInfo');
        break;
      default:
        this.setState(prevState => ({
          activeButton: !prevState.activeButton,
        }));
    }
  };

  render() {
    const { activeButton } = this.state;
    const {
      project,
      number,
      aboutProject,
      link,
      technologies,
      isActive1,
      isActive2,
      isActive3,
      isActive4,
      imageUrl,
    } = this.props;
    return (
      <Container>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce>
          <ContainerPhotoNumber>
            <Image image={imageUrl} />
            <StyledNumber>{number}</StyledNumber>
            <StyledText className="front">{project}</StyledText>
            <StyledText>{project}</StyledText>
          </ContainerPhotoNumber>
        </ScrollAnimation>
        <CircleButton
          onClick={this.handleActiveInfo}
          style={{ zIndex: activeButton ? '26' : '1' }}
          className={`button${number}`}
        >
          <p>{activeButton ? 'X' : 'Info'}</p>
        </CircleButton>
        <div className={`info${number}`}>
          <h1>{project}</h1>
          <p>{aboutProject}</p>
        </div>
        <Circle className="second">
          <a href={link}>
            <FontAwesomeIcon icon={faCode} />
          </a>
        </Circle>
        <StyledP>{technologies}</StyledP>
        <StyledDots>
          <span className={isActive1} />
          <span className={isActive2} />
          <span className={isActive3} />
          <span className={isActive4} />
        </StyledDots>
      </Container>
    );
  }
}

PortfolioComponent.propTypes = {
  project: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  aboutProject: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
  isActive1: PropTypes.string,
  isActive2: PropTypes.string,
  isActive3: PropTypes.string,
  isActive4: PropTypes.string,
};

PortfolioComponent.defaultProps = {
  isActive1: '',
  isActive2: '',
  isActive3: '',
  isActive4: '',
};

export default PortfolioComponent;
