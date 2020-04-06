import React from 'react';
import NewsList from '../molecules/NewsList';

const News = ({ data }) => {
  return (
    <div>
      <NewsList data={data} />
    </div>
  );
};
export default News;
