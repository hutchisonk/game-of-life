import React, { Component } from 'react';
import './css/game_of_life.css';

class Cell extends Component {

  render() {
    if (this.props.cellState === 0) {
      return (
        <td className = "deadcell" onClick={() => this.props.cycleCell(this.props.rowval, this.props.colval, this.props.cellState)}></td>
      )
    } else {


    return (
      <td className = "livingcell" onClick={() => this.props.cycleCell(this.props.rowval, this.props.colval, this.props.cellState)}></td>
      )
    }//else
  }//render
}//component

export default Cell;
