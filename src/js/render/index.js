import onChange from 'on-change';
import changeState from './form';
import addFeed from './feeds';
import addPosts from './posts';

export default (elements, state, i18nextInstance) => onChange(
    state,
    (path, value, previousValue) => {
        if (path === 'additionForm.state' || path === 'network.state') {
            changeState(value, elements, i18nextInstance);
        }

        if (path === 'additionForm.errorKey' || path === 'network.errorKey') {
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

        if (path === 'isModalOpen') {
            const { modal } = elements;
            if (value) {
                const div = document.createElement('div');
                div.classList.add('modal-backdrop', 'fade', 'show');
                document.body.append(div);

                document.body.classList.add('modal-open');
                modal.classList.remove('hide');
                modal.classList.add('show', 'display');
            } else {
                document.body.querySelector('.modal-backdrop').remove();
                modal.classList.remove('show');
                modal.classList.replace('display', 'hide');
                document.body.classList.remove('modal-open');
            }
        }

        if (path === 'openedPostModal') {
            const { modalTitle, modalBody, modalReadButton } = elements;
            modalTitle.textContent = value.title;
            modalBody.textContent = value.description;
            modalReadButton.setAttribute('href', value.link);
        }
    },
);
