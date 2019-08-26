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
          key={item.id}
          project={item.project}
          number={item.number}
          aboutProject={item.aboutProject}
          link={item.link}
          imageUrlDesktop={item.imageUrlDesktop}
          imageUrlMobile={item.imageUrlMobile}
          technologies={item.technologies}
          isActive1={item.isActive1}
          isActive2={item.isActive2}
          isActive3={item.isActive3}
          isActive4={item.isActive4}
        />
      ))}
    </StyledSection>
  );
};

export default AboutMeView;
