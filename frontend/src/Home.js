import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="welcome-background">
        <div 
        className="welcome-greeting">
          <img src={require('./frontImages/NewQuidditch.png')} />
        </div>
      </div>
    );
  }
}

export default Home;