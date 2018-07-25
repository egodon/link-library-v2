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
import { updateLinks } from 'ducks/links';

class App extends Component {
  state = {
    links: [],
    error: null,
  };

  async componentDidMount() {
    const links = await fetch('/.netlify/functions/links-read-all')
      .then((res) => res.json())
      .then((res) => this.props.updateLinks(res.response))
      .catch((error) => this.setState({ error }));
  }

  componentDidUpdate(_, prevState) {
    if (this.props.links.data.length !== prevState.links.length) {
      this.setState({ links: this.props.links.data });
    }
  }

  filterByCategory = (link) => {
    if (this.props.links.category) {
      return link.category === this.props.links.category;
    }
    return true;
  }
  

  filterLinks = (links) => (
    links.filter(link => (
      this.filterByCategory(link)
    ))
  )

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
    console.log(this.filterLinks);
    const displayedLinks = this.filterLinks(this.state.links);

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
          <Links linkData={displayedLinks} />
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
});

const ConnectedApp = connect(
  mapStateToProps,
  { updateLinks }
)(App);

export default hot(module)(ConnectedApp);
