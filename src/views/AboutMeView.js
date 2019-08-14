import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faCode, faTimes } from '@fortawesome/free-solid-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';
import '../theme/animate.css';
import comnet from '../utils/comnet1.png';
import conventer from '../utils/conventer.png';
import weather from '../utils/weather.png';
import grawernia from '../utils/grawernia.png';
import LoadingScreen from './LoadingScreenView';
import PortfolioComponent from '../components/PortfolioComponent/PortfolioComponent';

const rotate = keyframes`
from{
  transform:rotate(0deg);
}
to{
  transform:rotate(360deg);
}
`;

const StyledSection = styled.section`
  background-color: #1c1c1c;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  margin-bottom: 50px;
  &:nth-of-type(4) {
    margin-bottom: 0;
  }
  .info {
    color: #fff;
    height: 100vh;
    width: 100vw;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;
    justify-content: center;
    top: 0;
    left: 0;
    transition: 0.3s;
    background-color: #333;
    transform: translateX(100%);
    display: block;
    h1 {
      position: absolute;
      top: 15%;
      left: 0;
      transform: translateY(-50%);
      margin: 20px 20px 0;
      font-size: 45px;
      letter-spacing: 1px;
      font-weight: 700;
      font-family: 'Josefin Sans', sans-serif;
    }
    p {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      margin: 20px;
      font-size: 25px;
      line-height: 120%;
      font-weight: 300;
      font-family: 'Josefin Sans', sans-serif;
    }
    &.activeInfo {
      z-index: 5;
      transform: translateX(0);
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

  p {
    font-size: 120px;
    font-weight: 900;
    color: transparent;
    -webkit-text-stroke: 2px #333;
    position: absolute;
    top: 12%;
    transform: translateY(-10%);
    right: 0;
  }
`;

const Image = styled.div`
  position: absolute;
  left: 0%;
  top: 10%;
  right: 0%;
  bottom: 0%;
  width: 85%;
  background-image: ${props => props.two || props.three || props.four || `url(${comnet})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: scroll;
  z-index: 2;
