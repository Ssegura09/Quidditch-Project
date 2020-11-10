import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Games from "./components/Games";

import SortingHat from "./SortingHat";
import Main from "./components/MemoryGame/Main.js";
import Flood from "./components/Flood/src/Flood.js";
import MainApp from "./components/PuzzleGame/MainApp";

const URLBase = "http://localhost:3000/users/";

class App extends Component {
  state = {
    allUsers: [],
    name: "",
    showLogin: true
  };

  componentDidMount() {
    fetch(URLBase)
      .then((res) => res.json())
      .then((user) => {
        this.setState({
          allUsers: user
        });
      });
  }

  handleLogin = (name, boolean) => {
    this.setState({ name: name, showLogin: boolean });
  };

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <nav>
            <ul className='main-nav'>
              <li> <Link to='/'>Home</Link></li>
              <li> <Link to='/login'>Login</Link> </li>
              <li><Link to='/signup'>Sign Up</Link></li>
              <li className='dropdown'>
                Games
                <div className='dropdown-content'>
                  <Link to='/sortinghat'>Sorting Hat</Link>
                  <Link to='/memory'>Memory Game</Link>
                  <Link to='/flood'>Color Flood</Link>
                  <Link to='/puzzle'>Picture Puzzle</Link>
                </div>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path='/games' component={Games} />
            <Route exact path='/puzzle' component={MainApp} />
            <Route exact path='/memory' component={Main} />
            <Route exact path='/flood' component={Flood} />
            <Route exact path='/login' component={() => <Login name={this.handleLogin} />} />
            <Route path='/signup' component={SignUp} />
            <Route path='/sortinghat' component={SortingHat} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
