import * as config from '../constants';

export default (state, elements, i18nextInstance) => {
  const { input, addButton, feedback } = elements;

  if (state === config.formStates.valid || state === config.formStates.invalid) {
    addButton.disabled = false;
  }

  if (state === config.formStates.valid) {
    input.classList.remove('is-invalid');
    input.value = '';
    input.focus();
    feedback.classList.replace('text-danger', 'text-success');
    feedback.textContent = i18nextInstance.t('additionForm.info.uploadedRSS');
  }

  if (state === config.formStates.check) {
    addButton.disabled = true;
  }

  if (state === config.formStates.invalid) {
    input.classList.add('is-invalid');
  }
};
