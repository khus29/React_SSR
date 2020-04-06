import React from 'react';
import styled from 'styled-components';
import List from '../atoms/List';
import Icon from '../atoms/Icon';
import Span from '../atoms/Span';
import Anchor from '../atoms/Anchor';

import { timeSinceFormat, getDomain } from '../../helpers';

const Li = styled.li`
  background-color: #f6f6f0;
  font-family: Verdana, Geneva, sans-serif;
  font-size: 10px;
  padding: 8px 10px 8px 40px;

  &:nth-child(odd) {
    background-color: #e6e6e0;
  }
`;

const News = ({ data }) => {
  return (
    <div>
      <List>
        {data.hits &&
          data.hits.map((item, index) => {
            return (
              <Li key={index}>
                <div>
                  <Span className='comments'>{item.num_comments}</Span>
                  <Span className='upvotes'>{item.points}</Span>
                  <Icon type='arrow' />
                  <Span className='title'>{item.title}</Span>
                  <Anchor className='link' href={item.url}>
                    ({getDomain(item.url)})
                  </Anchor>
                  <Span className='author'>by {item.author}</Span>
                  <Span className='timeStamp'>
                    {timeSinceFormat(item.created_at_i)}
                  </Span>
                  <Anchor className='hide_link'>[hide]</Anchor>
                </div>
              </Li>
            );
          })}
      </List>
    </div>
  );
};

export default News;
