import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
`;
export default function List({ children }) {
  return <Ul>{children}</Ul>;
}
