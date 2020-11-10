import React, { Component } from 'react';
import GameSelection from './GameSelection';


class Games extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h2>Games</h2>
                <GameSelection />
                
            </div>
         );
    }
}
 
export default Games;