import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label for="email">email</label>
            <input type="text" name="email" id="email" />
            <label for="password">password</label>
            <input type="password" name="password" id="password" />
            <label for="remember">Remember me</label>
            <input type="checkbox" name="remember" id="remember" />
            <input type="submit" value="login" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Login;
