import React from 'react';
import styled from 'styled-components';

const ExperienceSection = ({header, desc, tech}) => {
  return (
    <Outer>
      <SectionContainer>
        <SubContainer>
          <HeaderContainer>
            <PortfolioHeader>{header}</PortfolioHeader>
          </HeaderContainer>
          <MainContainer>
            <InfoSection>
              <Description>{desc}</Description>
              <TopSection>
                <InfoContainer>
                  <InfoHeader>Technologies</InfoHeader>
                  <Info>{tech}</Info>
                </InfoContainer>
              </TopSection>
            </InfoSection>
          </MainContainer>
          <Line />
        </SubContainer>
      </SectionContainer>
    </Outer>
  );
};

const Outer = styled.div`
  width: 100%;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: fit-content;
  box-sizing: border-box;

  @media only screen and (max-width: 1050px) {
    padding: 0;
    background-color: transparent;
    border: none;
    border-radius: 0;
    height: fit-content;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  justify-content: center;
  align-items: flex-start;
  @media only screen and (max-width: 1050px) {
    display: flex;
    flex-direction: column;
    margin: 0;
    gap: 40px;
  }
`;

const TopSection = styled.div`
  display: flex;
  width: 100%;
  gap: 60px;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const HeaderContainer = styled.div`
  @media only screen and (min-width: 768px) {
    margin-bottom: -25px;
  }
`;

const PortfolioHeader = styled.h3`
  font-size: 2.4rem;
  font-family: ${({ theme }) => theme.main.fontFamily.bold};
  color: ${({ theme }) => theme.portfolio.fontColor.primary};
  @media only screen and (max-width: 1050px) {
    font-size: 2.4rem;
  }
`;

const MainContainer = styled.div`
  display: flex;
  gap: 40px;
  @media only screen and (max-width: 1050px) {
    flex-direction: column;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex: 5;
  flex-direction: column;
  gap: 60px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2px;
`;

const InfoHeader = styled.p`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.portfolio.fontColor.primary};
`;

const Info = styled(InfoHeader)`
  font-family: ${({ theme }) => theme.main.fontFamily.light};
  color: ${({ theme }) => theme.portfolio.fontColor.secondary};
`;

const Description = styled(Info)`
  line-height: 150%;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid ${({ theme }) => theme.portfolio.line};
`;

export default ExperienceSection;
