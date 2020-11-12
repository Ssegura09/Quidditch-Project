import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="welcome-background">
        <h3 
        className="welcome-greeting">
          <img src={require('./frontImages/Quidditch.png')} />
        </h3>
      </div>
    );
  }
}

export default Home;