import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import textinformation from '../utils/textInformation';

const StyledSection = styled.section`
  background-color: #1c1c1c;
  color: #fff;
  padding: 0 10vw;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 100vh;
  margin-bottom: 100px;
  width: 80vw;
  @media (min-width: 768px) {
    width: 60vw;
  }
  h1 {
    margin-top: 50px;
    font-weight: 900;
    font-size: ${({ theme }) => theme.h1};
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 3px;
    line-height: 120%;
    @media (min-width: 768px) {
      font-size: 70px;
    }
    @media (min-width: 1024px) {
      font-size: 80px;
    }
    @media (min-width: 1200px) {
      font-size: 90px;
    }
    @media (min-width: 1600px) {
      font-size: 100px;
    }
  }
  p {
    line-height: 27.5px;
    font-size: ${({ theme }) => theme.p};
    /* 162% ,*1,618*/
    /* h3 => 20px to h2=> h3 * 1.618 */
    @media (min-width: 768px) {
      font-size: 25px;
      line-height: 40.5px;
    }
    @media (min-width: 1024px) {
      font-size: 35px;
      line-height: 56.5px;
    }
    @media (min-width: 1400px) {
      font-size: 35px;
    }
  }
`;

const StyledSectionContainer = styled.section`
  display: grid;
  justify-items: left;
  align-content: center;
  padding: 20px;
  p {
    line-height: 170%;
  }
  @media (min-width: 768px) {
    width: 80vw;
    grid-template-columns: repeat(2, minmax(300px, 1fr));
    grid-column-gap: 30px;
  }
`;

const Container = styled.div`
  width: 90%;
  margin-bottom: 70px;
  padding: 20px 0;
  @media (min-width: 1200px) {
    width: 80%;
  }
  @media (min-width: 1600px) {
    width: 70%;
  }
  h2 {
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 10px;
    text-transform: uppercase;
    line-height: 120%;
    @media (min-width: 768px) {
      font-size: 30px;
      margin-bottom: 15px;
    }
    @media (min-width: 1024px) {
      font-size: 40px;
    }
  }
  p {
    font-size: 15px;
    font-weight: 300;
    @media (min-width: 768px) {
      font-size: 20px;
    }
    @media (min-width: 1024px) {
      font-size: 20px;
    }
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
    @media (min-width: 768px) {
      font-size: 80px;
    }
    @media (min-width: 1024px) {
      font-size: 100px;
    }
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
          docelowo chciałbym zamienić w codzienną pracę. Cały czas na tym pracuję.
        </p>
      </StyledDiv>
      <StyledSectionContainer>
        {textinformation.map(data => (
          <ScrollAnimation key={data.id} animateOnce animateIn="fadeInUp" offset={60}>
            <Container key={data.id}>
              <h2>{data.header}</h2>
              <p>{data.paragraph}</p>
            </Container>
          </ScrollAnimation>
        ))}
      </StyledSectionContainer>
      <ScrollAnimation animateOnce animateIn="fadeInUp">
        <StyledA as={Link} to="/contact">
          <h1>Kontakt</h1>
        </StyledA>
      </ScrollAnimation>
    </StyledSection>
  );
};

export default InformationView;
