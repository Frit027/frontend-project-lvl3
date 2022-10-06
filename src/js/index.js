import '../scss/styles.scss';
import 'bootstrap';
import i18next from 'i18next';
import onChange from 'on-change';
import * as config from './constants';
import app from './app';
import render from './render';
import ru from './locales/ru';

(async () => {
  await i18next.init({
    lng: 'ru',
    resources: {
      ru,
    },
  });

  const state = {
    additionForm: {
      state: config.formStates.valid,
      errorKey: '',
    },
    feeds: [],
    posts: [],
    readPostLinkID: null,
    openedPostModal: null,
  };

  const watchedState = onChange(state, render);
  app(watchedState);
})();
