import React from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { Home, Login } from './containers';
import './App.css';

const mapStateToProps = state => ({
  locale: state.i18n.locale,
  messages: state.i18n.messages,
});
const ConnectedIntlProvider = connect(mapStateToProps)(IntlProvider);

const App = ({ store }) => (
  <Provider store={store}>
    <ConnectedIntlProvider>
      <Router>
        <div className="app-router">
          <Route path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
        </div>
      </Router>
    </ConnectedIntlProvider>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default App;
