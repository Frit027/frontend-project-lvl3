import * as config from './constants';

export default (watchedState, message) => {
  const state = watchedState;
  state.additionForm.state = config.formStates.invalid;
  state.additionForm.errorKey = message;
};
