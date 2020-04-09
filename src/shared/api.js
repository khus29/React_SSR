import fetch from 'isomorphic-fetch';

export const fetchNewsData = (page) => {
  const encoded = encodeURI(
    `https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=20&page=${page}`
  );
  return fetch(encoded)
    .then((data) => data.json())
    .then((item) => item.hits)
    .catch((error) => {
      console.log('Error occured', error);
      return null;
    });
};
