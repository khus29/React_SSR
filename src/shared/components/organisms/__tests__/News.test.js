import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import News from '../News';

configure({ adapter: new Adapter() });
describe('News Component', () => {
  const props = {
    data: [
      {
        created_at: '2019-02-28T11:38:16.000Z',
        title:
          'Mozilla releases the largest to-date public domain transcribed voice dataset',
        url:
          'https://blog.mozilla.org/blog/2019/02/28/sharing-our-common-voices-mozilla-releases-the-largest-to-date-public-domain-transcribed-voice-dataset/',
        author: 'Vinnl',
        points: 705,
        comment_text: null,
        num_comments: 61,
        created_at_i: 1551353896,
        objectID: '19270646',
      },
      {
        created_at: '2019-02-28T11:38:16.000Z',
        title:
          'Mozilla releases the largest to-date public domain transcribed voice dataseta',
        url:
          'https://blog.mozilla.org/blog/2019/02/28/sharing-our-common-voices-mozilla-releases-the-largest-to-date-public-domain-transcribed-voice-dataset/',
        author: 'Vinnla',
        points: 705,
        comment_text: null,
        num_comments: 61,
        created_at_i: 1551353896,
        objectID: '19270686',
      },
    ],
  };

  test('should render correctly and match snapshot', () => {
    const tree = shallow(<News {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
