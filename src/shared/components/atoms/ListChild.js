import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
  background-color: #f6f6f0;
  font-family: Verdana, Geneva, sans-serif;
  font-size: 10px;
  padding: 8px 10px 8px 40px;

  &:nth-child(odd) {
    background-color: #e6e6e0;
  }

  &.hide {
    display: none;
  }
  &.pagination {
    padding: 25px 100px;
  }
  .more-link {
    color: #ff4500;
    font-size: 15px;
    text-decoration: none;
  }
`;
export default function ListChild({ className, children }) {
  return <Li className={className}>{children}</Li>;
}
