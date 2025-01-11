import React from "react";
import styled from "styled-components";

const Contact: React.FC = () => {
  return (
    <ContactContainer>
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Fill out the form below to get in touch.</p>
      <Form>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <Textarea placeholder="Your Message" required />
        <Button type="submit">Send Message</Button>
      </Form>
      <FloatingCard>
        <h3>Let's Work Together!</h3>
        <p>Email: contact@youragency.com</p>
        <p>Phone: +123 456 7890</p>
      </FloatingCard>
    </ContactContainer>
  );
};

export default Contact;

// Styled Components
const ContactContainer = styled.div`
  padding: 4rem 2rem;
  background-color: #090b22;
  color: #e8e9f3;
  text-align: center;

  h2 {
    font-size: 2rem;
    color: #f73c86;
  }

  p {
    font-size: 1rem;
    color: #b2b5c9;
    margin-bottom: 2rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 1rem;
  border: none;
  border-radius: 8px;
  background-color: #0e1129;
  color: #fff;
  font-size: 1rem;

  &::placeholder {
    color: #b2b5c9;
  }
`;

const Textarea = styled.textarea`
  padding: 1rem;
  border: none;
  border-radius: 8px;
  background-color: #0e1129;
  color: #fff;
  font-size: 1rem;
  height: 150px;

  &::placeholder {
    color: #b2b5c9;
  }
`;

const Button = styled.button`
  background-color: #f73c86;
  color: #fff;
  padding: 1rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #d32e6f;
  }
`;

const FloatingCard = styled.div`
  background-color: #0e1129;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  margin-top: 2rem;

  h3 {
    color: #fff;
    margin-bottom: 1rem;
  }

  p {
    color: #b2b5c9;
  }
`;
