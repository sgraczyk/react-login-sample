import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
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
    const { isAuthenticated } = this.props;

    if (isAuthenticated === true) {
      return <Redirect to="/home" />;
    }

    return (
      <div className="login-container">
        <h2><FormattedMessage id="login.header" /></h2>
        <LoginForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

Login.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Login);
