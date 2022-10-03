export default (button, title, description, link) => {
  button.addEventListener('click', () => {
    document
      .querySelector('.modal-footer > a')
      .setAttribute('href', link);
    const modalTitle = document.body.querySelector('.modal-title');
    modalTitle.textContent = title;
    const modalBody = document.body.querySelector('.modal-body');
    modalBody.textContent = description;
  });
};
