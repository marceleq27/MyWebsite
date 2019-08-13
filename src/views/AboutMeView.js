import React from 'react';
import styled from 'styled-components';
import comnet from '../utils/comnet.png';
// import conventer from '../utils/conventer.png';
// import weather from '../utils/weather.png';
// import grawernia from '../utils/grawernia.png';

const StyledSection = styled.section`
  background-color: #1c1c1c;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  div {
    height: 100vh;
    width: 100vw;
    position: relative;
    .circle {
      position: absolute;
      bottom: 3%;
      right: 5%;
      width: 100px;
      height: 100px;
      background-color: #2741b7;
      border-radius: 50%;
      z-index: 10;
      transition: 0.2s;
      &:hover {
        background-color: #fff;
      }
      &:hover a {
        color: #2741b7;
      }
      a {
        margin: 0 auto;
        font-size: 18px;
        font-weight: 300;
        letter-spacing: 5px;
        text-decoration: none;
        color: #fff;
      }
    }
    .item {
      position: absolute;
      font-size: 65px;
      top: 50%;
      left: 30%;
      transform: translateY(-50%);
      transform: rotate(90deg);
      font-weight: 700;
      letter-spacing: 10px;
      color: #fff;
      -webkit-text-stroke: 2px #fff;
      z-index: 10;
      &.border {
        color: transparent;
      }
    }
    div {
      position: relative;
      display: flex;
      overflow: hidden;
      height: 100%;
      justify-content: center;
      align-items: center;
      width: 75vw;

      div {
        position: absolute;
        left: 0%;
        top: 0%;
        right: 0%;
        bottom: 0%;
        width: 100%;
        background-image: url(${comnet});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        background-attachment: scroll;
        z-index: 5;
      }
    }
  }
`;

const AboutMeView = () => {
  return (
    <StyledSection>
      <div>
        <div>
          <div />
        </div>
        <p className="item border">COMNET</p>
        <div className="circle">
          <a href="http://com-net.com.pl">View</a>
        </div>
      </div>
      <div>
        <div>
          <div />
        </div>
        <p className="item border">COMNET</p>
        <div className="circle">
          <a href="http://com-net.com.pl">View</a>
        </div>
      </div>
      <div>
        <div>
          <div />
        </div>
        <p className="item border">COMNET</p>
        <div className="circle">
          <a href="http://com-net.com.pl">View</a>
        </div>
      </div>
      {/* <div>
        <img src={conventer} alt="conventer" />
        <p>CONVENTER</p>
      </div>
      <div>
        <img src={weather} alt="weather" />
        <p>WEATHER</p>
      </div>
      <div>
        <img src={grawernia} alt="grawernia" />
        <p>GRAWERNIA</p>
      </div> */}
    </StyledSection>
  );
};

export default AboutMeView;
