import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './global.css';
import registerServiceWorker from './registerServiceWorker';
import netlifyIdentity from "netlify-identity-widget";

window.netlifyIdentity = netlifyIdentity;
netlifyIdentity.init();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();