import find from 'lodash/find';

export default (e, watchedState) => {
  const state = watchedState;
  const { id } = e.target.dataset;
  if (id) {
    state.readPostLinkID = id;
    if (e.target.tagName === 'BUTTON') {
      state.openedPostModal = find(state.posts, { id });
    }
  }
};
