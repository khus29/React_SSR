import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from '../atoms/Icon';
import Span from '../atoms/Span';
import Anchor from '../atoms/Anchor';
import Button from '../atoms/Button';
import {
  getDomain,
  timeSinceFormat,
  getLocalstorage,
  setSessionStorage,
  getSessionStorage,
} from '../../helpers';

const Li = styled.li`
  background-color: #f6f6f0;
  font-family: Verdana, Geneva, sans-serif;
  font-size: 10px;
  padding: 8px 10px 8px 40px;

  &:nth-child(odd) {
    background-color: #e6e6e0;
  }

  &.hide {
    display: none;
  }
`;
class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideNews: false,
      addVote: 0,
      upVoteValue: props.item.points,
    };
  }
  componentDidMount() {
    const { addVote } = this.state;
    const { item } = this.props;
    const { objectID, points } = item;
    //hiden news handling
    const hiddenObjectIds = getLocalstorage('objectId');
    let isNewsHidden = false;
    if (hiddenObjectIds && hiddenObjectIds.includes(objectID)) {
      isNewsHidden = true;
    }

    //updated upvotes handling
    const upVotesArray = getSessionStorage('upVotes');
    let upVote = points;
    if (upVotesArray && upVotesArray[objectID]) {
      upVote = upVotesArray[objectID];
    }

    //set state
    if (isNewsHidden) {
      this.setState({ hideNews: isNewsHidden });
    } else if (addVote === 0 && upVote !== points) {
      this.setState({ upVoteValue: upVote });
    }
  }

  upVoteHandler() {
    const { item } = this.props;
    const { upVoteValue } = this.state;
    const { objectID } = item;
    const totalPoints = upVoteValue + 1;

    const obj = {
      ...getSessionStorage('upVotes'),
      [objectID]: totalPoints,
    };
    setSessionStorage('upVotes', obj);
    this.setState({ upVoteValue: totalPoints });
  }

  render() {
    const { item, hideNewsHandler } = this.props;
    const { hideNews, upVoteValue } = this.state;
    return (
      <Li className={`${hideNews ? 'hide' : 'aa'}`}>
        <div id={item.objectID}>
          <Span className='comments'>{item.num_comments}</Span>
          <Span className='upvotes'>{upVoteValue}</Span>
          <Button
            className='upvote-link'
            onClickHandler={this.upVoteHandler.bind(this)}
            ariaLabel='arrow'
          >
            <Icon type='arrow' />
          </Button>
          <Span className='title'>{item.title}</Span>
          <Anchor className='link' href={item.url}>
            ({getDomain(item.url)})
          </Anchor>
          <Span className='author'>by {item.author}</Span>
          <Span className='timeStamp'>
            {timeSinceFormat(item.created_at_i)}
          </Span>
          <Button className='hide-link' onClickHandler={hideNewsHandler}>
            [hide]
          </Button>
        </div>
      </Li>
    );
  }
}

export default ListItem;
