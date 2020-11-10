import React, { Component } from 'react';
import MainApp from './PuzzleGame/MainApp.js';


class Puzzle extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h2>Puzzle</h2>
                <MainApp/>
            </div>
         );
    }
}
 
export default Puzzle;