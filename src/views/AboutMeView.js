import React from 'react';
import styled from 'styled-components';
import '../theme/animate.css';
import PortfolioComponent from '../components/PortfolioComponent/PortfolioComponent';
import data from '../utils/data';

const StyledSection = styled.section`
  overflow-x: hidden;
  background-color: #1e1e1e;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const AboutMeView = () => {
  return (
    <StyledSection>
      {data.map(item => (
        <PortfolioComponent
          key={item.project}
          project={item.project}
          number={item.number}
          aboutProject={item.aboutProject}
          link={item.link}
          imageUrlDesktop={item.imageUrlDesktop}
          imageUrlMobile={item.imageUrlMobile}
          technologies={item.technologies}
        />
      ))}
    </StyledSection>
  );
};

export default AboutMeView;
