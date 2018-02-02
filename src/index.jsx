import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import pl from 'react-intl/locale-data/pl';

import App from './App';
import configureStore from './store/configure';

import './index.css';

addLocaleData([...en, ...pl]);
const store = configureStore();

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root'),
);
