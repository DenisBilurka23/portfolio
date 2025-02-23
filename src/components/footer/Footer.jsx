import React from 'react';

import { useMotionValue, motion } from 'framer-motion';
import useMeasure from 'react-use-measure';

import FooterScene from '../../three/footer/FooterScene';

import styled from 'styled-components';

const Link = ({ href, children }) => {
  return (
    <div>
      <StyledLink href={href} target="_blank" rel="noreferrer">
        {children}
      </StyledLink>
    </div>
  );
};

const Footer = () => {
  const [mouseRef, bounds] = useMeasure({ scroll: true });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <Container
      ref={mouseRef}
      onPointerMove={(e) => {
        mouseX.set((e.clientX - bounds.x - bounds.width / 2) * 5);
        mouseY.set((e.clientY - bounds.y - bounds.height / 2) * 10);
      }}
    >
      <SceneContainer>
        <FooterScene mouseX={mouseX} mouseY={mouseY} />
      </SceneContainer>
      <Center>
        <HeaderContainer>
          <Header>Want to get in touch?</Header>
          <a href="mailto:Denisbilurka23@gmail.com">
            <Email>Denisbilurka23@gmail.com</Email>
          </a>
        </HeaderContainer>
      </Center>
      <Bottom>
        <Section>
          <Span>Denis Bilurka</Span>
          <Span>Ⓒ 2025</Span>
        </Section>

        <Section>
          <Bold>Built with</Bold>
          <Span>React.js</Span>
          <Span>Three.js</Span>
          <Span>Framer Motion</Span>
        </Section>

        <Links>
          <Section>
            <Link href="https://www.linkedin.com/in/denis-bilurka/">LinkedIn</Link>
            <Link href="https://github.com/DenisBilurka23">Github</Link>
          </Section>
        </Links>
      </Bottom>
    </Container>
  );
};

const SceneContainer = styled.div`
  position: absolute;
  z-index: -2;
`;

const Container = styled(motion.div)`
  display: flex;
  position: relative;
  z-index: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-height: 1080px;
  width: 100%;
  overflow: hidden;
  padding: 100px 40px;
  @media only screen and (max-width: 1050px) {
    height: fit-content;
  }
`;

const Center = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Header = styled.h1`
  font-size: 6.4rem;
  color: #fff;
  font-family: ${({ theme }) => theme.main.fontFamily.bold};
  text-transform: uppercase;
  @media only screen and (max-width: 1050px) {
    font-size: 2.4rem;
  }
`;

const HeaderContainer = styled.div``;

const Email = styled.h2`
  font-size: 4rem;
  color: rgb(189, 189, 189);
  font-family: ${({ theme }) => theme.main.fontFamily.light};
  text-transform: uppercase;
  @media only screen and (max-width: 1050px) {
    font-size: 2rem;
  }
`;

const Bottom = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  display: flex;
  justify-content: space-between;
  bottom: 0;
  @media only screen and (max-width: 1050px) {
    margin-top: 100px;
    flex-direction: column;
    justify-content: center;
    gap: 60px;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Span = styled.span`
  position: relative;
  font-size: 2.4rem;
  font-family: ${({ theme }) => theme.main.fontFamily.primary};
`;

const StyledLink = styled.a`
  position: relative;
  font-size: 2.4rem;
  font-family: ${({ theme }) => theme.main.fontFamily.primary};
  &:hover {
    ::after {
      transform: scaleX(1) translateY(26px);
      transform-origin: left;
    }
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: rgb(255, 255, 255, 0.64);
    transform: scaleX(0) translateY(26px);
    transform-origin: right;
    transition: transform 0.5s;
  }
`;

const Bold = styled(Span)`
  font-family: ${({ theme }) => theme.main.fontFamily.bold};
`;

const Links = styled.div`
  display: flex;
  gap: 50px;
`;

export default Footer;
