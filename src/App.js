import React, { Component } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import styled from 'styled-components';
import CanvasDots from 'components/CanvasDots/CanvasDots';
import GlobalStyles from './theme/GlobalStyles';
import zdj1 from './utils/zdj1.jpg';
import zdj2 from './utils/zdj2.jpeg';
import LoadingScreenView from './views/LoadingScreenView';
import HeroView from './views/HeroView';

const SectionWipes2Styled = styled.div`
  overflow: hidden;
  #pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  #pinContainer .panel {
    height: 100vh;
    width: 100vw;
    position: absolute;
    z-index: 5;
    text-align: center;
    img {
      left: 40%;
      opacity: 1;
      position: absolute;
      top: 50%;
      left: 40%;
      transform: translate(-50%, -50%);
      max-width: 50%;
      height: auto;
      z-index: 10;
      display: block;
    }
    p {
      font-family: 'Montserrat', sans-serif;
      font-weight: 800;
      font-size: 30px;
      width: 50%;
      position: absolute;
      top: 50%;
      left: 60%;
      transform: translate(-50%, -50%);
    }
  }
  .panel div {
    position: relative;
    display: block;
    height: 400px;
    max-width: 100%;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 80px;
  }

  .panel.turqoise {
    background-color: #e0e0e0;
  }

  .panel.green {
    background-color: #3b3b3b;
    img {
      opacity: 1 !important;
    }
    p {
      color: white;
    }
  }

  .panel.bordeaux {
    background-color: #7a7a7a;
    img {
      opacity: 1 !important;
    }
    p {
      color: white;
    }
  }
`;

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <GlobalStyles />
        <SectionWipes2Styled>
          <Controller>
            <LoadingScreenView />
            <Scene triggerHook="onLeave" duration="300%" pin>
              <Timeline wrapper={<div id="pinContainer" />}>
                <HeroView />
                <Tween from={{ x: '-100%' }} to={{ x: '0%' }}>
                  <section className="panel turqoise">
                    <img src={zdj1} alt="sddfsfsdadfdsfada" />
                    <p>Lorem ipsum dolor sit amet</p>
                  </section>
                </Tween>
                <Tween from={{ x: '100%' }} to={{ x: '0%' }}>
                  <section className="panel green">
                    <img src={zdj2} alt="sddfsfsdadfdsfada" />
                    <p>Lorem ipsum dolor sit amet</p>
                  </section>
                </Tween>
                <Tween from={{ y: '-100%' }} to={{ y: '0%' }}>
                  <section className="panel bordeaux">
                    <img src={zdj1} alt="sddfsfsdadfdsfada" />
                    <p>Lorem ipsum dolor sit amet</p>
                  </section>
                </Tween>
              </Timeline>
            </Scene>
          </Controller>
          <CanvasDots />
        </SectionWipes2Styled>
      </>
    );
  }
}

export default App;
