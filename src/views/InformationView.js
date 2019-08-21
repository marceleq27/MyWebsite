import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

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
        <Container>
          <h2>Tylko Praktyka</h2>
          <p>
            Przerobiłem mnóstwo kursów. Ale czym byłaby wiedza bez swojego poparcia w kodzie?
            Dlatego też staram się pobudzać swoją ciekawość i pisać coraz to lepsze projekty. Dobrze
            by było, abyś je zobaczył/a.
          </p>
        </Container>
        <Container>
          <h2>Ciekawość</h2>
          <p>
            Podstawa pracy programisty. Bez tego nie byłoby mnie tutaj.Jestem tego pewien. Uwielbiam
            próbować nowych rzeczy w kodzie, często błądzę, ale czy bez tego było by fajnie?
          </p>
        </Container>
        <Container>
          <h2>Zaangażowanie</h2>
          <p>
            Oraz współpraca. Kluczowe cechy. Przy tworzeniu projektów komercyjnych nadal się uczę,
            ale one pozwalają mi na uzyskanie coraz to lepszej efektywności. A to wszystko ponieważ
            daję z siebie zawsze 100%.
          </p>
        </Container>
        <Container>
          <h2>Perfekcjonizm</h2>
          <p>
            Regularna praca z grafikiem to nie lada wyzwanie. Zawsze &quot;pixel perfect&quot;. Tego
            się nauczyłem i to chcę kontynuować. Do tego dochodzi czystość w kodzie i mamy definicję
            nagłówka.
          </p>
        </Container>
        <Container>
          <h2>Niemożliwe?</h2>
          <p>
            Nie istnieje. Jeśli mam okazję, zawsze spróbuję. A jeśli nie wyjdzie - będę próbował, aż
            w końcu zadziała. Wynika to niestety z mojej ciekawości i chęci rozwoju. Czy taka
            zachłanność jest dobra? Nie wiem, póki co się świetnie sprawdza.
          </p>
        </Container>
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
