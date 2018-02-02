import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import i18nReducer from './i18n';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  i18n: i18nReducer,
});

export default rootReducer;
