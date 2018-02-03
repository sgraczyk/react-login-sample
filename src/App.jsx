import React from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { Home, Login, DevTools } from './containers';
import { Layout, PrivateRoute } from './components';
import './App.css';

const mapStateToProps = state => ({
  locale: state.i18n.locale,
  messages: state.i18n.messages,
});

const ConnectedIntlProvider = connect(mapStateToProps)(IntlProvider);

const App = ({ store }) => (
  <Provider store={store}>
    <div className="app-provider">
      <ConnectedIntlProvider>
        <Router className="app-router">
          <Layout>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/" component={Home} />
          </Layout>
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
