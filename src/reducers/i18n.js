import * as translations from '../locales';

const defaultLanguage = (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage;

const langWithoutRegionCode = language => language.toLowerCase().split(/[_-]+/)[0];

export const LOCALE_CHANGE = 'LOCALE_CHANGE';

export function localeChange(locale) {
  return {
    type: LOCALE_CHANGE,
    payload: locale,
  };
}

export const updateLocale = ({ dispatch }) => nextLocale => dispatch(localeChange(nextLocale));

const initialState = {
  locale: defaultLanguage,
  messages: translations[defaultLanguage]
    || translations[langWithoutRegionCode(defaultLanguage)]
    || translations.pl,
};

export default function i18nReducer(state = initialState, action) {
  return action.type === LOCALE_CHANGE
    ? {
      locale: action.payload,
      messages: translations[action.payload]
        || translations[langWithoutRegionCode(action.payload)]
        || translations.en,
    }
    : state;
}
