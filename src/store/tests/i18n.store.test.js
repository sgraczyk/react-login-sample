import configureStore from '../configure';
import I18nActions from '../../actions/i18n.actions';
import { en, pl } from '../../locales';

describe('i18n store', () => {
  let store = {};
  beforeEach(() => {
    store = configureStore();
  });

  test('runs set of actions properly', () => {
    store.dispatch(I18nActions.changeLocale('pl'));
    let actual = store.getState();
    let expected = {
      locale: 'pl',
      messages: pl,
    };
    expect(actual.i18n).toEqual(expected);

    store.dispatch(I18nActions.changeLocale('en'));
    actual = store.getState();
    expected = {
      locale: 'en',
      messages: en,
    };
    expect(actual.i18n).toEqual(expected);
  });
});
