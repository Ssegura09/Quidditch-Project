import React, { Component } from "react";
import Main from "./MemoryGame/Main.js";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Flood from "./Flood/src/Flood";
import PuzzleGame from './PuzzleGame/MainApp'
import SortingHat from "../SortingHat.js";

class Games extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <nav className='GameNav' >
            <ul className='main-nav'>
              <li>
                <Link to='/games'>Games</Link>
              </li>
              <li>
                <Link to='/memory'>Memory</Link>
              </li>
              <li>
                <Link to='/flood'>Color Flood</Link>
              </li>
              <li>
                <Link to='/puzzle'>Picture Puzzle</Link>
              </li>
              <li>
                <Link to='/sorting_hat'>Sorting Hat</Link>
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
            <Route path='/puzzle'>
              <PuzzleGame />
            </Route>
            <Route path='/sorting_hat'>
              <SortingHat />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Games;
