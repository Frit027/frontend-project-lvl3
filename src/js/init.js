import '../scss/styles.scss';
import 'bootstrap';
import i18next from 'i18next';
import * as config from './constants';
import app from './index';

(async () => {
  await i18next.init({
    lng: 'ru',
    debug: true,
    resources: {
      ru: {
        translation: {
          additionForm: {
            errors: {
              invalidUrl: 'Ссылка должна быть валидным URL',
              notUnique: 'RSS уже существует',
            },
          },
        },
      },
    },
  });

  const state = {
    additionForm: {
      state: config.formStates.valid,
      urls: [],
      errorKey: '',
    },
  };

  app(state);
})();
