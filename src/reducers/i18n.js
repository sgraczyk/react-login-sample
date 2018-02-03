import * as translations from '../locales';
import * as ActionTypes from '../constants/action-types';

const defaultLanguage = (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage;

const langWithoutRegionCode = language => language.toLowerCase().split(/[_-]+/)[0];

const initialState = {
  locale: defaultLanguage,
  messages: translations[defaultLanguage]
    || translations[langWithoutRegionCode(defaultLanguage)]
    || translations.pl,
};

export default function i18nReducer(state = initialState, action) {
  return action.type === ActionTypes.LOCALE_CHANGE
    ? {
      locale: action.payload,
      messages: translations[action.payload]
        || translations[langWithoutRegionCode(action.payload)]
        || translations.en,
    }
    : state;
}
