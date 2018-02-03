import React from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { Home, Login, DevTools } from './containers';
import { Layout } from './components';
import localeChange from './actions/i18n';
import './App.css';

const mapStateToProps = state => ({
  locale: state.i18n.locale,
  messages: state.i18n.messages,
});

const mapDispatchToProps = dispatch => ({
  onLocaleChange: locale => dispatch(localeChange(locale)),
});

const ConnectedIntlProvider = connect(mapStateToProps)(IntlProvider);
const ConnectedLayout = connect(state => state, mapDispatchToProps)(Layout);

const App = ({ store }) => (
  <Provider store={store}>
    <div className="app-provider">
      <ConnectedIntlProvider>
        <Router className="app-router">
          <ConnectedLayout>
            <Route path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
          </ConnectedLayout>
        </Router>
      </ConnectedIntlProvider>
      <DevTools />
    </div>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default App;
