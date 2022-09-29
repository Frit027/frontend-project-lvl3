import changeState from './formComponents';
import showFeedback from './feedback';
import addFeed from './feeds';
import addPosts from './posts';

export default (path, value, previousValue) => {
  if (path === 'additionForm.state') {
    changeState(value);
  }

  if (path === 'additionForm.errorKey') {
    showFeedback({ key: value, isError: true });
  }

  if (path === 'feeds') {
    addFeed(value[value.length - 1]);
  }

  if (path === 'posts') {
    addPosts(value, previousValue);
  }
};
