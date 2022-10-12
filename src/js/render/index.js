import onChange from 'on-change';
import changeState from './form';
import addFeed from './feeds';
import addPosts from './posts';

export default (elements, state, i18nextInstance) => onChange(
  state,
  (path, value, previousValue) => {
    if (path === 'additionForm.state') {
      changeState(value, elements, i18nextInstance);
    }

    if (path === 'additionForm.errorKey') {
      const { feedback } = elements;
      feedback.classList.replace('text-success', 'text-danger');
      feedback.textContent = i18nextInstance.t(value);
    }

    if (path === 'feeds') {
      addFeed(value[value.length - 1], elements);
    }

    if (path === 'posts') {
      addPosts(value, previousValue, elements, i18nextInstance);
    }

    if (path === 'readPostLinkID') {
      const a = document.body.querySelector(`a[data-id="${value}"]`);
      a.classList.remove('fw-bold');
      a.classList.add('fw-normal', 'link-secondary');
    }

    if (path === 'openedPostModal') {
      const { modalTitle, modalBody, modalReadButton } = elements;
      modalTitle.textContent = value.title;
      modalBody.textContent = value.description;
      modalReadButton.setAttribute('href', value.link);
    }
  },
);
