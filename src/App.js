import Nav from './components/nav/Nav';
import React, { useState, useRef, useEffect } from 'react';
import Hero from './components/hero/Hero';
import HeroMobile from './components/hero/HeroMobile';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import useWindowDimensions from './hooks/useWindowDimensions';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components';
import ReactGA from 'react-ga4';
import {experienceData, projectsData} from "./utills/data";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";

function App() {
  const [top, setTop] = useState('true');
  const { height, width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(false);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    if (
      width <= 1050 ||
      (width <= 1050 && /Android/i.test(navigator.userAgent)) ||
      /iPhone|iPad|iPod/i.test(navigator.userAgent)
    ) {
      setIsMobile(true);
    } else if (width > 1050) {
      setIsMobile(false);
    }
  }, [height, width]);

  useEffect(() => {
    ReactGA.initialize('G-8JXYBFE4CM');
    ReactGA.send('pageview');
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      {!isMobile && (
        <Nav
          top={top}
          projectsRef={projectsRef}
          experienceRef={experienceRef}
          skillsRef={skillsRef}
          aboutRef={aboutRef}
        />
      )}

      <Feed>
        {!isMobile ? (
          <Hero setTop={setTop} />
        ) : (
          <HeroMobile setTop={setTop} />
        )}
        <Experience data={experienceData} portfolioRef={experienceRef} isMobile={isMobile} />
        <Projects data={projectsData} portfolioRef={projectsRef} isMobile={isMobile} />
        <About aboutRef={aboutRef} isMobile={isMobile} />
        <Footer />
      </Feed>
    </ThemeProvider>
  );
}

const Feed = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
