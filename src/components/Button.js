import React from 'react';
import styled from 'styled-components';

const Button = ({ text }) => <StyledButton>{text}</StyledButton>;

const StyledButton = styled.button`
  padding: 3px 6px;
`;

export default Button;
