import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import webimg from '../assets/webbb.jpg';

gsap.registerPlugin(ScrollTrigger);

const ShowcasePage = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { rotateX: 20, rotateY: -20, translateZ: -50, opacity: 0.7 },
        {
          rotateX: 0,
          rotateY: 0,
          translateZ: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <Container>
      <Content>
        <h1>Showcase Your Stunning Website</h1>
        <ImageWrapper ref={imageRef}>
          <StyledImage src={webimg} alt="web design" />
        </ImageWrapper>
      </Content>
    </Container>
  );
};

export default ShowcasePage;

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #090b22, #2d2678);
  color: #fff;
  padding: 0 20px;
`;

const Content = styled.div`
  text-align: center;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #fff;
  }
`;

const ImageWrapper = styled.div`
  perspective: 1000px; /* Enables 3D effect */
  max-width: 600px;
  width: 100%;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  transform-origin: center;
`;
