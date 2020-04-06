import React, { Component } from 'react';
import News from './components/organisms/News';

const data = {
  hits: [
    {
      created_at: '2020-04-05T21:07:45.000Z',
      title: 'Crafting “Crafting Interpreters”',
      url:
        'http://journal.stuffwithstuff.com/2020/04/05/crafting-crafting-interpreters/',
      author: 'mmm_grayons',
      points: 506,
      story_text: null,
      comment_text: null,
      num_comments: 57,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at_i: 1586120865,
    },
    {
      created_at: '2020-04-05T15:55:43.000Z',
      title: 'All models are wrong, but some are completely wrong',
      url:
        'https://rssdss.design.blog/2020/03/31/all-models-are-wrong-but-some-are-completely-wrong/',
      author: 'magoghm',
      points: 267,
      story_text: null,
      comment_text: null,
      num_comments: 160,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at_i: 1586102143,
    },
  ],
};

class App extends Component {
  render() {
    return <News data={data} />;
  }
}

export default App;
