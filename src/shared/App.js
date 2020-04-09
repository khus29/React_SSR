import React, { Component } from 'react';
import News from './components/organisms/News';

const data = {
  hits: [
    {
      created_at: '2020-04-07T06:41:44.000Z',
      title: 'The private and public lives of Albert Einstein',
      url:
        'https://www.the-tls.co.uk/articles/the-public-and-private-lives-of-albert-einstein-p-d-smith/',
      author: 'okfine',
      points: 44,
      story_text: null,
      comment_text: null,
      num_comments: 11,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at_i: 1586241704,
      _tags: ['story', 'author_okfine', 'story_22800880', 'front_page'],
      objectID: '22800880',
    },
    {
      created_at: '2020-04-08T01:56:38.000Z',
      title: "Show HN: Rust Implementation of Conway's Game of Life",
      url: 'https://github.com/brundonsmith/life',
      author: 'brundolf',
      points: 40,
      story_text: null,
      comment_text: null,
      num_comments: 12,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at_i: 1586310998,
      _tags: [
        'story',
        'author_brundolf',
        'story_22809378',
        'show_hn',
        'front_page',
      ],
      objectID: '22809378',
    },
    {
      created_at: '2020-04-07T00:56:44.000Z',
      title: 'Welcome to DiscDAG',
      url: 'https://www.solipsys.co.uk/DiscDAG.html',
      author: 'mr_tyzic',
      points: 33,
      story_text: null,
      comment_text: null,
      num_comments: 9,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at_i: 1586221004,
      _tags: ['story', 'author_mr_tyzic', 'story_22799411', 'front_page'],
      objectID: '22799411',
    },
  ],
};

class App extends Component {
  render() {
    return <News data={data} />;
  }
}

export default App;
