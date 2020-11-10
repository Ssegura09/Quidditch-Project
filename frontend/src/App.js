import React, { Component } from "react";
import "./App.css";
import {BrowserRouter, Route, Link, Switch } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";
import Games from "./components/Games";
import Puzzle from "./components/Puzzle";
import SortingHat from "./SortingHat";
const URLBase = "http://localhost:3000/users/";

class App extends Component {
  state = {
    allUsers: [],
    name: '',
    showLogin: true
  };

  componentDidMount() {
    fetch(URLBase)
      .then((res) => res.json())
      .then((user) => {
        this.setState({
          allUsers: user,
        });
      });
  }

  handleLogin = (name, boolean) => {
    this.setState({ name: name, showLogin: boolean });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <ul className="main-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/sortinghat">Sorting Hat</Link>
              </li>
              <li>
                <Link to="/components/games">Memory Card Game</Link>
              </li>
              <li>
                <Link to="/components/puzzle">Puzzle Game</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/components/games">
              <Games />
            </Route>
            <Route exact path="/components/puzzle">
              <Puzzle />
            </Route>
            <Route path="/login">
              <Login name={this.handleLogin} />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/sortinghat">
              <SortingHat />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

{
  /* <Route path="/login/" component={Login}/>
<Route path="/signup/" component={SignUp}/>
<Route path="/sortinghat/" component={SortingHat}/> */
}
