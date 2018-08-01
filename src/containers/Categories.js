import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { searchBarWidth } from 'components/SearchBar';
import { selectCategory } from 'ducks/links';

class Categories extends Component {
  state = {
    selected: null,
    hovered: null,
  };

  categories = {
    video: 'video',
    tutorial: 'tutorial',
    article: 'article',
    stackoverflow: 'stackoverflow',
    github: 'github',
    reddit: 'reddit',
    other: 'other',
  };

  static getDerivedStateFromProps(props, state) {
    if (props.category !== state.selected) {
      return {
        ...state,
        selected: props.category,
      };
    }
    return state;
  }

  handleSelect = (category) => {
    this.setState({ selected: category });
  };

  handleHover = (category) => {
    this.setState({ hovered: category });
  };

  render() {
    return (
      <List onMouseLeave={() => this.handleHover(null)}>
        {Object.keys(this.categories).map((category, index) => (
          <li
            key={index}
            className={category}
            onMouseEnter={() => this.handleHover(category)}
            onClick={() => this.props.selectCategory(category)}
          >
            <span
              className={`color-box ${(this.state.hovered &&
              this.state.hovered !== category
                ? 'greyed'
                : '') ||
                (this.state.selected && this.state.selected !== category
                  ? 'greyed'
                  : '')}`}
            />
            {category[0].toUpperCase() + category.slice(1)}
          </li>
        ))}
      </List>
    );
  }
}

const List = styled.ul`
  margin-bottom: 4rem;
  width: ${searchBarWidth};
  display: flex;
  justify-content: space-between;
  position: relative;

  li {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  li span {
    display: inline-block;
    --box-size: 20px;
    height: var(--box-size);
    width: var(--box-size);
    background: tomato;
    margin-right: 0.6rem;
  }

  .greyed {
    transition: all 0.2s;
    filter: grayscale(95%);
  }

  .github .color-box {
    background: linear-gradient(to bottom right, var(--gradient-category-1));
  }

  .tutorial .color-box {
    background: linear-gradient(to bottom right, var(--gradient-category-2));
  }

  .article .color-box {
    background: linear-gradient(to bottom right, var(--gradient-category-3));
  }

  .stackOverflow .color-box {
    background: linear-gradient(to bottom right, var(--gradient-category-4));
  }

  .video .color-box {
    background: linear-gradient(to bottom right, var(--gradient-category-5));
  }

  .reddit .color-box {
    background: linear-gradient(to bottom right, var(--gradient-category-6));
  }

  .other .color-box {
    background: linear-gradient(to bottom right, var(--gradient-category-7));
  }
`;

const mapStateToProps = (state) => ({
  category: state.links.category,
});

export default connect(
  mapStateToProps,
  { selectCategory }
)(Categories);
