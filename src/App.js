import React, { Component } from 'react';
import Row from './Row.js';
import RunButton from './Run.js';
import PauseButton from './Pause.js';
import UpdateBoardButton from './UpdateBoard.js';

import './css/normalize.css';
// import './css/skeleton.css';
import './css/game_of_life.css';

class App extends Component {

  constructor() {
    super();

    this.updateBoardSize = this.updateBoardSize.bind(this);
    this.randomizeBoard = this.randomizeBoard.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
    this.clearBoard = this.clearBoard.bind(this);
    this.getCellNeighborNumber = this.getCellNeighborNumber.bind(this);
    this.setSpeed = this.setSpeed.bind(this);

    this.setGenInterval = this.setGenInterval.bind(this);
    this.nextGeneration = this.nextGeneration.bind(this);

    this.state = {
      dim : 35,
      speed: 250,
      generation: 1,
      generation_interval : "",
      evolving : 0,
      cellStates : [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

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

  //reset generation count
  var generation = 0;
  this.setState({ generation })


}
updateBoard(cellRow, cellCol, cellState) {
  const cellStates = [...this.state.cellStates];
  //add new fishes
  cellStates[cellRow][cellCol] = cellState;
  //set state
  this.setState({ cellStates })
}

setSpeed(newspeed) {
  // var speed = newSpeed;
  // console.log(speed);
  // var prevspeed = this.state.speed;
  // console.log(prevspeed);
  var speed = newspeed;
  this.setState({ speed });
  console.log(this.state.speed);

}

setGenInterval(generation_interval) {
  this.setState({ generation_interval });
}

  evolve(speed) {
    console.log(speed);
    // console.log(this.props.speed);


     //clear previous intervals so we don't stack them
    //  var generation_interval = self.state.generation_interval;
      // if (generation_interval) {
        // console.log(self.state.generation_interval)
        clearInterval(this.state.generation_interval);
      // console.log(generation_interval);
      // }
      // this.props.setGenInterval(generationinterval);

      var generation_interval = setInterval(function(){
      // this.props.generationinterval = setInterval(function(){
        nextGeneration();
        // console.log("running");
      }, this.state.speed);
      this.setState({ generation_interval })

      var self = this;

      function nextGeneration() {
        var cellStatesObj = self.state.cellStates;

        //get the number of neighbors surrounding a cell
        function getCellNeighborNumber(rowval, colval) {
          // console.log(rowval, colval)
          var neighborCount = 0;
          var prevRow, nextRow, prevCol, nextCol;
          if (rowval === 0) {
            prevRow = cellStatesObj.length-1;
          } else {
            prevRow = rowval-1;
          }

          if (colval === 0) {
            prevCol = cellStatesObj[0].length-1;
          } else {
            prevCol = colval-1;
          }

          if (rowval === cellStatesObj.length-1) {
            nextRow = 0;
          } else {
            nextRow = rowval+1;
          }
          if (colval === cellStatesObj[0].length-1) {
            nextCol = 0;
          } else {
            nextCol = colval+1;
          }

          //8 neighbor cells:
          //1: rowval-1, colval-1
          if (cellStatesObj[prevRow][prevCol] !== 0) {
            neighborCount++;
          }
          //2: rowval-1, colval
          if (cellStatesObj[prevRow][colval] !== 0) {
            neighborCount++;
          }
          //3: rowval -1, colval+1
          if (cellStatesObj[prevRow][nextCol] !== 0) {
            neighborCount++;
          }
          //4 rowval, colval-1
          if (cellStatesObj[rowval][prevCol] !== 0) {
            neighborCount++;
          }
          //6 rowval, colval+1
          if (cellStatesObj[rowval][nextCol] !== 0) {
            neighborCount++;
          }
          //7: rowval+1, colval-1
          if (cellStatesObj[nextRow][prevCol] !== 0) {
            neighborCount++;
          }
          //8: rowval+1, colval
          if (cellStatesObj[nextRow][colval] !== 0) {
            neighborCount++;
          }
          //9: rowval+1, colval+1
          if (cellStatesObj[nextRow][nextCol] !== 0) {
            neighborCount++;
          }
        // console.log("Neighbor count is: " + neighborCount);
        return(neighborCount);
        }

        //implementing the rules of Conway's Game of Life, given a cell's current state and its neighbors
        function cellCycleLogic(cellState, number_of_neighbors) {
          // Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
          // Any live cell with two or three live neighbours lives on to the next generation.
          // Any live cell with more than three live neighbours dies, as if by overpopulation.
          // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
            if (cellState !== 0) {
              if (number_of_neighbors < 2 || number_of_neighbors > 3) {
                return 0;
              } else if (number_of_neighbors === 2 || number_of_neighbors === 3) {
                return 1;
              }
            } else if (cellState === 0 ) {
              if (number_of_neighbors === 3) {
                return 1;
              } else {
                return 0;
              }
          }
        }

        const cellStates = [...self.state.cellStates];
        for (let rowindex = 0; rowindex < cellStates.length; rowindex++) {
        cellStates[rowindex] = cellStates[rowindex].map(function(cellState, columnindex) {
            return cellCycleLogic(cellState, getCellNeighborNumber(rowindex, columnindex));
          })
        }
        //keeping track of generation count
        var generation = self.state.generation;
        generation = generation + 1;
        //update state with generation count and cell states
        self.setState({ generation })
        self.setState({ cellStates })
      }
  }


nextGeneration() {
  var cellStatesObj = this.state.cellStates;

  //get the number of neighbors surrounding a cell
  function getCellNeighborNumber(rowval, colval) {
    // console.log(rowval, colval)
    var neighborCount = 0;
    var prevRow, nextRow, prevCol, nextCol;
    if (rowval === 0) {
      prevRow = cellStatesObj.length-1;
    } else {
      prevRow = rowval-1;
    }

    if (colval === 0) {
      prevCol = cellStatesObj[0].length-1;
    } else {
      prevCol = colval-1;
    }

    if (rowval === cellStatesObj.length-1) {
      nextRow = 0;
    } else {
      nextRow = rowval+1;
    }
    if (colval === cellStatesObj[0].length-1) {
      nextCol = 0;
    } else {
      nextCol = colval+1;
    }

    //8 neighbor cells:
    //1: rowval-1, colval-1
    if (cellStatesObj[prevRow][prevCol] !== 0) {
      neighborCount++;
    }
    //2: rowval-1, colval
    if (cellStatesObj[prevRow][colval] !== 0) {
      neighborCount++;
    }
    //3: rowval -1, colval+1
    if (cellStatesObj[prevRow][nextCol] !== 0) {
      neighborCount++;
    }
    //4 rowval, colval-1
    if (cellStatesObj[rowval][prevCol] !== 0) {
      neighborCount++;
    }
    //6 rowval, colval+1
    if (cellStatesObj[rowval][nextCol] !== 0) {
      neighborCount++;
    }
    //7: rowval+1, colval-1
    if (cellStatesObj[nextRow][prevCol] !== 0) {
      neighborCount++;
    }
    //8: rowval+1, colval
    if (cellStatesObj[nextRow][colval] !== 0) {
      neighborCount++;
    }
    //9: rowval+1, colval+1
    if (cellStatesObj[nextRow][nextCol] !== 0) {
      neighborCount++;
    }
  // console.log("Neighbor count is: " + neighborCount);
  return(neighborCount);
  }

  //implementing the rules of Conway's Game of Life, given a cell's current state and its neighbors
  function cellCycleLogic(cellState, number_of_neighbors) {
    // Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
    // Any live cell with two or three live neighbours lives on to the next generation.
    // Any live cell with more than three live neighbours dies, as if by overpopulation.
    // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
      if (cellState !== 0) {
        if (number_of_neighbors < 2 || number_of_neighbors > 3) {
          return 0;
        } else if (number_of_neighbors === 2 || number_of_neighbors === 3) {
          return 1;
        }
      } else if (cellState === 0 ) {
        if (number_of_neighbors === 3) {
          return 1;
        } else {
          return 0;
        }
    }
  }

  const cellStates = [...this.state.cellStates];
  for (let rowindex = 0; rowindex < cellStates.length; rowindex++) {
  cellStates[rowindex] = cellStates[rowindex].map(function(cellState, columnindex) {
      return cellCycleLogic(cellState, getCellNeighborNumber(rowindex, columnindex));
    })
  }
  //keeping track of generation count
  var generation = this.state.generation;
  generation = generation + 1;
  //update state with generation count and cell states
  this.setState({ generation })
  this.setState({ cellStates })

}

getCellNeighborNumber(rowval, colval) {
  console.log(rowval, colval)
  var neighborCount = 0;
  var prevRow, nextRow, prevCol, nextCol;
  if (rowval === 0) {
    prevRow = this.state.cellStates.length-1;
  } else {
    prevRow = rowval-1;
  }

  if (colval === 0) {
    prevCol = this.state.cellStates[0].length-1;
  } else {
    prevCol = colval-1;
  }

  if (rowval === this.state.cellStates.length-1) {
    nextRow = 0;
  } else {
    nextRow = rowval+1;
  }

  if (colval === this.state.cellStates[0].length-1) {
    nextCol = 0;
  } else {
    nextCol = colval+1;
  }

  //8 neighbor cells:
  //1: rowval-1, colval-1
  if (this.state.cellStates[prevRow][prevCol] !== 0) {
    neighborCount++;
  }
  //2: rowval-1, colval
  if (this.state.cellStates[prevRow][colval] !== 0) {
    neighborCount++;
  }
  //3: rowval -1, colval+1
  if (this.state.cellStates[prevRow][nextCol] !== 0) {
    neighborCount++;
  }
  //4 rowval, colval-1
  if (this.state.cellStates[rowval][prevCol] !== 0) {
    neighborCount++;
  }
  //6 rowval, colval+1
  if (this.state.cellStates[rowval][nextCol] !== 0) {
    neighborCount++;
  }
  //7: rowval+1, colval-1
  if (this.state.cellStates[nextRow][prevCol] !== 0) {
    neighborCount++;
  }
  //8: rowval+1, colval
  if (this.state.cellStates[nextRow][colval] !== 0) {
    neighborCount++;
  }
  //9: rowval+1, colval+1
  if (this.state.cellStates[nextRow][nextCol] !== 0) {
    neighborCount++;
  }
console.log("Neighbor count is: " + neighborCount);
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

setBoardSize(e, size) {
  // e.preventDefault;
  var dim = size;
  console.log(dim);
  // switch(size) {
  //   case "small":
  //       dim=35;
  //       break;
  //   case "med":
  //       dim=75;
  //         break;
  //   case "large":
  //        dim=105;
  //         break;
  //   default:
  //        dim=75;
  //   }
  // this.setState({ dim });
  console.log(this.state.dim);
}

updateBoardSize(e, size) {
  var self = this;
  function drawBoard(dimension) {
    var cellStates = [];
    for (let i = 0; i < dimension; i++) {
      var subarr = [];
      for (let j = 0; j < dimension; j++) {
        subarr.push(0);
        }
      cellStates.push(subarr);
      }
      self.setState({ cellStates })
  }

  console.log(size);
  var dim;
  //changes "dim" var based on size input variable
  switch(size) {
    case "small":
        dim=35;
        break;
    case "med":
        dim=75;
          break;
    case "large":
         dim=105;
          break;
    default:
         dim=75;
    }
    console.log(dim);
    //sets dim state based on logic above
    this.setState({ dim });

    //reset the generation count since we're resetting the board
    var generation = 1;
    this.setState({ generation });

    //fills in 0s on new board and updates cellState state based on new dim state
    drawBoard(dim);

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

    // <button onClick={() => this.evolve(this.state.speed)}>[[[[[Run]]]]]</button>
//
    return (
      <div className="App">
        <div className="App-header">
          <h2><a rel="noopener noreferrer" target="_blank" href="https://www.math.cornell.edu/~lipa/mec/lesson6.html"> Game of Life</a></h2>
        </div>

        <div className="container">
          <div className="board">
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
          <button onClick={() => this.randomizeBoard(this.state.dim)}>Randomize</button>

          <RunButton
                cellStates={this.state.cellStates}
                setGenInterval={this.setGenInterval}
                nextGeneration={this.nextGeneration}
                buttonname="Run"
                generationinterval={this.generation_interval}
                evolve={this.evolve}
          />

          <PauseButton
              buttonname="Pause"
              generationinterval={this.state.generation_interval}
            />

          <button onClick={() => this.clearBoard(this.state.dim)}>Clear</button>

<br />
           <label className="boardSize">
               <PauseButton
                   updateBoardSize={this.updateBoardSize}
                   buttonname="Update Board Size"
                   generationinterval={this.generation_interval}
                 />

             <input type="radio" name="board-size" value="small" onChange={(e) => this.setBoardSize(e, 'small')} />
               <span className="label-body">small</span>

                <input type="radio" name="board-size" value="med" onChange={(e) => this.setBoardSize(e, 'med')} />
                  <span className="label-body">med</span>

                <input type="radio" name="board-size" value="large" onChange={(e) => this.setBoardSize(e, 'large')} />
                  <span className="label-body">large</span>

          </label>
          <br />
            <UpdateBoardButton
                    setGenInterval={this.setGenInterval}
                    evolve={this.evolve}
                    nextGeneration={this.nextGeneration}
                    updateBoard={this.updateBoard}
                    menuname="Update Board Speed"
                    generationinterval={this.generation_interval}
            />

          <div>{this.state.generation}</div>

        </div>
        </div>
      </div>
    );
  }
}

export default App;
