import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
const URLBase = "http://localhost:3000/users/"

class App extends Component {

  state = {
    allUsers: []
  }

  componentDidMount() {
    fetch(URLBase)
    .then(res => res.json())
    .then(user => {
      this.setState({
        allUsers: user
      })
    })
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
