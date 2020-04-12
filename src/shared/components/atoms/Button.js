import React from 'react';
import styled from 'styled-components';

const ButtonTag = styled.button`
  &.hide-link,
  &.upvote-link {
    background: transparent;
    border: 0;
    cursor: pointer;
  }

  &.upvote-link {
    padding: 0;
    margin: 0;
    svg {
      fill: #9c9c9c;
      margin-right: 10px;
      transform: rotate(-90deg);
    }
  }

  &.hide-link {
    display: block;
    margin-top: 20px;
    @media (min-width: 768px) {
      display: inline;
      margin-top: 10px;
    }
  }
`;

const Button = ({ className, children, onClickHandler, ariaLabel }) => (
  <ButtonTag
    className={className}
    onClick={onClickHandler}
    aria-label={ariaLabel}
  >
    {children}
  </ButtonTag>
);

export default Button;
