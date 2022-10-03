import addFormListener from './listeners/formListener';
import addLinksListener from './listeners/linksListener';

export default (watchedState) => {
  addFormListener(watchedState);
  addLinksListener(watchedState);
};
