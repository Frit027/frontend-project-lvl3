import * as yup from 'yup';
import * as config from '../constants';
import axiosXML from '../network';
import { getFeed, getPosts } from '../parser';
import setTimer from '../timer';
import setError from '../error';

const isURLExist = (feeds, url) => feeds.map((feed) => feed.rssURL).includes(url);

export default (watchedState) => {
  const schema = yup.object().shape({
    url: yup
      .string()
      .required('additionForm.errors.empty')
      .url('additionForm.errors.invalidURL'),
  });
  const state = watchedState;

  document.body
    .querySelector('form')
    .addEventListener('submit', (e) => {
      e.preventDefault();
      state.additionForm.state = config.formStates.check;
      schema
        .validate({ url: new FormData(e.target).get('url') })
        .then((data) => {
          if (isURLExist(state.feeds, data.url)) {
            throw new Error('additionForm.errors.notUnique');
          }
          axiosXML(data.url)
            .then((document) => {
              const feed = getFeed(document, data.url);
              state.feeds.push(feed);
              state.posts.push(...getPosts(document, feed.id));
              state.additionForm.state = config.formStates.valid;

              setTimer(state);
            })
            .catch((err) => {
              setError(
                state,
                err.code === 'ERR_NETWORK'
                  ? 'additionForm.errors.errNetwork'
                  : 'additionForm.errors.invalidRSS',
              );
            });
        })
        .catch((error) => {
          setError(state, error.message);
        });
    });
};
