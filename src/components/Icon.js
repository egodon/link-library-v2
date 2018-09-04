import React from 'react';

/* eslint-disable max-len */
export const icons = {
  /* SVG paths */
  sadFace:
    'M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.16 6H4.34a6 6 0 0 1 11.32 0z',
};
/* eslint-enable max-len */


const Icon = ({ icon, size, fillColor, className }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" className={className}>
    <path d={icon} />
  </svg>
);

export default Icon;
