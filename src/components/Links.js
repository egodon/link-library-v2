import React from 'react';
import styled from 'styled-components';
import Link from './Link';
import Icon, { icons } from './Icon';

const Links = ({ links }) => (
  <List>
    {links.length > 0 ? (
      links.map((link, index) => (
        <Link key={link._id} link={link} delay={index * 20}/>
      ))
    ) : (
      <NoLinks>
        <Icon icon={icons.sadFace} size={30}/>
        No links found!
      </NoLinks>
    )}
  </List>
);

const List = styled.ul`
  width: 80%;
`;

const NoLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
  align-items: center;

  svg {
    justify-self: end;
  }
`;

export default Links;
