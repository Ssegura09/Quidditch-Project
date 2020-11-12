import React, { Component } from 'react';

class LeaderTable extends Component {
    state = {  }
    render() { 
        return ( 
            <tbody>
                <td>{this.props.game}</td>
                <td>{this.props.username}</td>
                <td>{this.props.score}</td>
            </tbody>
         );
    }
}
 
export default LeaderTable;