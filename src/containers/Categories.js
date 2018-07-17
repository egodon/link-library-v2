import React from 'react';
import styled from 'styled-components';
import { searchBarWidth } from 'components/SearchBar';

const Categories = () => (
  <List>
    <li className="video">
      <span />Video
    </li>
    <li className="tutorial">
      <span />Tutorial
    </li>
    <li className="article">
      <span />Article
    </li>
    <li className="stackoverflow">
      <span />StackOverflow
    </li>
    <li className="github">
      <span />Github
    </li>
    <li className="reddit">
      <span />Reddit
    </li>
    <li className="other">
      <span />Other
    </li>
  </List>
);

const List = styled.ul`
  margin-bottom: 4rem;
  width: ${searchBarWidth}
  display: flex;
  justify-content: space-between;
  position: relative;

  li {
    display: flex;
    align-items: center;
  }

  li span {
    display: inline-block;
    --box-size: 20px;
    height: var(--box-size);
    width: var(--box-size);
    background: tomato;
    margin-right: .6rem;
  }

  .github span {
    background: linear-gradient(to bottom right, var(--gradient-category-1));
  }
  
  .tutorial span {
    background: linear-gradient(to bottom right, var(--gradient-category-2));
  }
  
  .article span {
    background: linear-gradient(to bottom right, var(--gradient-category-3));
  }

  .stackoverflow span {
    background: linear-gradient(to bottom right, var(--gradient-category-4));
  }

  .video span {
    background: linear-gradient(to bottom right, var(--gradient-category-5));
  }

  .reddit span {
    background: linear-gradient(to bottom right, var(--gradient-category-6)); 
  }
`;

export default Categories;
