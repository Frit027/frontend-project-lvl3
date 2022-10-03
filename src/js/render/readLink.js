export default (id) => {
  const a = document.body.querySelector(`a[data-id="${id}"]`);
  a.classList.remove('fw-bold');
  a.classList.add('fw-normal', 'link-secondary');
};
