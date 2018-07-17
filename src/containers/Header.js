import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <Container>
    <Content>
      <h1>Link Library</h1>

      <div className="links">
        <a href="#">Login</a>
        <a href="#">Register</a>
      </div>
    </Content>
  </Container>
);

const textColor = '#9d9d9d';

const Container = styled.header`
  background: #090909;
  color: ${textColor};
  height: 6rem;
  padding: 1rem 5rem;
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

  .links {
    width: 12rem;
    display: flex;
    justify-content: space-between;
  }

  a {
    color: ${textColor};
  }
`;

export default Header;
