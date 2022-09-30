import checkFeeds from './checkingFeeds';

export default (state) => {
  const delay = 5000;
  setTimeout(function setInterval() {
    checkFeeds(state);
    setTimeout(setInterval, delay);
  }, delay);
};
