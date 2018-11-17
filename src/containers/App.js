import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import { Router } from '@reach/router';
import Header, { HEADER_HEIGHT } from './Header';
import HomePage from './HomePage';
import AddLinkPage from './AddLinkPage';

const App = () => (
  <Fragment>
    <Header
      handleLogIn={this.handleLogIn}
      handleSignUp={this.handleSignUp}
      handleLogOut={this.handleLogOut}
    />
    <Main>
      <Router>
        <HomePage path="/" />
        <AddLinkPage path="add-link" />
      </Router>
    </Main>
  </Fragment>
);

const Main = styled.main`
  max-width: 120rem;
  margin: 0 auto;
  margin-top: ${HEADER_HEIGHT};
`;

export default hot(module)(App);
