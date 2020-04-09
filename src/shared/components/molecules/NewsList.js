import React from 'react';
import List from '../atoms/List';
import ListItem from '../atoms/ListItem';

import { setLocalstorage, getLocalstorage } from '../../helpers';

const News = ({ data }) => {
  const hideNews = (e) => {
    const parentDiv = e.target.parentElement;
    const objectId = parentDiv.getAttribute('id');
    parentDiv.parentElement && parentDiv.parentElement.classList.add('hide');

    setLocalstorage('objectId', objectId);
  };
  return (
    <div>
      <List>
        {data.hits &&
          data.hits.map((item) => {
            return (
              <ListItem
                key={item.objectID}
                item={item}
                hideNewsHandler={hideNews}
              />
            );
          })}
      </List>
    </div>
  );
};

export default News;
