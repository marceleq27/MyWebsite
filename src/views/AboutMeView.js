import React, { Component } from 'react';
import styled from 'styled-components';
import '../theme/animate.css';
import comnet from '../utils/comnet.png';
import comnetComp from '../utils/comnetComp.png';
import conventer from '../utils/conventer.png';
import conventerComp from '../utils/conventerComp.png';
import weather from '../utils/weather.png';
import weatherComp from '../utils/weatherComp.png';
import grawernia from '../utils/grawernia.png';
import grawerniaComp from '../utils/grawerniaComp.png';
import LoadingScreen from './LoadingScreenView';
import PortfolioComponent from '../components/PortfolioComponent/PortfolioComponent';

const StyledSection = styled.section`
  overflow-x: hidden;
  background-color: #1e1e1e;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

class AboutMeView extends Component {
  state = {
    isLoaded: false,
    isComputerActive: false,
  };

  componentDidMount() {
    this.setState(prevState => ({
      isLoaded: !prevState.isLoaded,
    }));
    const window = document.body.getBoundingClientRect();
    if (window.width >= 1024) {
      this.setState({
        isComputerActive: true,
      });
    }
  }

  render() {
    const { isLoaded, isComputerActive } = this.state;
    return (
      <StyledSection>
        {isLoaded ? '' : <LoadingScreen />}
        <PortfolioComponent
          project="COMNET"
          number="01"
          aboutProject="Pierwszy komercyjny projekt strony-wizytówki z użyciem CRA. We współpracy z grafikiem podjęliśmy się stworzenia projektu od zera. Z pomocą przyszły również takie technologie jak React Router oraz biblioteki odpowiadające za animacje."
          link="http://www.com-net.com.pl/"
          imageUrl={isComputerActive ? `url(${comnetComp})` : `url(${comnet})`}
          technologies="ANIMATIONS | REACT | STYLED COMPONENTS"
          isActive1="active"
        />
        <PortfolioComponent
          project="CONVERTER"
          number="02"
          aboutProject="Aplikacja stworzona w celu nauki korzystania z API ,ale sprawdza się również w praktycznym użyciu. Dobrze sprawdziła się tu składnia SCSS, która znacznie ułatwiła pisanie kodu."
          link="https://github.com/marceleq27/CurrencyConverter"
          imageUrl={isComputerActive ? `url(${conventerComp})` : `url(${conventer})`}
          technologies="SCSS | REACT | JAVASCRIPT | API"
          isActive2="active"
        />
        <PortfolioComponent
          project="WEATHER"
          number="03"
          aboutProject="Prosta aplikacja pogodowa, umożliwia wpisanie danego miasta i sprawdzenie aktualnej pogody. GIFy pochodzą z zewnętrznego źródła na które dostałem pozwolenie. Do ostylowania świetnie sprawdziła się paczka styled components."
          link="https://github.com/marceleq27/DzierzoniowWeatherApp"
          imageUrl={isComputerActive ? `url(${weatherComp})` : `url(${weather})`}
          technologies="API | REACT | STYLED COMPONENTS"
          isActive3="active"
        />
        <PortfolioComponent
          project="GRAWERNIA"
          number="04"
          aboutProject="Sklep utworzony na zlecenie klienta, powstał we współpracy ze znajomym grafikiem. Była to moja pierwsza stycznośc z tego typu systemami, natomiast szybka nauka pozwoliła na sprawne postawienie sklepu."
          link="https://grawerniaddz.pl"
          imageUrl={isComputerActive ? `url(${grawerniaComp})` : `url(${grawernia})`}
          technologies="PRESTASHOP | IDENTITY | BRANDING"
          isActive4="active"
        />
      </StyledSection>
    );
  }
}

export default AboutMeView;
