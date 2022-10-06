export default (post) => {
  document
    .querySelector('.modal-footer > a')
    .setAttribute('href', post.link);
  const modalTitle = document.body.querySelector('.modal-title');
  modalTitle.textContent = post.title;
  const modalBody = document.body.querySelector('.modal-body');
  modalBody.textContent = post.description;
};
