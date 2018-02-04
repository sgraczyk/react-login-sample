import React from 'react';
import { IntlProvider } from 'react-intl';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { Home, Login, DevTools } from './containers';
import { Layout, PrivateRoute } from './components';

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
            <Switch>
              <Route path="/login" component={Login} />
              <PrivateRoute path="/" component={Home} />
            </Switch>
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
