import '../scss/styles.scss';
import 'bootstrap';
import * as config from './constants';
import app from './index';

(() => {
  const state = {
    additionForm: {
      state: config.formStates.valid,
      urls: [],
      errorMessage: '',
    },
  };

  app(state);
})();
