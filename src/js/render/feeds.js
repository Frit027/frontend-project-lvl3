import initContainer from './container';

export default (feed) => {
  const container = document.querySelector('.feeds');
  if (!container.hasChildNodes()) {
    initContainer(container, 'Фиды');
  }
  const li = document.createElement('li');
  li.classList.add('list-group-item', 'border-0', 'border-end-0');

  const h3 = document.createElement('h3');
  h3.classList.add('h6', 'm-0');
  h3.textContent = feed.title;

  const p = document.createElement('p');
  p.classList.add('m-0', 'small', 'text-black-50');
  p.textContent = feed.description;

  li.append(h3, p);
  container.querySelector('ul').prepend(li);
};
