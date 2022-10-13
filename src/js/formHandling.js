import uniqueId from 'lodash/uniqueId';
import * as yup from 'yup';
import * as config from './constants';
import axiosXML from './network';
import getParsedData from './parser';

const isURLExist = (feeds, url) => feeds.map((feed) => feed.rssURL).includes(url);

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
          state.posts.push(...parsedData.items.map((post) => ({ ...post, id: uniqueId() })));
          state.additionForm.state = config.formStates.valid;
          state.network.state = config.networkStates.valid;
        })
        .catch((err) => {
          if (err.code === 'ERR_NETWORK') {
            state.network.state = config.networkStates.invalid;
            state.network.errorKey = 'networkErrors.cannotLoad';
          } else {
            state.additionForm.state = config.formStates.invalid;
            state.additionForm.errorKey = 'additionForm.errors.invalidRSS';
          }
        });
    })
    .catch((err) => {
      state.additionForm.state = config.formStates.invalid;
      state.additionForm.errorKey = err.message;
    });
};
