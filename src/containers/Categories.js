import React from 'react';
import styled from 'styled-components';
import { searchBarWidth } from 'components/SearchBar';

const Categories = () => (
  <List>
    <li className="video">
      <span className="color-box" />Video
    </li>
    <li className="tutorial">
      <span className="color-box" />Tutorial
    </li>
    <li className="article">
      <span className="color-box" />Article
    </li>
    <li className="stackoverflow">
      <span className="color-box" />StackOverflow
    </li>
    <li className="github">
      <span className="color-box" />Github
    </li>
    <li className="reddit">
      <span className="color-box" />Reddit
    </li>
    <li className="other">
      <span className="color-box" />Other
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

  .github .color-box {
    background: linear-gradient(to bottom right, var(--gradient-category-1));
  }
  
  .tutorial .color-box {
    background: linear-gradient(to bottom right, var(--gradient-category-2));
  }
  
  .article .color-box {
    background: linear-gradient(to bottom right, var(--gradient-category-3));
  }

  .stackoverflow .color-box {
    background: linear-gradient(to bottom right, var(--gradient-category-4));
  }

  .video .color-box {
    background: linear-gradient(to bottom right, var(--gradient-category-5));
  }

  .reddit .color-box {
    background: linear-gradient(to bottom right, var(--gradient-category-6)); 
  }

  .other .color-box {
    background: linear-gradient(to bottom right, var(--gradient-category-7)); 
  }
`;

export default Categories;
