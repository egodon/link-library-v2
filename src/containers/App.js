import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import netlifyIdentity from 'netlify-identity-widget';
import { connect } from 'react-redux';
import Header from './Header';
import SearchBar from 'components/SearchBar';
import Links from 'components/Links';
import Categories from './Categories';
import { getLinks } from 'ducks/links';

class App extends Component {
  state = {
    links: [],
    error: null,
  };

  componentDidMount() {
    this.props.getLinks();
  }

  componentDidUpdate(_, prevState) {
    if (this.props.links.data.length !== prevState.links.length) {
      this.setState({ links: this.props.links.data });
    }
  }

  filterByCategory = (link) => {
    const {
      links: { category },
    } = this.props;

    if (category) {
      return link.category.toLowerCase() === category;
    }
    return true;
  };

  filterBySearch = (link) => {
    const {
      links: { searchQuery },
    } = this.props;

    if (searchQuery) {
      return link.title.toLowerCase().includes(searchQuery);
    }
    return true;
  };

  filterLinks = (links) =>
    links.filter(this.filterByCategory).filter(this.filterBySearch);

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
          <Links
            linkData={displayedLinks}
            isFetchingLinks={this.props.links.fetching}
          />
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
  { getLinks }
)(App);

export default hot(module)(ConnectedApp);
