import reducer, { initialState } from './auth.reducer';
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../../constants/action-types';

describe('auth reducer', () => {
  test('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('disables isAuthenticated upon log in request', () => {
    const actual = reducer(undefined, { type: LOGIN_REQUEST });
    const expected = {
      isAuthenticated: false,
      user: null,
    };
    expect(actual).toEqual(expected);
  });

  test('disables isAuthenticated upon log in failure', () => {
    const actual = reducer(undefined, { type: LOGIN_FAILURE });
    const expected = {
      isAuthenticated: false,
      user: null,
    };
    expect(actual).toEqual(expected);
  });

  test('disables isAuthenticated upon log in failure', () => {
    const payload = {
      email: 'test@test.pl',
    };
    const actual = reducer(undefined, { type: LOGIN_SUCCESS, payload });
    const expected = {
      isAuthenticated: true,
      user: payload,
    };
    expect(actual).toEqual(expected);
  });

  test('clears login data upon log out', () => {
    const actual = reducer(undefined, { type: LOGOUT });
    const expected = {
      isAuthenticated: false,
      user: null,
    };
    expect(actual).toEqual(expected);
  });
});
