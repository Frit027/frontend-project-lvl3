import * as yup from 'yup';
import onChange from 'on-change';
import * as config from './constants';
import render from './view';

export default (state) => {
  const schema = yup.object().shape({
    url: yup.string().url('Ссылка должна быть валидным URL'),
  });
  const watchedState = onChange(state, render);
  const form = document.body.querySelector('form');
  const input = form.querySelector('input');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    watchedState.additionForm.state = config.formStates.check;

    schema
      .validate({ url: input.value })
      .then((data) => {
        if (!watchedState.additionForm.urls.includes(data.url)) {
          watchedState.additionForm.state = config.formStates.valid;
          watchedState.additionForm.urls.push(data.url);
        } else {
          throw new Error('RSS уже существует');
        }
      })
      .catch((error) => {
        watchedState.additionForm.state = config.formStates.invalid;
        watchedState.additionForm.errorMessage = error.message;
      });
  });
};
