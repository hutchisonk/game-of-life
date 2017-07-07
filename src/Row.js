import React, { Component } from 'react';
import Cell from './Cell';

import './css/game_of_life.css';

class Row extends Component {
  render() {
    // var dim = this.props.dim;
    // console.log(this.props.cellStates);

    return (
      <tr>
      {[...Array(this.props.dim)].map((x, i) =>
        <Cell key={i} colval={i} rowval={this.props.rowval} dim={this.props.dim} cellState={this.props.cellStates[i]}
          updateBoard={this.props.updateBoard}
          cycleCell={this.props.cycleCell}
          getCellNeighborNumber={this.props.getCellNeighborNumber}
          />
      )}
      </tr>
    );
  }
}

export default Row;
