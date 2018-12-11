import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';
import Highlighter from 'react-highlight-words';
import { deleteLink } from 'ducks/links';
import Icon, { icons } from 'components/Icon';
import { getColorFromVariable, addAlphaChannel } from 'style/global.css';
import { fadeIn } from 'style/animations.css';

const Link = ({ link, searchQuery, user, deleteLink, delay }) => (
  <Panel href={link.url} gradient={getCategoryGradient(link.category)} delay={delay}>
    <TopRow>
      <h4>
        <Highlighter
          highlightClassName="highlight"
          searchWords={[searchQuery]}
          textToHighlight={link.title}
        />
      </h4>
      {user && (
        <Actions>
          <Action onClick={(e) => [e.preventDefault(), deleteLink(link)]}>
            <Icon icon={icons.close} size={12} />
          </Action>
        </Actions>
      )}
    </TopRow>
    <Url>{link.url}</Url>
  </Panel>
);

const _Panel = styled.a`
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
  width: 100%;
  padding: 1rem 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1.8rem;
  background: #fafafa;
  opacity: 0;
  cursor: pointer;

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

  /* Used for Highlighter component */
  .highlight {
    background: linear-gradient(to left, ${highlightBackground});
  }
`;

const Panel = styled(_Panel)`
  animation: ${fadeIn} 0.2s ${(p) => p.delay}ms ease-in forwards;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Url = styled.p`
  font-size: 1.2rem;
  color: #999;
`;

const Actions = styled.div`
  display: flex;
  opacity: 0;
  transition: opacity 0.1s ease-in;

  ${Panel}:hover & {
    opacity: 1;
  }
`;

const xSize = '23px';
const Action = styled.span`
  font-size: 1.2rem;
  cursor: pointer;
  color: var(--gray-600);
  transition: all 0.1s ease-in;
  padding: 5px;
  border-radius: 50%;
  background-color: transparent;
  height: ${xSize};
  width: ${xSize};

  &:hover {
    color: #000;
    background-color: var(--gray-300);
    line-height: 1;
  }
`;

function highlightBackground(props) {
  const colors = getColorFromVariable(props.gradient);
  const colorsArr = colors.split(',');
  return addAlphaChannel({ colors: colorsArr, alphaValue: '80' }).join(',');
}

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
