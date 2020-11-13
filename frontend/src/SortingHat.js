import React, { Component } from "react";
import houses from "./houseData";
const hat = "https://media1.tenor.com/images/426045f4dc47e5bfaaa2b095ed179895/tenor.gif?itemid=13986854";

class SortingHat extends Component {
  state = {
    // houses: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
    houses: houses,
    // results: "",
    resultsImage: hat,
  };

  buttonClicked = () => {
    // console.log('Button was clicked!')
    let results = this.state.houses[
      Math.floor(Math.random() * this.state.houses.length)
    ];
    console.log(results);
    this.setState({
      // results: results.house,
      resultsImage: results.image,
    });
  };

  render() {
    return (
      <div className="welcome-background2">
        <div className="sort-hat-container">
          {/* <img className="starry-night" src={require("./frontImages/starryNight.gif")} /> */}
          <h3 className="house-prompt">
            <img className="house-title" src={require("./frontImages/chooseHouse.png")} />
          </h3>
          {/* <h2 className="house-results">{this.state.results}</h2> */}
          <img className="house-image" src={this.state.resultsImage} />
          <button className="sort-hat-button" onClick={this.buttonClicked}>
            Sorting Hat
          </button>
        </div>
      </div>
    );
  }
}

export default SortingHat;
