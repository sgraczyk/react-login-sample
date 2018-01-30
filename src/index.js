import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import pl from 'react-intl/locale-data/pl';

addLocaleData([...en, ...pl]);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
