import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import i18nReducer from './i18n.reducer';
import authReducer from './auth.reducer';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  i18n: i18nReducer,
  auth: authReducer,
});

export default rootReducer;
