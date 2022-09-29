import * as config from '../constants';
import showFeedback from './feedback';

export default (state) => {
  const form = document.body.querySelector('form');
  const input = form.querySelector('input');
  const button = form.querySelector('button');

  if (state === config.formStates.valid || state === config.formStates.invalid) {
    button.disabled = false;
  }

  if (state === config.formStates.valid) {
    input.classList.remove('is-invalid');
    input.value = '';
    input.focus();
    showFeedback({ key: 'additionForm.info.uploadedRSS', isError: false });
  }

  if (state === config.formStates.check) {
    button.disabled = true;
  }

  if (state === config.formStates.invalid) {
    input.classList.add('is-invalid');
  }
};
