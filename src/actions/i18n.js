import * as ActionTypes from '../constants/action-types';

const localeChange = locale => ({ type: ActionTypes.LOCALE_CHANGE, payload: locale });

export default localeChange;
