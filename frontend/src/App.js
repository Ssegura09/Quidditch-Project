import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import SortingHat from "./SortingHat";
import Main from "./components/MemoryGame/Main.js";
import Flood from "./components/Flood/src/Flood.js";
import MainApp from "./components/PuzzleGame/MainApp";
import Nav from "./components/Nav";

const URLBase = "http://localhost:3000/users/";

class App extends Component {
  state = {
    allUsers: [],
    name: "",
    showLogin: true,
    loggedIn: false,
    user: ""
  };

  handleFetch = () => {
    // m aking this an authenticated route
    fetch(URLBase, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then((res) => res.json())
      .then((user) => {
        this.setState({
          allUsers: user
        });
      });
  };

  logIn = (user) => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: user
      })
    })
      .then((res) => res.json())
      .then((userInfo) => {
        console.log(userInfo);
        if (userInfo.token) {
          localStorage.token = userInfo.token;
          this.setState(
            {
              loggedIn: true,
              user: user
            },
            () => <Redirect to={"/"} />
          );
        }
      });
  };

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Nav />
          <Switch>
            <Route exact path='/puzzle' component={MainApp} />
            <Route exact path='/memory' component={Main} />
            <Route exact path='/flood'>
              {<Flood user={this.state.user}/>}
            </Route>
            <Route exact path='/login'>
              {this.state.loggedIn ? (
                <Redirect to='/' />
              ) : (
                (rp) => <Login {...rp} logIn={this.logIn} />
              )}
            </Route>
            <Route exact path='/signup'>
            {this.state.loggedIn ? (
                <Redirect to='/' />
              ) : (
                (rp) => <SignUp {...rp} logIn={this.logIn} />
              )}
              {/* {<SignUp login={this.logIn}/>} */}
              </Route>
            <Route path='/sortinghat' component={SortingHat} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
