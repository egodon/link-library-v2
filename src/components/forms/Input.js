import React from 'react';
import styled from 'styled-components/macro';
import { inputMaxWidth } from './consts';
import Label from './Label';

const Input = ({ onChange, name, placeholder, label, value, required=false }) => (
  <Container>
    <Label>{label}</Label>
    <input
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  </Container>
);

const Container = styled.div`
  margin-bottom: 1.6rem;
  width: 100%;

  font-size: var(--fs-medium);

  label {
    display: block;
  }

  input {
    width: 100%;
    max-width: ${inputMaxWidth};
    padding: 1rem;
    border: 1px solid var(--gray-line);
    border-radius: var(--border-radius);
  }
`;

export default Input;
