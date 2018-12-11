import React from 'react';
import ContentLoader from "react-content-loader";
import styled from 'styled-components';

const LinkLoader = (props) => (
  <ContentLoader
    height={30}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
		<rect x="0" y="0" rx="5" ry="5" width="400" height="25" /> 
  </ContentLoader>
);

export default styled(LinkLoader)`
  margin: 0 auto;
  margin-bottom: 10px;
`;
