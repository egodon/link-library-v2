import React from 'react';
import styled from 'styled-components/macro';

const Button = ({ text, type }) => (
  <StyledButton type={type}>{text}</StyledButton>
);

const StyledButton = styled.button`
  padding: 0.6rem 3rem;
  max-width: 15rem;
  border: 2px solid #03a9f4;
  border-radius: var(--border-radius);
  opacity: 0.8;
  color: #03a9f4;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export default Button;
