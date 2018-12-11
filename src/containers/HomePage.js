import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';
import times from 'lodash/times';
import { getLinks } from 'ducks/links';
import SearchBar from 'components/SearchBar';
import Links from 'components/Links';
import Categories from './Categories';
import LinkLoader from 'components/LinkLoader';

class Home extends Component {
  state = {
    error: null,
  };

  componentDidMount() {
    if (this.props.links.data.length === 0) {
      this.props.getLinks();
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
    const { props: _p } = this;

    const displayedLinks = this.filterLinks(_p.links.data);

    return (
      <Container>
        <SearchBar />
        <Categories />
        {_p.links.fetching ? (
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
  padding: 4rem 0;
  max-width: 74rem;
  margin: 0 auto;
`;

const mapStateToProps = (state) => ({
  links: state.links,
});

export default connect(
  mapStateToProps,
  { getLinks }
)(Home);
