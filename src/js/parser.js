import uniqueId from 'lodash/uniqueId';

export const getFeed = (doc, rssURL) => ({
  id: uniqueId(),
  title: doc.querySelector('title').textContent,
  description: doc.querySelector('description').textContent,
  rssURL,
});

export const getPosts = (doc, feedID) => Array
  .from(doc.querySelectorAll('item'))
  .map((item) => ({
    id: uniqueId(),
    feedID,
    title: item.querySelector('title').textContent,
    description: item.querySelector('description').textContent,
    link: item.querySelector('link').textContent,
  }));