`;

const StyledText = styled.p`
  position: absolute;
  font-size: 55px;
  top: ${props => props.topSecond || props.topThird || props.topFourth || '25%'};
  right: ${props => props.rightSecond || props.rightThird || props.rightFourth || '40%'};
  font-family: 'Montserrat', sans-serif;
  transform: rotate(-90deg) translateY(-50%);
  font-weight: 900;
  letter-spacing: 10px;
  color: #fff;
  z-index: 3;
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
    }
  }
  &.second {
    right: 25%;
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

  svg {
    color: #000;
    font-size: 20px;
    animation: ${rotate} 4s linear infinite;
  }
`;

class AboutMeView extends Component {
  state = {
    activeButton: false,
    isLoaded: false,
  };

  componentDidMount() {
    this.setState(prevState => ({
      isLoaded: !prevState.isLoaded,
    }));
  }

  handleActiveInfo = () => {
    const button = document.querySelector('.info');
    button.classList.toggle('activeInfo');
    document.body.classList.toggle('noscroll');
    this.setState(prevState => ({
      activeButton: !prevState.activeButton,
    }));
  };

  render() {
    const { activeButton, isLoaded } = this.state;
    return (
      <StyledSection>
        {isLoaded ? '' : <LoadingScreen />}
        <PortfolioComponent
          project="Comnet"
          number="01"
          aboutProject="lorem ipsum dolor sit amet"
          top="25%"
          right="40%"
          link="http://www.com-net.com.pl/"
          imageUrl={`url(${comnet})`}
          technologies="ANIMATIONS | REACT | STYLED COMPONENTS"
          isActive1="active"
        />
        {/* <Container>
          <ContainerPhotoNumber>
            <Image />
            <p>01</p>
          </ContainerPhotoNumber>
          <StyledText>COMNET</StyledText>
          <StyledText className="front">COMNET</StyledText>
          <CircleButton
            onClick={this.handleActiveInfo}
            style={{ zIndex: activeButton ? '26' : '1' }}
          >
            <FontAwesomeIcon icon={activeButton ? faTimes : faInfo} />
          </CircleButton>
          <div className="info">
            <h1>ComNet</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est obcaecati, quasi veniam
              unde asperiores, fuga fugit esse cupiditate, minima nam ratione ipsam? Optio tenetur
              voluptates quidem odio quis earum illo.
            </p>
          </div>
          <Circle className="second">
            <a href="http://com-net.com.pl">
              <FontAwesomeIcon icon={faCode} />
            </a>
          </Circle>
          <StyledP>ANIMATIONS | REACT | STYLED COMPONENTS</StyledP>
          <StyledDots>
            <span className="active" />
            <span />
            <span />
            <span />
          </StyledDots>
        </Container> */}
        <Container>
          <ScrollAnimation animateIn="rotateInUpLeft" animateOnce>
            <ContainerPhotoNumber>
              <Image two={`url(${conventer})`} />
              <p>02</p>
            </ContainerPhotoNumber>
          </ScrollAnimation>
          <StyledText topSecond="35%" rightSecond="20%">
            CONVENTER
          </StyledText>
          <StyledText topSecond="35%" rightSecond="20%" className="front">
            CONVENTER
          </StyledText>
          <CircleButton onClick={this.handleActiveInfo}>
            <FontAwesomeIcon icon={activeButton ? faTimes : faInfo} />
          </CircleButton>
          <div className="info">
            <h1>Currency Conventer</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est obcaecati, quasi veniam
              unde asperiores, fuga fugit esse cupiditate, minima nam ratione ipsam? Optio tenetur
              voluptates quidem odio quis earum illo.
            </p>
          </div>
          <Circle>
            <a href="http://com-net.com.pl">
              <FontAwesomeIcon icon={faInfo} />
            </a>
          </Circle>
          <Circle className="second">
            <a href="https://github.com/marceleq27/CurrencyConverter">
              <FontAwesomeIcon icon={faCode} />
            </a>
          </Circle>
          <StyledP>SCSS | REACT | STYLED COMPONENTS | API</StyledP>
          <StyledDots>
            <span />
            <span className="active" />
            <span />
            <span />
          </StyledDots>
        </Container>
        <Container>
          <ScrollAnimation animateIn="rotateInUpLeft" animateOnce>
            <ContainerPhotoNumber>
              <Image three={`url(${weather})`} />
              <p>03</p>
            </ContainerPhotoNumber>
          </ScrollAnimation>
          <StyledText rightSecond="32%">WEATHER</StyledText>
          <StyledText rightSecond="32%" className="front">
            WEATHER
          </StyledText>
          <CircleButton onClick={this.handleActiveInfo}>
            <FontAwesomeIcon icon={activeButton ? faTimes : faInfo} />
          </CircleButton>
          <div className="info">
            <h1>Weather App</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est obcaecati, quasi veniam
              unde asperiores, fuga fugit esse cupiditate, minima nam ratione ipsam? Optio tenetur
              voluptates quidem odio quis earum illo.
            </p>
          </div>
          <Circle>
            <a href="http://">
              <FontAwesomeIcon icon={faInfo} />
            </a>
          </Circle>
          <Circle className="second">
            <a href="https://github.com/marceleq27/DzierzoniowWeatherApp">
              <FontAwesomeIcon icon={faCode} />
            </a>
          </Circle>
          <StyledP>API | REACT | STYLED COMPONENTS</StyledP>
          <StyledDots>
            <span />
            <span />
            <span className="active" />
            <span />
          </StyledDots>
        </Container>
        <Container>
          <ScrollAnimation animateIn="rotateInUpLeft" animateOnce>
            <ContainerPhotoNumber>
              <Image four={`url(${grawernia})`} />
              <p>04</p>
            </ContainerPhotoNumber>
          </ScrollAnimation>
          <StyledText topSecond="35%" rightSecond="19%">
            GRAWERNIA
          </StyledText>
          <StyledText topSecond="35%" rightSecond="19%" className="front">
            GRAWERNIA
          </StyledText>
          <CircleButton onClick={this.handleActiveInfo}>
            <FontAwesomeIcon icon={activeButton ? faTimes : faInfo} />
          </CircleButton>
          <div className="info">
            <h1>GrawerniaDDZ</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est obcaecati, quasi veniam
              unde asperiores, fuga fugit esse cupiditate, minima nam ratione ipsam? Optio tenetur
              voluptates quidem odio quis earum illo.
            </p>
          </div>
          <Circle>
            <a href="http://com-net.com.pl">
              <FontAwesomeIcon icon={faInfo} />
            </a>
          </Circle>
          <Circle className="second">
            <a href="https://grawerniaddz.pl">
              <FontAwesomeIcon icon={faCode} />
            </a>
          </Circle>
          <StyledP>PRESTASHOP | IDENTITY | BRANDING</StyledP>
          <StyledDots>
            <span />
            <span />
            <span />
            <span className="active" />
          </StyledDots>
        </Container>
      </StyledSection>
    );
  }
}

export default AboutMeView;
