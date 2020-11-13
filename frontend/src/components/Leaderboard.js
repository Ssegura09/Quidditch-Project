import React, { Component } from "react";
import LeaderTable from './LeaderTable'

class Leaderboard extends Component {
  state = {
      sortedColor: [],
      table: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/scores")
      .then((res) => res.json())
      .then((data) => {
        let colorData = data.filter(
          (data) => data.scoreboard.name === "Color Flood"
        ); 
        let sortedColor = colorData.sort((a, b) =>
          a.points > b.points ? 1 : -1
        );
        console.log(sortedColor)
        this.setState({sortedColor})
        let table = sortedColor.map(color =>{
            console.log(color)
            return <LeaderTable game={color.scoreboard.name} username={color.user.username} score={color.points} />
        })
        this.setState({table})
      });
    
  }
  render() {
    return (
      <table className="customers">
        <thead>
          <th>Game</th>
          <th>Username</th>
          <th>Score</th>
        </thead>
        {this.state.table.map(table =>table)}
      </table>
    );
  }
}

export default Leaderboard;
