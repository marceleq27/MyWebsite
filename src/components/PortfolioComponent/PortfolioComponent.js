import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faCode, faTimes } from '@fortawesome/free-solid-svg-icons';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const rotate = keyframes`
from{
  transform:rotate(0deg);
}
to{
  transform:rotate(360deg);
}
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
  background-image: ${props => props.image};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: scroll;
  z-index: 2;
`;

const StyledText = styled.p`
  position: absolute;
  font-size: 55px;
  top: ${props => props.top};
  right: ${props => props.right};
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

class PortfolioComponent extends Component {
  state = {
    activeButton: false,
  };

  handleActiveInfo = () => {
    const button = document.querySelector('.info');
    button.classList.toggle('activeInfo');
    document.body.classList.toggle('noscroll');
    this.setState(prevState => ({
      activeButton: !prevState.activeButton,
    }));
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
      top,
      right,
    } = this.props;
    return (
      <Container>
        <ContainerPhotoNumber>
          <Image image={imageUrl} />
          <p>{number}</p>
        </ContainerPhotoNumber>
        <StyledText top={top} right={right}>
          {project}
        </StyledText>
        <StyledText className="front" top={top} right={right}>
          {project}
        </StyledText>
        <CircleButton onClick={this.handleActiveInfo} style={{ zIndex: activeButton ? '26' : '1' }}>
          <FontAwesomeIcon icon={activeButton ? faTimes : faInfo} />
        </CircleButton>
        <div className="info">
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
  top: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
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
