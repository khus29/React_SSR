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
    margin-right: 5px;
  }
  &.timeStamp {
    color: #828286;
  }
`;

const Span = ({ className, children }) => (
  <SpanTag className={className}>{children}</SpanTag>
);

export default Span;
