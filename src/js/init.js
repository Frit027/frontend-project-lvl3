import i18next from 'i18next';
import * as config from './constants';
import watch from './render';
import ru from './locales/ru';
import handleForm from './formHandling';
import handlePosts from './postsHandling';
import fetchNewPosts from './fetchingNewPosts';

export default async () => {
    const state = {
        additionForm: {
            state: config.formStates.valid,
            errorKey: '',
        },
        network: {
            state: config.networkStates.valid,
            errorKey: '',
        },
        feeds: [],
        posts: [],
        isModalOpen: false,
        readPostLinkID: null,
        openedPostModal: null,
    };

    const elements = {
        form: document.body.querySelector('form'),
        input: document.body.querySelector('#url-input'),
        addButton: document.body.querySelector('form button'),
        feedback: document.body.querySelector('.feedback'),

        postsContainer: document.body.querySelector('.posts'),
        feedsContainer: document.body.querySelector('.feeds'),

        modal: document.body.querySelector('.modal'),
        modalTitle: document.body.querySelector('.modal-title'),
        modalBody: document.body.querySelector('.modal-body'),
        modalReadButton: document.body.querySelector('.modal-footer > a'),
        modalCloseButtons: [
            document.body.querySelector('.modal-header > button'),
            document.body.querySelector('.modal-footer > button'),
        ],
    };

    const i18nextInstance = i18next.createInstance();
    await i18nextInstance.init({
        lng: 'ru',
        resources: { ru },
    });

    const watchedState = watch(elements, state, i18nextInstance);

    elements.form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleForm(elements, watchedState);
    });

    elements.postsContainer.addEventListener('click', (e) => {
        handlePosts(e, watchedState);
    });

    elements.modalCloseButtons.forEach((button) => {
        button.addEventListener('click', () => {
            watchedState.isModalOpen = false;
        });
    });

    const delay = 5000;
    setTimeout(function setInterval() {
        fetchNewPosts(watchedState);
        setTimeout(setInterval, delay);
    }, delay);
};
