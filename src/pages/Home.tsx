import React from "react";
import styled from "styled-components";
import About from "./About";
import Services from "./Services";

const Home: React.FC = () => (
  <HomeContainer>
    <HeroSection>
      <h1>We Build Amazing Software Solutions</h1>
      <p>Empowering businesses with cutting-edge technology.</p>
      <HeroButton>Get Started</HeroButton>
    </HeroSection>

    <Section>
      <About />
    </Section>

    <Section>
      <Services />
    </Section>

    <Footer>
      <p>© 2025 Your Software Agency. All rights reserved.</p>
    </Footer>
  </HomeContainer>
);

export default Home;

// Styled Components
const HomeContainer = styled.div`
  font-family: "Arial", sans-serif;
  background-color: #090b22;
  color: #fff;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 5rem 2rem;
  background-color: #0e1129;
  border-bottom: 4px solid #3a3d5e;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #e8e9f3;
  }

  p {
    font-size: 1.2rem;
    color: #b2b5c9;
    margin-bottom: 2rem;
  }
`;

const HeroButton = styled.button`
  background-color: #f73c86;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #d32e6f;
    transform: scale(1.05);
  }
`;

const Section = styled.section`
  padding: 4rem 2rem;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem 0;
  background-color: #0e1129;
  color: #b2b5c9;
  font-size: 0.9rem;
`;
