import React from 'react';
import { IoMdPlay } from 'react-icons/io';
import styled from 'styled-components';

const Button = styled.button`
  border: 0;
  padding: 0;
  margin: 0;
  background: transparent;
  cursor: pointer;
  svg {
    fill: #9c9c9c;
    margin-right: 10px;
    transform: rotate(-90deg);
  }
`;

const Icon = ({ type }) => (
  <Button aria-label={type}>
    <IoMdPlay />
  </Button>
);

export default Icon;
