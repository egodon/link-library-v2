import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import netlifyIdentity from 'netlify-identity-widget';
import styled from 'styled-components';
import { Router } from '@reach/router';
import Header, { HEADER_HEIGHT } from './Header';
import HomePage from './HomePage';
import AddLinkPage from './AddLinkPage';

class App extends Component {
  handleLogIn = () => {
    netlifyIdentity.open('login');
  };

  handleSignUp = () => {
    netlifyIdentity.open('signup');
  };

  handleLogOut = () => {
    netlifyIdentity.logout();
  };

  render() {
    return (
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
  }
}

const Main = styled.main`
  max-width: 120rem;
  margin: 0 auto; 
  margin-top: ${HEADER_HEIGHT};
`;

export default hot(module)(App);
