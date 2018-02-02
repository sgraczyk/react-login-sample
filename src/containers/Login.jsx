import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import { CheckBox, TextField } from '../components/Infrastructure';

class Login extends Component {
  state = {
    email: '',
    password: '',
    rememberMe: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // set state
    // dispatch action
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleChecked = (e) => {
    const { name, checked } = e.target;
    this.setState({
      [name]: checked,
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
            <TextField
              id="login-email"
              name="email"
              type="email"
              label={intl.formatMessage({ id: 'login.email' })}
              value={email}
              onChange={this.handleChange}
            />
            <TextField
              id="login-password"
              name="password"
              type="password"
              label={intl.formatMessage({ id: 'login.password' })}
              value={password}
              onChange={this.handleChange}
            />
            <CheckBox
              id="login-remember"
              name="rememberMe"
              label={intl.formatMessage({ id: 'login.rememberMe' })}
              value={rememberMe}
              onChange={this.handleChecked}
            />
            <input type="submit" value={intl.formatMessage({ id: 'login.submit' })} />
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
