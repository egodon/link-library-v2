import React from 'react';
import styled from 'styled-components';
import Link from './Link';

const Links = ({ linkData }) => (
  <List>{linkData.map((link) => (
    <Link key={link._id}  link={link}/>))}
  </List>
);

const List = styled.ul`
  width: 100%;  
`;

export default Links;
