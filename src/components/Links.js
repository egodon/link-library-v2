import React from 'react';
import times from 'lodash/times';
import styled from 'styled-components';
import Link from './Link';
import LinkLoader from './LinkLoader';

const Links = ({ linkData }) => {
  return (
    <List>
      {linkData.length === 0
        ? times(20, (index) => <LinkLoader key={index} />)
        : linkData.map((link) => (
            <Link initialPose="exit" pose="enter" key={link._id} link={link} />
          ))}
    </List>
  );
};

const List = styled.ul`
  width: 80%;
`;

export default Links;
