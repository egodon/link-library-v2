import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { inputMaxWidth } from './consts';

const Select = ({ name, options, label, onChange, value }) => (
  <Container>
    <label>{label}</label>
    <select name={name} value={value} onChange={onChange}>
      {options.map((option) => (
        <option value={option.value.toLowerCase()} key={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  </Container>
);

Select.propTypes = {
  options: PropTypes.array.isRequired,
};

const Container = styled.div`
  label {
    display: block;
  }

  select {
    width: 100%;
    max-width: ${inputMaxWidth};
    padding: 1rem;
    border: 1px solid var(--gray-line);
    border-radius: var(--border-radius);
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
  }
`;

export default Select;
