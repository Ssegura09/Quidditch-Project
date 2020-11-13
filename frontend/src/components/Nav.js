import React from 'react';
import {Link} from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul className="main-nav">
          <li className="dropdown">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li className="dropdown">
            {" "}
            <Link to="/login">Login</Link>{" "}
          </li>
          <li className="dropdown">
            <Link to="/signup">Sign Up</Link>
          </li>
          {localStorage.token ? (
            <li className="dropdown">
              Games
              <div className="dropdown-content">
                <Link to="/sortinghat">Sorting Hat</Link>
                <Link to="/memory">Pensieve Card Game</Link>
                <Link to="/flood">Hogwarts House Color Flood</Link>
                <Link to="/puzzle">Picture Puzzle</Link>
              </div>
            </li>
          ) : null}
        </ul>
      </nav>
    );
  }
}
export default Nav
