import * as config from './constants';

export default (path, value) => {
  const form = document.body.querySelector('form');
  const input = form.querySelector('input');
  const button = form.querySelector('button');

  if (path === 'additionForm.state') {
    if (value === config.formStates.valid || config.formStates.invalid) {
      button.disabled = false;
    }

    if (value === config.formStates.valid) {
      if (input.classList.contains('is-invalid')) {
        input.classList.remove('is-invalid');
        form.parentNode.lastChild.remove();
      }
      input.value = '';
      input.focus();
    }

    if (value === config.formStates.check) {
      button.disabled = true;
    }

    if (value === config.formStates.invalid) {
      if (input.classList.contains('is-invalid')) {
        return;
      }
      input.classList.add('is-invalid');
      const p = document.createElement('p');
      p.classList.add('feedback', 'm-0', 'position-absolute', 'small', 'text-danger');
      form.parentNode.append(p);
    }
  }

  if (path === 'additionForm.errorMessage') {
    form.parentNode.lastChild.textContent = value;
  }
};
