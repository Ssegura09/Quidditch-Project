import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class SignUp extends Component {
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username: this.state.username,
          password: this.state.password
        }
      })
    })
      .then((res) => res.json())
      .then((data) => {
        
        let user = {
          username: data.user.username,
          password: this.state.password
        };
        // console.log(user)
        this.props.logIn(user);
      });
  };

  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            onChange={(e) => this.handleChange(e)}
            name='username'
            type='text'
            placeholder='Username'
          />
          <input
            onChange={(e) => this.handleChange(e)}
            name='password'
            type='password'
            placeholder='Password'
          />
          {/* <input onChange = {(e) => this.handleChange(e)} name='house' type='text' placeholder='House'/> */}
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default SignUp;
