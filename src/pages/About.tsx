import React from "react";
import styled from "styled-components";

const About: React.FC = () => {
  return (
    <AboutContainer>
      <Content>
        <h2>About Us</h2>
        
        <p>
          At <span>Your Software Agency</span>, we specialize in building innovative
          software solutions that empower businesses to thrive in the digital age.
        </p>
        <p>
          Our team of experienced developers and designers is passionate about delivering
          cutting-edge products that solve real-world problems.
        </p>
      </Content>

      <ImageSection>
        <img src="https://via.placeholder.com/400x300" alt="Team" />
      </ImageSection>
    </AboutContainer>
  );
};

export default About;

// Styled Components
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4rem 2rem;
  background-color: #0e1129;
  color: #e8e9f3;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;

const Content = styled.div`
  max-width: 600px;
  margin-bottom: 2rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #f73c86;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #b2b5c9;

    span {
      color: #fff;
      font-weight: bold;
    }
  }
`;

const ImageSection = styled.div`
  img {
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  }
`;
