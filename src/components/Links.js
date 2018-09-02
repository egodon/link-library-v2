import React, { Fragment } from 'react';
import times from 'lodash/times';
import styled from 'styled-components';
import Link from './Link';
import LinkLoader from './LinkLoader';

const Links = ({ linkData }) => {
  if (linkData.length < 1) {
    return (
      <Fragment>
        {times(20, () => (
          <LinkLoader />
        ))}
      </Fragment>
    );
  }

  return (
    <List>
      {linkData.map((link) => (
        <Link key={link._id} link={link} />
      ))}
    </List>
  );
};

const List = styled.ul`
  width: 100%;
`;

export default Links;
