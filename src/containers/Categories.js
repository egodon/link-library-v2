import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { selectCategory } from 'ducks/links';

class Categories extends Component {
  state = {
    selected: null,
    categoryHovered: null,
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
    this.setState({ categoryovered: category });
  };

  render() {
    return (
      <Container>
        <h3>Categories</h3>
        <List onMouseLeave={() => this.handleHover(null)}>
          {Object.keys(this.categories).map((category, index) => (
            <li
              key={index}
              className={category}
              onMouseEnter={() => this.handleHover(category)}
              onClick={() => this.props.selectCategory(category)}
            >
              <span
                className={
                  this.state.selected && this.state.selected !== category
                    ? 'greyed'
                    : 'color-box'
                }
              />
              {category[0].toUpperCase() + category.slice(1)}
            </li>
          ))}
        </List>
      </Container>
    );
  }
}

const Container = styled.div`
  position: fixed;
  left: 3rem;
  top: 20%;

  h3 {
    margin-bottom: 1.5rem;
  }
`;

const List = styled.ul`
  margin-bottom: 4rem;

  li {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 1.2rem;
  }

  li span {
    display: inline-block;
    --box-size: 20px;
    height: var(--box-size);
    width: var(--box-size);
    background: black;
    margin-right: 0.6rem;
  }

  .greyed {
    transition: all 0.1s;
    background: #9e9e9e;
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

  .stackoverflow .color-box {
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
