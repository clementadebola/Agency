import React from "react";
import styled from "styled-components";

const Testimonials: React.FC = () => {
  return (
    <TestimonialsContainer>
      <h2>What Our Clients Say</h2>
      <TestimonialList>
        <TestimonialCard>
          <p>"This agency helped us grow our business exponentially. Highly recommend!"</p>
          <h4>- John Doe, CEO of TechCorp</h4>
        </TestimonialCard>

        <TestimonialCard>
          <p>"Their attention to detail and dedication to quality are unmatched."</p>
          <h4>- Jane Smith, Founder of Innovate Inc.</h4>
        </TestimonialCard>

        <TestimonialCard>
          <p>"The best software solutions provider we've ever worked with!"</p>
          <h4>- Mark Wilson, CTO of Bright Ideas</h4>
        </TestimonialCard>
      </TestimonialList>
    </TestimonialsContainer>
  );
};

export default Testimonials;

// Styled Components
const TestimonialsContainer = styled.div`
  padding: 4rem 2rem;
  background-color: #0e1129;
  color: #e8e9f3;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #f73c86;
  }
`;

const TestimonialList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const TestimonialCard = styled.div`
  background-color: #090b22;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  max-width: 300px;

  p {
    color: #b2b5c9;
    font-style: italic;
  }

  h4 {
    color: #fff;
    margin-top: 1rem;
  }
`;
