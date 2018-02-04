import * as ActionTypes from '../../constants/action-types';

export const initialState = {
  isAuthenticated: false,
  user: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return Object.assign({}, initialState);
    case ActionTypes.LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
        user: action.payload,
      };
    case ActionTypes.LOGIN_FAILURE:
      return Object.assign({}, initialState);
    case ActionTypes.LOGOUT:
      return Object.assign({}, initialState);
    default:
      return state;
  }
}
