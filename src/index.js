import React from 'react';
import { hydrate, render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import netlifyIdentity from 'netlify-identity-widget';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer, { rootSaga } from 'ducks';
import { authUser } from 'ducks/user';
import App from './containers/App';
import './global.css';

netlifyIdentity.init();
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  {
    user: netlifyIdentity.currentUser(),
  },
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

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

// TODO: integrate redux with react-snap and refactor above

registerServiceWorker();
