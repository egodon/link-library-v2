import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';
import Highlighter from 'react-highlight-words';
import { deleteLink } from 'ducks/links';
import { getColorFromVariable, addAlphaChannel } from 'style/global.css';
import { fadeIn } from 'style/animations.css';

const Link = ({ link, searchQuery, user, deleteLink, delay }) => (
  <Panel gradient={getCategoryGradient(link.category)} delay={delay}>
    <TopRow>
      <a href={link.url}>
        <h4>
          <Highlighter
            highlightClassName="highlight"
            searchWords={[searchQuery]}
            textToHighlight={link.title}
          />
        </h4>
      </a>
      {user && (
        <Actions>
          <Action />
          <Action onClick={() => deleteLink(link)}>Delete</Action>
        </Actions>
      )}
    </TopRow>
    <p className="info">
      Submitted by {link.submitter} on {link.submissionDate}
    </p>
  </Panel>
);

const _Panel = styled.li`
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
  opacity: 0;

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

  /* Used for Highlighter component */
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

const Panel = styled(_Panel)`
  animation: ${fadeIn} 0.2s ${(p) => p.delay}ms ease-in forwards;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Actions = styled.div`
  display: flex;
  opacity: 0;
  transition: opacity 0.1s ease-in;

  ${Panel}:hover & {
    opacity: 1;
  }
`;

const Action = styled.span`
  font-size: 1.2rem;
  cursor: pointer;
  color: var(--gray-600);
  transition: color 0.1s ease-in;

  &:hover {
    color: #000;
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
  user: state.user,
});

export default connect(
  mapStateToProps,
  { deleteLink }
)(Link);
