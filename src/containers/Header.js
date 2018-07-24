import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Button from '../components/Button';

const Header = ({ handleLogIn, handleSignUp, handleLogOut, user }) => (
  <Container>
    <Content>
      <h1>Link Library</h1>
      {user ? (
        <div className="logged-in" onClick={handleLogOut}>
          <Button text="Add Link" />
          <Button text="Add Code" />
          <span>{getInitials(user.user_metadata.full_name)}</span>
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

const Container = styled.header`
  background: #090909;
  color: ${textColor};
  height: 6rem;
  display: flex;
  align-items: center;
  margin-bottom: 2.8rem;

  h1 {
    font-size: 2.6rem;
    font-weight: 500;
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

  button {
    color: ${textColor};
  }

  button:hover {
    color: #fff;
    cursor: pointer;
  }
`;

const getInitials = (fullName) =>
  fullName
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2);

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(Header);
