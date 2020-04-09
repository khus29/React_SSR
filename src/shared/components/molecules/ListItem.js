import React, { Component } from 'react';
import styled from 'styled-components';
import ListChild from '../atoms/ListChild';
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

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideNews: false,
      upVoteValue: props.item.points,
    };
  }
  componentDidMount() {
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
    } else if (upVote !== points) {
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
      <ListChild className={`${hideNews ? 'hide' : ''}`}>
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
      </ListChild>
    );
  }
}

export default ListItem;
