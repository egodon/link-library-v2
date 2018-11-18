import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';
import { updateSearch } from 'ducks/links';

const SearchBar = (props) => (
  <Input
    onChange={(e) => props.updateSearch(e.target.value)}
    value={props.searchQuery}
    placeholder="Search..."
  />
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

const mapStateToProps = (state) => ({
  searchQuery: state.links.searchQuery,
});

export default connect(
  mapStateToProps,
  { updateSearch }
)(SearchBar);
