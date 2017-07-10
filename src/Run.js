import React, { Component } from 'react';
import './css/game_of_life.css';

class RunButton extends Component {
  constructor() {
    super();
    // this.pause = this.pause.bind(this);
    // this.evolve = this.evolve.bind(this);
    // this.nextGeneration = this.nextGeneration.bind(this);

  }
  //
  // pause() {
  //   var generationinterval = this.props.generationinterval;
  //   console.log(generationinterval)
  //   clearInterval(generationinterval);
  //   // this.props.setGenInterval(generationinterval);
  // }
//
// nextGeneration() {
//     var cellStatesObj = this.props.cellStates;
//
//     //get the number of neighbors surrounding a cell
//     function getCellNeighborNumber(rowval, colval) {
//       // console.log(rowval, colval)
//       var neighborCount = 0;
//       var prevRow, nextRow, prevCol, nextCol;
//       if (rowval === 0) {
//         prevRow = cellStatesObj.length-1;
//       } else {
//         prevRow = rowval-1;
//       }
//
//       if (colval === 0) {
//         prevCol = cellStatesObj[0].length-1;
//       } else {
//         prevCol = colval-1;
//       }
//
//       if (rowval === cellStatesObj.length-1) {
//         nextRow = 0;
//       } else {
//         nextRow = rowval+1;
//       }
//       if (colval === cellStatesObj[0].length-1) {
//         nextCol = 0;
//       } else {
//         nextCol = colval+1;
//       }
//
//       //8 neighbor cells:
//       //1: rowval-1, colval-1
//       if (cellStatesObj[prevRow][prevCol] !== 0) {
//         neighborCount++;
//       }
//       //2: rowval-1, colval
//       if (cellStatesObj[prevRow][colval] !== 0) {
//         neighborCount++;
//       }
//       //3: rowval -1, colval+1
//       if (cellStatesObj[prevRow][nextCol] !== 0) {
//         neighborCount++;
//       }
//       //4 rowval, colval-1
//       if (cellStatesObj[rowval][prevCol] !== 0) {
//         neighborCount++;
//       }
//       //6 rowval, colval+1
//       if (cellStatesObj[rowval][nextCol] !== 0) {
//         neighborCount++;
//       }
//       //7: rowval+1, colval-1
//       if (cellStatesObj[nextRow][prevCol] !== 0) {
//         neighborCount++;
//       }
//       //8: rowval+1, colval
//       if (cellStatesObj[nextRow][colval] !== 0) {
//         neighborCount++;
//       }
//       //9: rowval+1, colval+1
//       if (cellStatesObj[nextRow][nextCol] !== 0) {
//         neighborCount++;
//       }
//     // console.log("Neighbor count is: " + neighborCount);
//     return(neighborCount);
//     }
//   }
  //
  // evolve(speed) {
  //   console.log(speed);
  //    //setGenInterval={this.setGenInterval} deleted this prop
  //    var generationinterval = this.props.generationinterval;
  //    console.log(generationinterval)
  //    clearInterval(generationinterval);
  //    console.log(generationinterval);
  //
  //
  //    //clear previous intervals so we don't stack them
  //   //  generationinterval = this.props.generationinterval;
  //   //   // if (generationinterval) {
  //   //     console.log(this.props.generationinterval)
  //   //     clearInterval(this.props.generationinterval);
  //     // console.log(generation_interval);
  //     // }
  //     // this.props.setGenInterval(generationinterval);
  //
  //     var self = this;
  //     // generationinterval = setInterval(function(){
  //     // // this.props.generationinterval = setInterval(function(){
  //     //   self.props.nextGeneration();
  //     //   // console.log("running");
  //     // }, self.props.speed);
  //     this.props.setGenInterval(setInterval(function(){
  //     // this.props.generationinterval = setInterval(function(){
  //       self.props.nextGeneration();
  //       // console.log("running");
  //     }, speed));
  // }

  render() {
    // console.log(this.props)
    return(
      <button onClick={() => this.props.evolve(250)}>{this.props.buttonname}</button>
    )
  }//render
}//component

export default RunButton;
