import React, { Component } from 'react';
import queryString from 'query-string';
import styled from 'styled-components';
import { fetchNewsData } from '../../api';

import List from '../atoms/List';
import Span from '../atoms/Span';
import Anchor from '../atoms/Anchor';
import { Link } from 'react-router-dom';
import ListChild from '../atoms/ListChild';
import ListItem from '../molecules/ListItem';

import { setLocalstorage, getLocalstorage } from '../../helpers';

const Div = styled.div`
  margin-bottom: 20px;
  @media (min-width: 1024px) {
    margin: 0 20px 20px;
  }

  &.navigation {
    background-color: #ff4500;
    margin: 0;
    padding: 10px 20px;
    @media (min-width: 1024px) {
      margin: 0 20px;
      padding: 10px 20px;
    }
  }
`;
const Image = styled.img`
  border: 1px #ffffff solid;
`;
class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      newsData: props.data,
    };
  }
  handlePageChange(pageNum) {
    fetchNewsData(pageNum).then((data) => {
      this.setState({
        currentPage: pageNum,
        newsData: data,
      });
    });
  }
  hideNews(e) {
    const parentDiv = e.target.parentElement;
    const objectId = parentDiv.getAttribute('id');
    parentDiv.parentElement && parentDiv.parentElement.classList.add('hide');

    setLocalstorage('objectId', objectId);
  }

  render() {
    const { newsData, currentPage } = this.state;

    const url = typeof window !== 'undefined' && window.location.search;
    const values = queryString.parse(url);
    const nextPage = +currentPage + 1;
    if (values.page && currentPage !== values.page) {
      this.handlePageChange(values.page);
    }

    return (
      <div>
        <Div>Page number : {currentPage + 1}</Div>
        <Div className='navigation'>
          <Anchor href='/'>
            <Image
              src='https://news.ycombinator.com/y18.gif'
              width='15'
              height='15'
            />
          </Anchor>
          <Span className='top-filter'>top</Span> | new
        </Div>
        <List>
          <React.Fragment>
            {newsData &&
              newsData.map((item) => {
                return (
                  <ListItem
                    key={item.objectID}
                    item={item}
                    hideNewsHandler={this.hideNews}
                  />
                );
              })}
            <ListChild className='pagination'>
              <Link
                to={`?page=${nextPage}`}
                className='more-link'
                aria-label='click here for more news'
              >
                More News
              </Link>
            </ListChild>
          </React.Fragment>
        </List>
      </div>
    );
  }
}

export default NewsList;
