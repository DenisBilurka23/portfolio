import React from 'react';
import ExperienceSection from './ExperienceSection';
import Header from '../reusable/Header';
import styled from 'styled-components';
import {motion} from "framer-motion";

const Experience = ({ portfolioRef, data }) => {
  return (
    <Container>
      <Inner>
        <Header title="Experience" headerRef={portfolioRef} />
        <TopDivider />
          <Company>
              <p>Aimprosoft</p>
              <p>Aug 2021 - Dec 2023</p>
          </Company>
        <Feed>
          {data.map(({header, desc, tech, date}) => (
              <ExperienceSection header={header} desc={desc} tech={tech} date={date}/>
          ))}
        </Feed>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 100vh;
  position: relative;
  z-index: 7;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 150px 40px 0 40px;
  @media only screen and (max-width: 1050px) {
    margin-top: 0;
    padding: 0 40px;
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid ${({ theme }) => theme.portfolio.line};
  margin: 60px 0 0 0;
`;

const TopDivider = styled(Divider)`
  margin: 60px 0 60px 0;
`;

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;
  align-items: center;
`;

const Company = styled(motion.div)`
  p:first-child {
    font-size: 3rem;
    font-family: ${({ theme }) => theme.main.fontFamily.bold};
  }
  p:last-child {
    font-size: 2rem;
  }
  margin-bottom: 60px;
  display: flex;
  justify-content: space-between;
  
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    font-size: 2.4rem;
    p:first-child {
      margin-bottom: 1rem;
    }
  }
`;

export default Experience;
