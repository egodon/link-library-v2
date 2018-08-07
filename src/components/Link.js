import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Highlighter from 'react-highlight-words';
import { getColorFromVariable, addAlphaChannel } from 'global.css';

const Link = ({ link, searchQuery }) => (
  <Panel gradient={getCategoryGradient(link.category)}>
    <h4>
      <a href={link.url}>
        <Highlighter
          highlightClassName="highlight"
          searchWords={[searchQuery]}
          textToHighlight={link.title}
        />
      </a>
    </h4>
    <p className="info">
      Submitted by {link.submitter} on {link.submissionDate}
    </p>
  </Panel>
);

const Panel = styled.li`
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
  width: 100%;
  height: 6rem;
  padding: 1rem 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1.8rem;
  background: #fafafa;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 12px;
    height: 100%;
    background: linear-gradient(to bottom, ${(props) => props.gradient});
  }

  h4 {
    margin-bottom: 0.2rem;
  }

  .info {
    font-size: 1.2rem;
    color: #999;
  }

  .highlight {
    background: linear-gradient(
      to left,
      ${(props) => {
        const colors = getColorFromVariable(props.gradient);
        const colorsArr = colors.split(',');
        return addAlphaChannel({ colors: colorsArr, alphaValue: '80' }).join(',');
      }}
    );
  }
`;

function getCategoryGradient(category) {
  const c = category.toLowerCase();
  switch (c) {
    case 'github':
      return 'var(--gradient-category-1)';

    case 'tutorial':
      return 'var(--gradient-category-2)';

    case 'article':
      return 'var(--gradient-category-3)';

    case 'stackoverflow':
      return 'var(--gradient-category-4)';

    case 'video':
      return 'var(--gradient-category-5)';

    case 'reddit':
      return 'var(--gradient-category-6)';

    case 'other':
      return 'var(--gradient-category-7)';

    default:
      return 'red, red';
  }
}

const mapStateToProps = (state) => ({
  searchQuery: state.links.searchQuery,
});

export default connect(mapStateToProps)(Link);
