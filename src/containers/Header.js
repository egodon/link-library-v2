import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import { clearFilters } from 'ducks/links';

const Header = ({
  handleLogIn,
  handleSignUp,
  handleLogOut,
  user,
  clearFilters,
}) => (
  <Container>
    <Content>
      <Link to="/">
        <h1 onClick={clearFilters}>Link Library</h1>
      </Link>
      {user ? (
        <div className="logged-in">
          <Link to="add-link">Add Link</Link>
          <Link to="add-note">Add Note</Link>
          <span onClick={handleLogOut}>
            {getInitials(user.user_metadata.full_name)}
          </span>
        </div>
      ) : (
        <div className="logged-out">
          <button onClick={handleLogIn}>Login</button>
          <button onClick={handleSignUp}>Signup</button>
        </div>
      )}
    </Content>
  </Container>
);

const textColor = '#9d9d9d';
export const HEADER_HEIGHT = '6rem';

const Container = styled.header`
  position: fixed;
  top: 0;
  background: #090909;
  color: ${textColor};
  height: ${HEADER_HEIGHT};
  display: flex;
  align-items: center;
  margin-bottom: 2.8rem;
  width: 100vw;
  z-index: 100;

  h1 {
    font-size: 2.6rem;
    font-weight: 500;
  }

  h1:hover {
    color: #fff;
    cursor: pointer;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 120rem;

  .logged-out {
    width: 10.5rem;
    display: flex;
    justify-content: space-between;
  }

  .logged-in {
    width: 22rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

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

  a {
    color: ${textColor};
  }

  a:hover {
    color: #fff;
    cursor: pointer;
  }

  a[aria-current=page] {
    color: #fff;
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
