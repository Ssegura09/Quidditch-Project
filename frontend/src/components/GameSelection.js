import React, { Component } from "react";
import Main from "./MemoryGame/Main.js";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Flood from "./Flood/src/App";
import SignUp from "../SignUp";
import Home from "../Home";

class Games extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <nav>
            <ul className='Nav'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/games'>Games</Link>
              </li>
              <li>
                <Link to='/memory'>Memory</Link>
              </li>
              <li>
                <Link to='/flood'>Color Flood</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path='/flood'>
              <Flood />
            </Route>
            <Route path='/memory'>
              <Main />
            </Route>
            <Route path='/signup'>
              <SignUp />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Games;
