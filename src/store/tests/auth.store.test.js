import configureStore from '../configure';
import AuthActions from '../../actions/auth.actions';

describe('auth store', () => {
  let store = {};
  beforeEach(() => {
    store = configureStore();
  });

  test('runs set of actions properly', async () => {
    await store.dispatch(AuthActions.login('test@test.pl', 'Password1'));
    let actual = store.getState();
    let expected = {
      isAuthenticated: true,
      user: {
        email: 'test@test.pl',
      },
    };
    expect(actual.auth).toEqual(expected);

    store.dispatch(AuthActions.logout());
    actual = store.getState();
    expected = {
      isAuthenticated: false,
      user: null,
    };
  });
});
