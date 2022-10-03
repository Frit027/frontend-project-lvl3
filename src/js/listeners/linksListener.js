export default (watchedState) => {
  const state = watchedState;
  document.body
    .querySelector('.posts')
    .addEventListener('click', (e) => {
      const { id } = e.target.dataset;
      if (id) {
        state.readPostLinkID = id;
      }
    });
};
