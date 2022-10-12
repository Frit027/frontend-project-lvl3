import uniqueId from 'lodash/uniqueId';
import * as yup from 'yup';
import * as config from './constants';
import axiosXML from './network';
import getParsedData from './parser';
import setError from './error';

const isURLExist = (feeds, url) => feeds.map((feed) => feed.rssURL).includes(url);

const initPosts = (posts) => posts.map((post) => ({ ...post, id: uniqueId() }));

export default ({ form }, watchedState) => {
  const state = watchedState;
  const schema = yup.object().shape({
    url: yup
      .string()
      .required('additionForm.errors.empty')
      .url('additionForm.errors.invalidURL'),
  });

  state.additionForm.state = config.formStates.check;
  schema
    .validate({ url: new FormData(form).get('url') })
    .then((data) => {
      if (isURLExist(state.feeds, data.url)) {
        throw new Error('additionForm.errors.notUnique');
      }
      axiosXML(data.url)
        .then((document) => {
          const parsedData = getParsedData(document);
          state.feeds.push({
            title: parsedData.title,
            description: parsedData.description,
            rssURL: data.url,
          });
          state.posts.push(...initPosts(parsedData.items));
          state.additionForm.state = config.formStates.valid;
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
};
