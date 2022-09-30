import * as yup from 'yup';
import onChange from 'on-change';
import render from './render/index';
import * as config from './constants';
import { getFeed, getPosts } from './parser';
import axiosXML from './network';
import setError from './savingError';
import setTimer from './timer';

const isURLExist = (feeds, url) => feeds.map((feed) => feed.rssURL).includes(url);

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
          if (isURLExist(watchedState.feeds, data.url)) {
            throw new Error('additionForm.errors.notUnique');
          }
          axiosXML(data.url)
            .then((document) => {
              const feed = getFeed(document, data.url);
              watchedState.feeds.push(feed);
              watchedState.posts.push(...getPosts(document, feed.id));
              watchedState.additionForm.state = config.formStates.valid;

              setTimer(watchedState);
            })
            .catch((err) => {
              setError(
                watchedState,
                err.code === 'ERR_NETWORK' ? 'additionForm.errors.errNetwork' : 'additionForm.errors.invalidRSS',
              );
            });
        })
        .catch((error) => {
          setError(watchedState, error.message);
        });
    });
};
