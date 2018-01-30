import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';

class Login extends Component {
  state = {
    email: '',
    password: '',
    rememberMe: false,
    isSubmitted: false
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // set state
    // dispatch action
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleChecked = (e) => {
    const { name, checked } = e.target;
    this.setState({
      [name]: checked
    });
  }

  render() {
    const { intl } = this.props;
    const { email, password, rememberMe } = this.state;
    return (
      <div className="login-container">
        <h2>{intl.formatMessage({ id: 'login.header' })}</h2>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label htmlFor="email">
              {intl.formatMessage({ id: 'login.email' })}
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={this.handleChange}
            />
            <label htmlFor="password">
              {intl.formatMessage({ id: 'login.password' })}
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={this.handleChange}
            />
            <label htmlFor="remember">
              {intl.formatMessage({ id: 'login.rememberMe' })}
            </label>
            <input
              type="checkbox"
              name="rememberMe"
              id="remember"
              checked={rememberMe}
              onChange={this.handleChecked}
            />
            <input type="submit" />
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
