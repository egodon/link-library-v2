import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import netlifyIdentity from 'netlify-identity-widget';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Header from './Header';
import SearchBar from 'components/SearchBar';
import Links from 'components/Links';
import Categories from './Categories';
import { updateLinks } from 'redux/links';

class App extends Component {
  state = {
    links: [],
    error: null,
  };

  async componentDidMount() {
    try {
      const links = await fetch('/.netlify/functions/links-read-all')
        .then((res) => res.json())
        .then((res) => res.response)
        .catch((e) => console.error(e));
        this.setState({ links });

        this.props.updateLinks(links);
        // TODO: Update component based on Redux state

    } catch (error) {
      this.setState({error})
    }

  }

  handleLogIn = () => {
    netlifyIdentity.open('login');
  };

  handleSignUp = () => {
    netlifyIdentity.open('signup');
  };

  handleLogOut = () => {
    netlifyIdentity.logout();
  }

  render() {
    return (
      <Fragment>
        <Header
          handleLogIn={this.handleLogIn}
          handleSignUp={this.handleSignUp}
          handleLogOut={this.handleLogOut}
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


const mapStateToProps = (state) => ({
  links: state.links,
})

const ConnectedApp = connect(mapStateToProps, {updateLinks})(App)

export default hot(module)(ConnectedApp);
