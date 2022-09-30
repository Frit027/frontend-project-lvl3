import * as config from './constants';

export default (state, message) => {
  const watchedState = state;
  watchedState.additionForm.state = config.formStates.invalid;
  watchedState.additionForm.errorKey = message;
};
