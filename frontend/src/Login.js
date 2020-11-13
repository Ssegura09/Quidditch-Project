import React, { Component } from "react";

class Login extends Component {
  state = {
    name: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleClick = (e) => {
    e.preventDefault();
    this.props.name(this.state.username, false);
  };

  handleLogIn = (e) => {
    e.preventDefault();
    this.props.logIn(this.state);
  };

  render() {
    // console.log(this.props);
    return (
      <div className="wrapper">
        <div className="login">
          <h3 className='login-prompt'>
            <img src={require("./frontImages/loginprompt2.png")} />
          </h3>
          <form onSubmit={this.handleLogIn}>
            <div className="form-group">
              <input
                type="name"
                name="username"
                className="form-control"
                placeholder="Name"
                onChange={this.handleChange}
              />
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              ></input>
              <hr />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
