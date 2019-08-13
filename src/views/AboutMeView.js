import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faCode } from '@fortawesome/free-solid-svg-icons';
import ReactPageScroller from 'react-page-scroller';
import comnet from '../utils/comnet1.png';
import conventer from '../utils/conventer.png';
import weather from '../utils/weather.png';
import grawernia from '../utils/grawernia.png';

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
`;

const ContainerPhotoNumber = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  height: 100%;
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
  z-index: 5;
`;

const StyledText = styled.p`
  position: absolute;
  font-size: 60px;
  top: ${props => props.topSecond || props.topThird || props.topFourth || '30%'};
  right: ${props => props.rightSecond || props.rightThird || props.rightFourth || '40%'};
  transform: translateY(-50%);
  font-family: 'Montserrat', sans-serif;
  transform: rotate(-90deg);
  font-weight: 900;
  letter-spacing: 10px;
  color: #fff;
  -webkit-text-stroke: 1px #fff;
  &.front {
    color: transparent;
    z-index: 10;
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
  width: 70vh;
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
  position: absolute;
  bottom: 6%;
  left: 5%;
  span {
    width: 5px;
    height: 5px;
    background-color: #fff;
    border-radius: 50%;
    margin-right: 3px;
    &.active {
      background-color: #000;
    }
  }
`;

class AboutMeView extends Component {
  state = {};

  render() {
    return (
      <StyledSection>
        <ReactPageScroller
          ref={c => {
            return this.reactPageScroller === c;
          }}
        >
          <Container>
            <ContainerPhotoNumber>
              <Image />
              <p>01</p>
            </ContainerPhotoNumber>
            <StyledText>COMNET</StyledText>
            <StyledText className="front">COMNET</StyledText>
            <Circle>
              <a href="http://com-net.com.pl">
                <FontAwesomeIcon icon={faInfo} />
              </a>
            </Circle>
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
          </Container>
          <Container>
            <ContainerPhotoNumber>
              <Image two={`url(${conventer})`} />
              <p>02</p>
            </ContainerPhotoNumber>
            <StyledText topSecond="35%" rightSecond="20%">
              CONVENTER
            </StyledText>
            <StyledText topSecond="35%" rightSecond="20%" className="front">
              CONVENTER
            </StyledText>
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
            <ContainerPhotoNumber>
              <Image three={`url(${weather})`} />
              <p>03</p>
            </ContainerPhotoNumber>
            <StyledText rightSecond="35%">WEATHER</StyledText>
            <StyledText rightSecond="35%" className="front">
              WEATHER
            </StyledText>
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
            <ContainerPhotoNumber>
              <Image four={`url(${grawernia})`} />
              <p>04</p>
            </ContainerPhotoNumber>
            <StyledText topSecond="35%" rightSecond="20%">
              GRAWERNIA
            </StyledText>
            <StyledText topSecond="35%" rightSecond="20%" className="front">
              GRAWERNIA
            </StyledText>
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
        </ReactPageScroller>
      </StyledSection>
    );
  }
}

export default AboutMeView;
