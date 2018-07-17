import React from 'react';
import styled from 'styled-components';
import Link from './Link';

const Links = ({ linkData }) => (
  <LinkList>{linkData.map((link) => (
    <Link key={link._id.$oid} link={link}/>))}
  </LinkList>
);

const LinkList = styled.ul`
  width: 100%;  
`;

export default Links;
