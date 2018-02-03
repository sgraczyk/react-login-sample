import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { SubmissionError } from 'redux-form';
import AuthActions from '../actions/auth';
import LoginForm from '../components/login/LoginForm';

class Login extends Component {
  handleSubmit = (values, dispatch) =>
    dispatch(AuthActions.login(values.email, values.password))
      .then((credentialsValid) => {
        if (!credentialsValid) {
          throw new SubmissionError({
            _error: {
              id: 'login.invalidCredentials',
            },
          });
        }
      });

  render() {
    return (
      <div className="login-container">
        <h2><FormattedMessage id="login.header" /></h2>
        <LoginForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default Login;
