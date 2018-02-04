import reducer, { initialState } from './i18n.reducer';
import { LOCALE_CHANGE } from '../../constants/action-types';
import polishMessages from '../../locales/pl';

describe('18n reducer', () => {
  test('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('changes locale', () => {
    const actual = reducer(undefined, { type: LOCALE_CHANGE, payload: 'pl' });
    const expected = {
      locale: 'pl',
      messages: polishMessages,
    };
    expect(actual).toEqual(expected);
  });
});
