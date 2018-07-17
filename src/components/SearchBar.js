import React from 'react';
import styled from 'styled-components';

const SearchBar = () => (
  <Input placeholder="Search..." />
);

export const searchBarWidth = '74rem';

const Input = styled.input`
  border: 1px solid #cccccc;
  border-radius: 2px;
  width: ${searchBarWidth};
  height: 5rem;
  margin: 0 auto;
  padding: 1rem 2rem;
  font-size: 2rem;
  margin-bottom: 4rem;
`;


export default SearchBar;