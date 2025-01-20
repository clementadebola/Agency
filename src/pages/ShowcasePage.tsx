import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import webimg from '../assets/webbb.jpg';

gsap.registerPlugin(ScrollTrigger);

const ShowcasePage = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { y: 100, rotate: -10, opacity: 0.5, scale: 0.9 },
        {
          y: 0,
          rotate: 10,
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%', // Starts animation when the image enters the viewport
            end: 'top 50%', // Ends when the image reaches 50% of the viewport height
            scrub: true, // Smoothly ties the animation to scroll progress
          },
        }
      );
    }
  }, []);

  return (
    <Container>
      <Content>
        <h1>Showcase Your Stunning Website</h1>
        <StyledImage ref={imageRef} src={webimg} alt="web design" />
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

const StyledImage = styled.img`
  max-width: 600px;
  width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  transform-origin: center;
`;
