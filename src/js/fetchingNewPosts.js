import differenceWith from 'lodash/differenceWith';
import axiosXML from './network';
import getParsedData from './parser';
import setError from './error';

export default (watchedState) => {
  watchedState.feeds.forEach((feed) => {
    axiosXML(feed.rssURL)
      .then((document) => {
        const { items } = getParsedData(document);
        watchedState.posts.push(
          ...differenceWith(items, watchedState.posts, (p1, p2) => p1.title === p2.title),
        );
      })
      .catch((error) => {
        setError(watchedState, error.message);
      });
  });
};
