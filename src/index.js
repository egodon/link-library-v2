import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import netlifyIdentity from 'netlify-identity-widget';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from 'ducks';
import { authUser } from 'ducks/user';
import App from './containers/App';
import './global.css';

netlifyIdentity.init();

const store = createStore(
  reducers,
  {
    user: netlifyIdentity.currentUser(),
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.netlifyIdentity = netlifyIdentity;
window.store = store;

netlifyIdentity.on('login', (user) => store.dispatch(authUser(user)));
netlifyIdentity.on('logout', (user) => store.dispatch(authUser(user)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
