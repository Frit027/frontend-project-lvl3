import '../scss/styles.scss';
import 'bootstrap';
import i18next from 'i18next';
import onChange from 'on-change';
import * as config from './constants';
import app from './app';
import render from './render';

(async () => {
  await i18next.init({
    lng: 'ru',
    debug: true,
    resources: {
      ru: {
        translation: {
          additionForm: {
            errors: {
              invalidURL: 'Ссылка должна быть валидным URL',
              invalidRSS: 'Ресурс не содержит валидный RSS',
              notUnique: 'RSS уже существует',
              errNetwork: 'Ошибка сети',
            },
            info: {
              uploadedRSS: 'RSS успешно загружен',
            },
          },
        },
      },
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
  };
  const watchedState = onChange(state, render);

  app(watchedState);
})();
