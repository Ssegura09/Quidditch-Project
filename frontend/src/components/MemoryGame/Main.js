import React from "react";
// import Login from "../../Login";
import Game from "./Game";
import Navbar from "./Navbar";
import EndGame from "./EndGame";

class Main extends React.Component {
  state = {
    showLogin: true,
    showEndGame: false,
    name: "",
    score: 100,
  };

  handleEndGame = (boolean) => {
    if (boolean) {
      this.setState({ showEndGame: boolean, score: this.state.score + 1 });
    } else {
      this.setState({ showEndGame: boolean });
    }
  };
  render() {
    const { showLogin, name, score, showEndGame } = this.state;
    return (
        <div>
          {showEndGame ? <EndGame newGame={this.handleEndGame} /> : null}
          <Navbar name={name} score={score} />
          <Game score={score} endGame={this.handleEndGame} />
        </div>
    );
  }
}

export default Main;
