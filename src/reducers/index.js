import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import i18nReducer from './i18n';
import authReducer from './auth';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  i18n: i18nReducer,
  auth: authReducer,
});

export default rootReducer;
