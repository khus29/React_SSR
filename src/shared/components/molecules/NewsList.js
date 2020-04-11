import React, { Component } from 'react';
import queryString from 'query-string';
import styled from 'styled-components';
import { fetchNewsData } from '../../api';

import List from '../atoms/List';
import { Link } from 'react-router-dom';
import ListChild from '../atoms/ListChild';
import ListItem from '../molecules/ListItem';

import { setLocalstorage, getLocalstorage } from '../../helpers';

const Div = styled.div`
  background-color: #ff4500;
  margin-left: 40px;
  padding: 10px 20px;
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
        <p>Page number : {currentPage}</p>
        <Div>top | new</Div>
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
