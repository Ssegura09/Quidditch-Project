import React, { Component } from "react";

class SignUp extends Component {

  handleChange = (e) => {
    // console.log(e.target)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({user:{
        username: this.state.username,
        password: this.state.password
      }})
    })
    .then(res => res.json())
    .then()
  }


  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <form onSubmit={(e) => this.handleSubmit(e)}>
            <input onChange = {(e) => this.handleChange(e)} name='username' type='text' placeholder='Username'/>
            <input onChange = {(e) => this.handleChange(e)} name='password' type='password' placeholder='Password'/>
            {/* <input onChange = {(e) => this.handleChange(e)} name='house' type='text' placeholder='House'/> */}
            <input type='submit'/>
        </form>
      </div>
    );
  }
}

export default SignUp;
