import React from 'react';
import styled from 'styled-components';

const SpanTag = styled.span`
  &.comments {
    margin-right: 30px;
  }
  &.upvotes,
  &.author,
  &.timeStamp {
    margin-right: 10px;
  }
  &.title {
    font-size: 13px;
    display: block;
    margin: 10px 0;
    @media (min-width: 1024px) {
      display: inline;
      margin: 0 40px;
    }
  }
  &.timeStamp {
    color: #828286;
  }
  &.top-filter {
    color: #ffffff;
  }
`;

const Span = ({ className, children }) => (
  <SpanTag className={className}>{children}</SpanTag>
);

export default Span;
