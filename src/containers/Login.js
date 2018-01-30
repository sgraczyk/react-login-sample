import React, { Component } from 'react';

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // set state
    // dispatch action
  }

  render() {
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label htmlFor="email">email</label>
            <input type="text" name="email" id="email" />
            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password" />
            <label htmlFor="remember">Remember me</label>
            <input type="checkbox" name="remember" id="remember" />
            <input type="submit" value="login" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Login;
