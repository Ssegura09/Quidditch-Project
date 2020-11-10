import React, { Component } from "react";

class SortingHat extends Component {
  state = {
      houses: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
      results: ""
  }

  buttonClicked = () => {
    // console.log('Button was clicked!')
    let results = this.state.houses[Math.floor(Math.random() * this.state.houses.length)];
    console.log(results);
    this.setState({
        results
    })
  }

  render() {
    return (
      <div>
        <h3>Click to see what house you belong to!</h3>
        <h2 className="house-results">{this.state.results}</h2>
        <button onClick={this.buttonClicked}>Sorting Hat</button>
      </div>
    );
  }
}

export default SortingHat;
