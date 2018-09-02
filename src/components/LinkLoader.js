import React from 'react';
import ContentLoader from "react-content-loader";

const LinkLoader = (props) => (
  <ContentLoader
    height={30}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
		<rect x="0" y="0" rx="5" ry="5" width="380" height="20" /> 
  </ContentLoader>
);

export default LinkLoader;
