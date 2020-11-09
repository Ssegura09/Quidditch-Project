import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <h3>Login</h3>
        <form onSubmit={null}>
            <input name='username' type='text' placeholder='Username'/>
            <input name='password' type='text' placeholder='Password'/>
            <input type='submit'/>
        </form>
      </div>
    );
  }
}

export default Login;
