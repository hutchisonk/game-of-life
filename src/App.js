import React, { Component } from 'react';
import Row from './Row.js';
import './css/normalize.css';
import './css/skeleton.css';
import './css/game_of_life.css';

class App extends Component {

  constructor() {
    super();

    this.updateBoardSize = this.updateBoardSize.bind(this);
    this.randomizeBoard = this.randomizeBoard.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
    this.clearBoard = this.clearBoard.bind(this);
    this.getCellNeighborNumber = this.getCellNeighborNumber.bind(this);

    this.state = {
      dim : 10,
      generation: 1,
      cellStates : [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
      ]
    };
  }

clearBoard(dimension) {
  var cellStates = [];
  for (let i = 0; i < dimension; i++) {
    var subarr = [];
    for (let j = 0; j < dimension; j++) {
      subarr.push(0);
    }
    cellStates.push(subarr);
  }
  this.setState({ cellStates })

}
updateBoard(cellRow, cellCol, cellState) {
  const cellStates = [...this.state.cellStates];
  //add new fishes
  cellStates[cellRow][cellCol] = cellState;
  //set state
  this.setState({ cellStates })
}

nextGeneration() {

  function cellCycleLogic(cellState) {
    if (cellState < 2) {
      return cellState + 1;
    } else {
      return 0;
    }
  }


  const cellStates = [...this.state.cellStates];
  for (let i = 0; i < cellStates.length; i++) {
  cellStates[i] = cellStates[i].map(function(cellState) {
      return cellCycleLogic(cellState);
    })

  }
  var generation = this.state.generation;
  generation = generation + 1;
  this.setState({ generation })
  console.log(this.state.generation)

  this.setState({ cellStates })

}

getCellNeighborNumber(rowval, colval) {
  console.log(rowval, colval)
  var neighborCount = 0;
  var prevRow, nextRow, prevCol, nextCol;
  if (rowval == 0) {
    prevRow = this.state.cellStates.length-1;
  } else {
    prevRow = prevRow;
  }

  if (colval == 0) {
    prevCol = this.state.cellStates[0].length-1;
  } else {
    prevCol = colval-1;
  }
console.log(prevRow, nextRow, prevCol, nextCol);
console.log(this.state.cellStates.length-1)
console.log(this.state.cellStates[0].length-1)

  if (rowval == this.state.cellStates.length) {
    console.log(rowval == this.state.cellStates.length)
    nextRow = 0;
  } else {
    nextRow = rowval+1;
  }

  if (colval == this.state.cellStates[0].length-1) {
    console.log(colval == this.state.cellStates[0].length-1)
    nextCol = 0;
  } else {
    nextCol = colval+1;
  }

  //8 cells:
  //1: rowval-1, colval-1
  if (this.state.cellStates[prevRow][prevCol] != 0) {
    neighborCount++;
  }
  //2: rowval-1, colval
  if (this.state.cellStates[prevRow][colval] != 0) {
    neighborCount++;
  }
  //3: rowval -1, colval+1
  if (this.state.cellStates[prevRow][nextCol] != 0) {
    neighborCount++;
  }
  //4 rowval, colval-1
  if (this.state.cellStates[rowval][prevCol] != 0) {
    neighborCount++;
  }
  //6 rowval, colval+1
  if (this.state.cellStates[rowval][nextCol] != 0) {
    neighborCount++;
  }
  //7: rowval+1, colval-1
  if (this.state.cellStates[nextRow][prevCol] != 0) {
    neighborCount++;
  }
  //8: rowval+1, colval
  if (this.state.cellStates[nextRow][colval] != 0) {
    neighborCount++;
  }
  //9: rowval+1, colval+1
  if (this.state.cellStates[nextRow][nextCol] != 0) {
    neighborCount++;
  }
console.log(neighborCount);
}

randomizeBoard(dimension) {
  var cellStates = [];
  for (let i = 0; i < dimension; i++) {
    var subarr = [];
    for (let j = 0; j < dimension; j++) {
      subarr.push(Math.floor(Math.random()*2));
      }
    cellStates.push(subarr);
    }
    this.setState({ cellStates })
}

updateBoardSize(size) {
  console.log(size);
  var dim;
  switch(size) {
    case "small":
        dim=15;
        break;
    case "med":
        dim=25;
          break;
    case "large":
         dim=35;
          break;
    default:
         dim=15;
    }
    console.log(dim);
// this.setState({ dim });
}

cycleCell(rowval, colval, cellState) {
  // event.preventDefault();
  if (cellState < 1) {
    cellState = cellState + 1;
  } else {
    cellState = 0;
  }
  this.updateBoard(rowval, colval, cellState)
  // console.log(rowval, colval, cellState);
}


  render() {
    // this.drawBoard(10);
    //   <label>
    //      <input type="radio" name="sim-speed"/>
    //      <span className="label-body">small</span>
     //
    //      <input type="radio" name="sim-speed"/>
    //      <span className="label-body">med</span>
     //
    //      <input type="radio" name="sim-speed"/>
    //      <span className="label-body">large</span>
    //  </label>
    return (
      <div className="App">
        <div className="App-header">
          <h2><a rel="noopener noreferrer" target="_blank" href="https://www.math.cornell.edu/~lipa/mec/lesson6.html"> Game of Life</a></h2>
        </div>

        <div className="container">

          <div className="row board">
        <table className="u-full-width">
            <tbody>
              {[...Array(this.state.dim)].map((x, i) =>
                <Row key={i} rowval={i} dim={this.state.dim} cellStates={this.state.cellStates[i]}
                  updateBoard={this.updateBoard}
                  cycleCell={this.cycleCell}
                  getCellNeighborNumber={this.getCellNeighborNumber}/>
              )}

            </tbody>
          </table>

        </div>

        <div className="row">
          <button onClick={() => this.nextGeneration()}>Next Generation</button>
          <button>[[Start]]</button>
          <button onClick={() => this.clearBoard(this.state.dim)}>Clear</button>
          <button onClick={() => this.randomizeBoard(this.state.dim)}>Randomize</button>

           <label className="boardSize">

                <input type="radio" name="board-size" value="small" />
                <span className="label-body">small  </span>

                <input type="radio" name="board-size" value="med"/>
                <span className="label-body">med  </span>

                <input type="radio" name="board-size" value="large"/>
                <span className="label-body">large  </span>
                  <button onClick={() => this.cellClicked(this.props.rowval, this.props.colval)}>Update Board Size</button>

          </label>
          <div>{this.state.generation}</div>

        </div>
        </div>
      </div>
    );
  }
}

export default App;
