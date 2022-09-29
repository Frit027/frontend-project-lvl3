import * as yup from 'yup';
import onChange from 'on-change';
import render from './render/index';
import * as config from './constants';
import { axiosXML, getFeedWithPosts } from './parser';

const setError = (state, message) => {
  const watchedState = state;
  watchedState.additionForm.state = config.formStates.invalid;
  watchedState.additionForm.errorKey = message;
};

export default (state) => {
  const schema = yup.object().shape({
    url: yup.string().url('additionForm.errors.invalidURL'),
  });
  const watchedState = onChange(state, render);

  document.body
    .querySelector('form')
    .addEventListener('submit', (e) => {
      e.preventDefault();
      watchedState.additionForm.state = config.formStates.check;

      schema
        .validate({ url: new FormData(e.target).get('url') })
        .then((data) => {
          if (watchedState.feeds.map((feed) => feed.rssURL).includes(data.url)) {
            throw new Error('additionForm.errors.notUnique');
          }
          axiosXML(data.url)
            .then((document) => {
              const { feed, posts } = getFeedWithPosts(document, data.url);
              watchedState.feeds.push(feed);
              watchedState.posts.push(...posts);
              watchedState.additionForm.state = config.formStates.valid;
            })
            .catch(() => {
              setError(watchedState, 'additionForm.errors.invalidRSS');
            });
        })
        .catch((error) => {
          setError(watchedState, error.message);
        });
    });
};
