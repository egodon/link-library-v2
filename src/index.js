import React from 'react';
import { hydrate, render } from 'react-dom';
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

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  );
} else {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  );
}

registerServiceWorker();
