import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import textinformation from '../utils/textInformation';

const StyledSection = styled.section`
  background-color: #1c1c1c;
  color: #fff;
`;

const StyledDiv = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 100vh;
  margin-bottom: 50px;
  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }
  h1 {
    margin-top: 50px;
    font-weight: 900;
    font-size: 50px;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 3px;
  }
  p {
    line-height: 170%;
  }
`;

const Container = styled.div`
  width: 90%;
  margin-bottom: 100px;
  padding: 20px 0;
  border-bottom: 1px solid #333;
  border-top: 1px solid #333;

  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }
  h2 {
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 10px;
    text-transform: uppercase;
    line-height: 120%;
  }
  p {
    font-size: 15px;
    font-weight: 300;
  }
`;

const StyledA = styled.a`
  height: 100vh;
  text-decoration: none;
  position: relative;
  display: block;
  h1 {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 50px;
    text-align: center;
    font-weight: 900;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    padding: 10px 0;
    &:hover {
      &::after {
        height: 500px;
        z-index: -1;
        opacity: 1;
      }
    }
    &::after {
      content: 'Dobra decyzja';
      font-weight: 300;
      font-size: 15px;
      line-height: 200px;
      position: absolute;
      color: #fff;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 2px;
      background-color: #000;
      transition: 0.3s;
      transform: translate(-50%, -50%);
      opacity: 0;
    }
  }
`;

const InformationView = () => {
  return (
    <StyledSection>
      <StyledDiv>
        <h1>Cześć, poznajmy się lepiej.</h1>
        {/* <img src="" alt="" srcset=""/> */}
        <p>
          Jestem Marcel, od ponad roku zajmuję się programowaniem na front endzie. Swoja pasję
          docelowo chciałbym zamienić w codzienną pracę. Jeśli chciałbyś podjąć współpracę ,bądź
          zaoferować coś ciekawego, napisz lub zadzwoń śmiało.
        </p>
      </StyledDiv>
      <StyledDiv>
        {textinformation.map(data => (
          <Container key={data.id}>
            <h2>{data.header}</h2>
            <p>{data.paragraph}</p>
          </Container>
        ))}
      </StyledDiv>
      <ScrollAnimation animateOnce animateIn="fadeInUp">
        <StyledA href="/contact">
          <h1>Kontakt</h1>
        </StyledA>
      </ScrollAnimation>
    </StyledSection>
  );
};

export default InformationView;
