import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import Header from './Header';
import SearchBar from 'components/SearchBar';
import Links from 'components/Links';
import Categories from './Categories';
import netlifyIdentity from 'netlify-identity-widget';

const MLAB_URL =
  'https://api.mlab.com/api/1/databases/linklib/collections/links/?s={"date":-1}&apiKey=L9_WEqfVS1SaIdZ5mfToatlnrUtbM2pV&';

class App extends Component {
  state = {
    links: [],
  };

  async componentDidMount() {
    const links = await fetch(MLAB_URL)
      .then((res) => res.json())
      .then((res) => res)
      .catch((e) => console.error(e));

    this.setState({ links });
  }

  handleLogIn = () => {
    netlifyIdentity.open('login');
  };

  handleSignUp = () => {
    netlifyIdentity.open('signup');
  };

  render() {
    return (
      <Fragment>
        <Header
          handleLogIn={this.handleLogIn}
          handleSignUp={this.handleSignUp}
        />
        <Container>
          <SearchBar />
          <Categories />
          <Links linkData={this.state.links} />
        </Container>
      </Fragment>
    );
  }
}

const Container = styled.main`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default hot(module)(App);
