import * as ActionTypes from '../constants/action-types';
import AuthService from '../services/auth.service';

const request = () => ({
  type: ActionTypes.LOGIN_REQUEST,
});

const success = user => ({
  type: ActionTypes.LOGIN_SUCCESS,
  payload: user,
});

const failure = () => ({
  type: ActionTypes.LOGIN_FAILURE,
});

const login = (email, password) =>
  (dispatch) => {
    dispatch(request());

    return AuthService.login(email, password)
      .then(
        (user) => {
          dispatch(success(user));
          return true;
        },
        () => {
          dispatch(failure());
          return false;
        },
      );
  };

const logout = () => ({
  type: ActionTypes.LOGOUT,
});

const AuthActions = {
  login,
  logout,
};

export default AuthActions;
