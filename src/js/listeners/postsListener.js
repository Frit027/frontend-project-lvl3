import find from 'lodash/find';

export default (watchedState) => {
  const state = watchedState;
  document.body
    .querySelector('.posts')
    .addEventListener('click', (e) => {
      const { id } = e.target.dataset;
      if (id) {
        state.readPostLinkID = id;
        if (e.target.tagName === 'BUTTON') {
          state.openedPostModal = find(state.posts, { id });
        }
      }
    });
};
