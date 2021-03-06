import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    /* Gradients */
    --gradient-category-1: #f44336, #e57373; 
    --gradient-category-2: #03A9F4, #4FC3F7;
    --gradient-category-3: #4CAF50, #81C784;
    --gradient-category-4: #673AB7, #9575CD;
    --gradient-category-5:  #E91E63,#F06292;
    --gradient-category-6:  #FFC107,#FFD54F;
    --gradient-category-7:  #3F51B5,#7986CB;

    /* Colors */
    --gray-line: #E0E0E0;
    --gray-300: #E0E0E0;
    --gray-600: #757575;
    --gray-900: #212121;

    --border-radius: 2px;

    /* Font-sizes */
    --fs-large: 2rem;
    --fs-medium: 1.6rem;
    --fs-small: 1.2rem;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light',
    'Helvetica Neue', Helvetica, Arial,'Lucida Grande', sans-serif;
    background-image: radial-gradient(circle, #D7D7D7, #D7D7D7 1px, #FFF 1px, #FFF);
    background-size: 28px 28px;
  }

  li {
    list-style: none;
  }
  
  a {
    color: #222;
    text-decoration: none;
    transition: all 0.15s;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
  }
`;

/* Helpers */

const styles = getComputedStyle(document.body);

export const getColorFromVariable = (cssVariable) => {
  if (cssVariable.startsWith('var')) {
    cssVariable = cssVariable.match(/\(([^)]+)\)/)[1];
  }

  return styles.getPropertyValue(cssVariable);
};

export const addAlphaChannel = ({ colors, alphaValue }) =>
  colors.map((color) => color + alphaValue);
