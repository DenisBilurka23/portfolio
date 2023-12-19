import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import ProjectsSection from './ProjectsSection';
import Header from '../reusable/Header';
import styled from 'styled-components';

const Projects = ({ portfolioRef, data }) => {
  return (
    <Container>
      <Inner>
        <Header title="Projects" headerRef={portfolioRef} />
        <TopDivider />
        <Feed>
          {data.map(section => (
              <ProjectsSection
                  key={section.codeLink}
                  header={section.header}
                  sub={section.sub}
                  desc={section.desc}
                  src={section.src}
                  codeLink={section.codeLink}
                  demoLink={section.demoLink}
                  tech={section.tech}
                  date={section.date}
              />
          ))}
        </Feed>
        <ButtonContainer
          rel="noreferrer"
          target="_blank"
          href="https://github.com/DenisBilurka23?tab=repositories"
        >
          <Button>View More</Button>
          <ArrowIcon size={47} />
        </ButtonContainer>
        <Divider />
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 60px;
  position: relative;
  z-index: 7;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 40px 0 40px;
  @media only screen and (max-width: 1050px) {
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

const ArrowIcon = styled(FiArrowUpRight)`
  transform: translateY(0px);
  transition: transform 0.75s;
`;

const ButtonContainer = styled.a`
  padding-top: 60px;
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 20px;
  &:hover {
    p {
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.664);
      &::after {
        transform: scaleX(1) translateY(50px);
        transform-origin: left;
      }
    }
    img {
      transform: translateX(20px);
    }
  }
`;

const Button = styled.p`
  position: relative;
  width: fit-content;
  color: ${({ theme }) => theme.main.fonts.primary};
  font-size: 3.6rem;
  font-family: ${({ theme }) => theme.main.fontFamily.med};
  cursor: pointer;
  transition: text-shadow 0.5s;
  &::after {
    position: absolute;
    content: ' ';
    top: 0;
    left: 0;
    width: 100%;
    transform: scaleX(0) translateY(50px);
    transform-origin: right;
    transition: transform 0.5s;
    height: 3px;
    background-color: rgb(255, 255, 255, 0.64);
  }
`;

export default Projects;
