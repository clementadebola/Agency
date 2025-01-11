import React from "react";
import styled from "styled-components";
import { FaCode, FaMobileAlt, FaCloud } from "react-icons/fa";

const Services: React.FC = () => {
  return (
    <ServicesContainer>
      <h2>Our Services</h2>
      <ServiceList>
        <ServiceCard>
          <FaCode size={40} color="#f73c86" />
          <h3>Web Development</h3>
          <p>We build scalable and high-performing web applications tailored to your business needs.</p>
        </ServiceCard>

        <ServiceCard>
          <FaMobileAlt size={40} color="#f73c86" />
          <h3>Mobile App Development</h3>
          <p>We create user-friendly mobile applications for both Android and iOS platforms.</p>
        </ServiceCard>

        <ServiceCard>
          <FaCloud size={40} color="#f73c86" />
          <h3>Cloud Solutions</h3>
          <p>Our cloud services ensure your business is always connected and secure.</p>
        </ServiceCard>
      </ServiceList>
    </ServicesContainer>
  );
};

export default Services;

// Styled Components
const ServicesContainer = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background-color: #090b22;
  color: #e8e9f3;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #f73c86;
  }
`;

const ServiceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const ServiceCard = styled.div`
  background-color: #0e1129;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  h3 {
    font-size: 1.5rem;
    margin: 1rem 0;
    color: #fff;
  }

  p {
    font-size: 1rem;
    color: #b2b5c9;
  }
`;
