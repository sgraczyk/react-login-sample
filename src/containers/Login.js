import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // set state
    // dispatch action
  }

  render() {
    const { intl } = this.props;
    return (
      <div className="login-container">
        <h2>{intl.formatMessage({ id: 'login.header' })}</h2>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label htmlFor="email">{intl.formatMessage({ id: 'login.email' })}</label>
            <input type="text" name="email" id="email" />
            <label htmlFor="password">{intl.formatMessage({ id: 'login.password' })}</label>
            <input type="password" name="password" id="password" />
            <label htmlFor="remember">{intl.formatMessage({ id: 'login.rememberMe' })}</label>
            <input type="checkbox" name="remember" id="remember" />
            <input type="submit" value="login" />
          </fieldset>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Login);
