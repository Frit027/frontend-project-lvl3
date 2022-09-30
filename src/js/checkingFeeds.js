import differenceWith from 'lodash/differenceWith';
import axiosXML from './network';
import { getPosts } from './parser';
import setError from './savingError';

export default (watchedState) => {
  watchedState.feeds.forEach((feed) => {
    axiosXML(feed.rssURL)
      .then((document) => {
        const posts = getPosts(document, feed.id);
        watchedState.posts.push(
          ...differenceWith(posts, watchedState.posts, (p1, p2) => p1.title === p2.title),
        );
      })
      .catch((error) => {
        setError(watchedState, error.message);
      });
  });
};
