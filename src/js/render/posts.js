import initContainer from './container';

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
      const li = document.createElement('li');
      li.classList.add(...liClassNames);

      const a = document.createElement('a');
      a.classList.add('fw-bold');
      a.setAttribute('href', post.link);
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
      a.textContent = post.title;
      a.addEventListener('click', () => {
        a.classList.remove('fw-bold');
        a.classList.add('fw-normal', 'link-secondary');
      });

      li.append(a);
      return li;
    });
  container.querySelector('ul').prepend(...posts);
};
