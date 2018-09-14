import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import times from 'lodash/times';
import { getLinks } from 'ducks/links';
import SearchBar from 'components/SearchBar';
import Links from 'components/Links';
import Categories from './Categories';
import LinkLoader from 'components/LinkLoader';

class Home extends Component {
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
  render() {
    const displayedLinks = this.filterLinks(this.state.links);

    return (
      <Container>
        <SearchBar />
        <Categories />
        {this.props.links.fetching ? (
          times(20, (index) => <LinkLoader key={index} />)
        ) : (
          <Links
            links={displayedLinks}
            isFetchingLinks={this.props.links.fetching}
          />
        )}
      </Container>
    );
  }
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
`;

const mapStateToProps = (state) => ({
  links: state.links,
});

export default connect(
  mapStateToProps,
  { getLinks }
)(Home);
