import React, { Component } from 'react';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthActions from '../../actions/auth.actions';
import LoginForm from './components/LoginForm';

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
      <LoginForm onSubmit={this.handleSubmit} />
    );
  }
}

Login.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  ...state,
});

export default connect(mapStateToProps)(Login);
