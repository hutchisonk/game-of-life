import React, { Component } from 'react';
import Cell from './Cell';

import './css/game_of_life.css';

class Row extends Component {
  render() {

// *** this code block replaces the syntax below for compatibility with CodePen, which doesn't recognize [...Array(n)].map
//   var cell_array = [];
//   var self = this;
//   for (let i = 0; i < this.props.dim; i++) {
//   cell_array.push([]);
// }
//


//** to go inside <tr> **
// { cell_array.map(function(x, i) {
//        return (
//  <Cell key={i} colval={i} rowval={self.props.rowval} dim={self.props.dim}
//          cellState={self.props.cellStates[i]}
//          updateBoard={self.props.updateBoard}
//          cycleCell={self.props.cycleCell}
//          getCellNeighborNumber={self.props.getCellNeighborNumber} />
//                );
//            })
//          }



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
