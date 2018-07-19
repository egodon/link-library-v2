import { injectGlobal } from 'styled-components';

injectGlobal`
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
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light',
    'Helvetica Neue', Helvetica, Arial,'Lucida Grande', sans-serif;
  }

  li {
    list-style: none;
  }

  a {
    color: #222;
    text-decoration: none;
    transition: all 0.15s;
  }

  a:hover {
    color: #64b5f6;
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
