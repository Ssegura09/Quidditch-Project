import React, { Component } from 'react';
import "./App.css";
import Games from './components/Games'

const URLBase = "http://localhost:3000/users/"

class App extends Component {

  // state = {
  //   allUsers: []
  // }

  // componentDidMount() {
  //   fetch(URLBase)
  //   .then(res => res.json())
  //   .then(user => {
  //     this.setState({
  //       allUsers: user
  //     })
  //   })
  // }

  render() {
    return (
      <div className="App">
        <Games />
      </div>
    );
  }
}

export default App;
