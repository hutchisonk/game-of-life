import React, { Component } from 'react';
import './css/game_of_life.css';

class Cell extends Component {

  constructor() {
    super()

    // this.cellClicked = this.cellClicked.bind(this);
    // this.cycleCell = this.cycleCell.bind(this);

    this.state = {
      // rowval : {this.props.rowval},
      // colval : {this.props.colval},
      // cellstate : "empty"
    };
  }
  //
  // cycleCell(rowval, colval, cellState) {
  //   // event.preventDefault();
  //   if (cellState < 2) {
  //     cellState = cellState + 1;
  //   } else {
  //     cellState = 0;
  //   }
  //   this.props.updateBoard(rowval, colval, cellState)
  //   // console.log(rowval, colval, cellState);
  // }
  // {this.props.rowval},{this.props.colval}

  // cycleCell(rowval, colval, cellState) {
  //   // event.preventDefault();
  //
  // }
  // <td onClick={() => this.props.cycleCell(this.props.rowval, this.props.colval, this.props.cellState)}>{this.props.cellState}</td>

  render() {
    return (
      <td onClick={() => this.props.getCellNeighborNumber(this.props.rowval, this.props.colval)}>{this.props.cellState}</td>

    );
  }
}

export default Cell;
