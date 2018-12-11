import React from 'react';
import styled from 'styled-components/macro';
import netlifyIdentity from 'netlify-identity-widget';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import { clearFilters } from 'ducks/links';
import Logo from 'components/Logo';

const Header = ({ user, clearFilters }) => (
  <Container>
    <Content>
      <LogoLink to="/">
        <Logo />
        <h1 onClick={clearFilters}>Link Library</h1>
      </LogoLink>
      {user && user.user_metadata.full_name ? (
        <div className="logged-in">
          <Link to="add-link">Add Link</Link>
          <span onClick={netlifyIdentity.logout}>
            {getInitials(user.user_metadata.full_name)}
          </span>
        </div>
      ) : (
        <div className="logged-out">
          <button onClick={() => netlifyIdentity.open('login')}>Login</button>
          <button onClick={() => netlifyIdentity.open('signup')}>Signup</button>
        </div>
      )}
    </Content>
  </Container>
);

const textColor = '#090909';
export const HEADER_HEIGHT = '7.4rem';

const Container = styled.header`
  position: fixed;
  top: 0;
  color: ${textColor};
  height: ${HEADER_HEIGHT};
  background: #fff;
  display: flex;
  align-items: center;
  margin-bottom: 2.8rem;
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 120rem;

  .logged-out {
    display: flex;
    justify-content: space-between;
  }

  .logged-in {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    min-width: 160px;

    span {
      padding: 0 6px;
      line-height: 3.5rem;
      background: #ff6e40;
      --size: 3.5rem;
      width: var(--size);
      height: var(--size);
      border-radius: 50%;
      color: #eee;
      cursor: pointer;
    }
  }

  a:not(:last-child),
  button:not(:last-child) {
    margin-right: 1rem;
  }

  a {
    color: ${textColor};
  }

  button:hover,
  a:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  
  h1 {
    font-size: 2.6rem;
    font-weight: 500;
    color: #090909;
    transition: opacity .2s ease;
    margin-left: 1.4rem;
  }

  h1:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const getInitials = (fullName) =>
  fullName
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2);

const mapStateToProps = (state) => ({ user: state.user });

export default connect(
  mapStateToProps,
  { clearFilters }
)(Header);
