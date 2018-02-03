import * as ActionTypes from '../constants/action-types';

const initialState = {
  isAuthenticated: false,
  user: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return {
        isAuthenticated: false,
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
        user: action.payload,
      };
    case ActionTypes.LOGIN_FAILURE:
      return {
        isAuthenticated: false,
      };
    case ActionTypes.LOGOUT:
      return {
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
