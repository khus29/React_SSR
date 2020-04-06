import React from 'react';
import styled from 'styled-components';

const AnchorTag = styled.a`
  margin-right: 10px;
  &.link {
    color: #828286;
  }
  &.hide_link {
    cursor: pointer;
  }
`;

const Anchor = ({ className, children, href }) => (
  <AnchorTag className={className} href={href}>
    {children}
  </AnchorTag>
);

export default Anchor;
