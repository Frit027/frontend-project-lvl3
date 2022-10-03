import initContainer from './container';

const createA = ({ id, title, link }) => {
  const a = document.createElement('a');
  a.classList.add('fw-bold');
  a.setAttribute('href', link);
  a.setAttribute('target', '_blank');
  a.setAttribute('rel', 'noopener noreferrer');
  a.setAttribute('data-id', id);
  a.textContent = title;

  return a;
};

const createButton = ({
  id, title, description, link,
}) => {
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-outline-primary', 'btn-sm');
  button.setAttribute('type', 'button');
  button.setAttribute('data-bs-toggle', 'modal');
  button.setAttribute('data-bs-target', '#modal');
  button.setAttribute('data-id', id);
  button.textContent = 'Просмотр';
  button.addEventListener('click', () => {
    document
      .querySelector('.modal-footer > a')
      .setAttribute('href', link);
    const modalTitle = document.body.querySelector('.modal-title');
    modalTitle.textContent = title;
    const modalBody = document.body.querySelector('.modal-body');
    modalBody.textContent = description;
  });

  return button;
};

export default (newPosts, previousPosts) => {
  const container = document.querySelector('.posts');
  if (!container.hasChildNodes()) {
    initContainer(container, 'Посты');
  }

  const liClassNames = [
    'list-group-item', 'd-flex', 'justify-content-between',
    'align-items-start', 'border-0', 'border-end-0',
  ];
  const posts = newPosts
    .slice(previousPosts.length, newPosts.length)
    .map((post) => {
      const a = createA(post);
      const button = createButton(post);
      const li = document.createElement('li');

      li.classList.add(...liClassNames);
      li.append(a, button);

      return li;
    });
  container.querySelector('ul').prepend(...posts);
};
