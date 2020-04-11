import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  margin-top: 0;
`;
export default function List({ children }) {
  return <Ul>{children}</Ul>;
}
