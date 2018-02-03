import * as ActionTypes from '../constants/action-types';

const changeLocale = locale => ({ type: ActionTypes.LOCALE_CHANGE, payload: locale });

export default changeLocale;
