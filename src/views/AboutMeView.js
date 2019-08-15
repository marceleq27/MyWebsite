import React, { Component } from 'react';
import styled from 'styled-components';
import '../theme/animate.css';
import comnet from '../utils/comnet1.png';
import conventer from '../utils/conventer.png';
import weather from '../utils/weather.png';
import grawernia from '../utils/grawernia.png';
import LoadingScreen from './LoadingScreenView';
import PortfolioComponent from '../components/PortfolioComponent/PortfolioComponent';

const StyledSection = styled.section`
  background-color: #1c1c1c;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

class AboutMeView extends Component {
  state = {
    isLoaded: false,
  };

  componentDidMount() {
    this.setState(prevState => ({
      isLoaded: !prevState.isLoaded,
    }));
  }

  render() {
    const { isLoaded } = this.state;
    return (
      <StyledSection>
        {isLoaded ? '' : <LoadingScreen />}
        <PortfolioComponent
          project="COMNET"
          number="01"
          aboutProject="lorem ipsum dolor sit amet"
          top="25%"
          right="40%"
          link="http://www.com-net.com.pl/"
          imageUrl={`url(${comnet})`}
          technologies="ANIMATIONS | REACT | STYLED COMPONENTS"
          isActive1="active"
        />
        <PortfolioComponent
          project="CONVENTER"
          number="02"
          aboutProject="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est obcaecati, quasi veniam
          unde asperiores, fuga fugit esse cupiditate, minima nam ratione ipsam? Optio tenetur
          voluptates quidem odio quis earum illo."
          top="35%"
          right="20%"
          link="https://github.com/marceleq27/CurrencyConverter"
          imageUrl={`url(${conventer})`}
          technologies="SCSS | REACT | STYLED COMPONENTS | API"
          isActive2="active"
        />
        <PortfolioComponent
          project="WEATHER"
          number="03"
          aboutProject="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est obcaecati, quasi veniam
          unde asperiores, fuga fugit esse cupiditate, minima nam ratione ipsam? Optio tenetur
          voluptates quidem odio quis earum illo."
          top="25%"
          right="32%"
          link="https://github.com/marceleq27/DzierzoniowWeatherApp"
          imageUrl={`url(${weather})`}
          technologies="API | REACT | STYLED COMPONENTS"
          isActive3="active"
        />
        <PortfolioComponent
          project="GRAWERNIA"
          number="04"
          aboutProject=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est obcaecati, quasi veniam
          unde asperiores, fuga fugit esse cupiditate, minima nam ratione ipsam? Optio tenetur
          voluptates quidem odio quis earum illo."
          top="35%"
          right="19%"
          link="https://grawerniaddz.pl"
          imageUrl={`url(${grawernia})`}
          technologies="PRESTASHOP | IDENTITY | BRANDING"
          isActive4="active"
        />
      </StyledSection>
    );
  }
}

export default AboutMeView;
