import React, { Component } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import styled from 'styled-components';
import CanvasDots from 'components/CanvasDots/CanvasDots';
import GlobalStyles from './theme/GlobalStyles';
import zdj1 from './utils/zdj1.jpg';
import zdj2 from './utils/zdj2.jpeg';

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
  .panel.blue {
    position: relative;
    text-align: center;
    font-size: 24px;
    h1 {
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-40%, -100%);
      z-index: 10;
      width: 100%;
    }
    h2 {
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      position: absolute;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-30%, 0);
      color: transparent;
      -webkit-text-stroke: 2px #000;
      z-index: 10;
    }
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

  .box {
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: 9999;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .styledh1 {
      position: absolute;
      top: 50%;
      left: 50%;
      text-align: center;
      z-index: 9999;
      background-color: transparent;
      font-size: 150px;
      font-weight: 700;
      font-family: 'Montserrat', sans-serif;
      transform: translateX(-40%) rotate(90deg);
      overflow: hidden;
    }
    .styledh2 {
      position: absolute;
      top: 40%;
      right: 50%;
      text-align: center;
      z-index: 9999;
      background-color: transparent;
      font-size: 150px;
      font-weight: 700;
      color: transparent;
      font-family: 'Montserrat', sans-serif;
      -webkit-text-stroke: 2px #000;
      transform: translateX(50%) rotate(90deg);
      overflow: hidden;
    }
  }
`;

class App extends Component {
  state = {};

  handleUnmount = () => {
    const box = document.querySelector('.box');
    box.style.display = 'none';
  };

  render() {
    return (
      <>
        <GlobalStyles />
        <SectionWipes2Styled>
          <Controller>
            <Tween
              from={{ opacity: 1 }}
              to={{ opacity: 0 }}
              duration={0.9}
              delay={1.5}
              onComplete={this.handleUnmount}
            >
              <div className="box">
                <Tween from={{ y: '-100%' }} to={{ y: '100%' }} duration="5">
                  <h3 className="styledh1">MARCEL</h3>
                </Tween>
                <Tween from={{ y: '100%' }} to={{ y: '-100%' }} duration="5">
                  <h3 className="styledh2">BEDNARZ</h3>
                </Tween>
              </div>
            </Tween>

            <Scene triggerHook="onLeave" duration="300%" pin>
              <Timeline wrapper={<div id="pinContainer" />}>
                <section className="panel blue">
                  <img src={zdj2} alt="sddfsfsdadfdsfada" />
                  <h1>Hi, my name is</h1>
                  <h2>Marcel</h2>
                </section>
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
