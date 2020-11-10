import React, { Component } from "react";

class Login extends Component {
  state = {
    name: '',
    password: ''
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleClick = (e) => {
    e.preventDefault();
    this.props.name(this.state.username, false);
  };

  logIn = (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({user:{
          username: this.state.username,
          password: this.state.password
        }})
    })
    .then(res =>  res.json())
    .then(userInfo => {
        console.log(userInfo)
        // JWT.decode(userInfo.token, "texas") THIS WILL NOT WORK BECAUSE JWT IS ONLY ON OUR RAILS APP
        localStorage.token = userInfo.token
    })
}

  render() {
    return (
      <div className='wrapper'>
        <div className='login'>
          <form onSubmit={this.logIn}>
            <div className='form-group'>
              <input
                type='name'
                name='username'
                className='form-control'
                placeholder='Name'
                onChange={this.handleChange}
              />
              <br />
              <input
                type='password'
                name='password'
                placeholder='Password'
                onChange={this.handleChange}
              ></input>
              <hr />
                
            </div>

            <button type="submit" className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
