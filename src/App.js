import React, { Component } from 'react';
import Login from './containers/Login';
import { IntlProvider } from 'react-intl';
import * as generatedMessages from './locales'
import './App.css';

class App extends Component {
  state = {
    locale: 'pl'
  }

  render() {
    return (
      <IntlProvider locale={this.state.locale}
        messages={generatedMessages[this.state.locale]}>
        <Login />
      </IntlProvider>
    );
  }
}

export default App;
