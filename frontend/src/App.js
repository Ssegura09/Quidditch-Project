import React, { Component } from "react";
import "./App.css";
import { BrowserRoute, BrowserRouter, Route, Link, Switch } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";
const URLBase = "http://localhost:3000/users/";

class App extends Component {
  state = {
    allUsers: [],
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

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <ul className="Nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
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
