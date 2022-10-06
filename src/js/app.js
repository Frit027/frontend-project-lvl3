import addFormListener from './listeners/formListener';
import addLinksListener from './listeners/postsListener';

export default (watchedState) => {
  addFormListener(watchedState);
  addLinksListener(watchedState);
};
