import * as ActionTypes from '../constants/action-types';

const changeLocale = locale => ({ type: ActionTypes.LOCALE_CHANGE, payload: locale });

const I18nActions = {
  changeLocale,
};

export default I18nActions;
