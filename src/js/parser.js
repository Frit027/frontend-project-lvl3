import uniqueId from 'lodash/uniqueId';

const axios = require('axios');

export const axiosXML = (url) => axios
  .get(`https://allorigins.hexlet.app/get?disableCache=true&url=${encodeURIComponent(url)}`)
  .then((response) => {
    const parser = new DOMParser();
    return parser.parseFromString(response.data.contents, 'application/xml');
  });

export const getFeedWithPosts = (doc, rssURL) => {
  const feedID = uniqueId();
  const feed = {
    id: feedID,
    title: doc.querySelector('title').textContent,
    description: doc.querySelector('description').textContent,
    rssURL,
  };

  const items = doc.querySelectorAll('item');
  const posts = Array.from(items).map((item) => ({
    id: uniqueId(),
    feedID,
    title: item.querySelector('title').textContent,
    link: item.querySelector('link').textContent,
  }));
  return { feed, posts };
};
