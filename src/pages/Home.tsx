import React from "react";
import styled from "styled-components";
import About from "./About";
import Services from "./Services";

const Home: React.FC = () => (
  <HomeContainer>
    <h2>i am home bby</h2>

    <Section>
      <About />
    </Section>

    <Section>
      <Services />
    </Section>

  </HomeContainer>
);

export default Home;

const HomeContainer = styled.div`
  font-family: "Arial", sans-serif;
`;

const Section = styled.section`
  padding: 4rem 2rem;
`;