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
  render() {
    return (
      <div className='wrapper'>
        <div className='login'>
          <form>
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

            <button onClick={this.handleClick} className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
