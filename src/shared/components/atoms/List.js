import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  margin-top: 0;
  padding: 0;
  @media (min-width: 1024px) {
    padding: 0 20px;
  }
`;
export default function List({ children }) {
  return <Ul>{children}</Ul>;
}
