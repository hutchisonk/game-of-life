import React, { Component } from 'react';
import './css/game_of_life.css';

class UpdateBoardButton extends Component {
  constructor() {
    super();
    this.evolve = this.evolve.bind(this);
    this.updateSize = this.updateSize.bind(this);
  }

evolve(speed) {
  this.props.pause();
  console.log(speed);
  var self=this;
    var generation_interval_id = this.props.generationinterval;
    	generation_interval_id = setInterval(function() {
            self.props.nextGeneration()
    	}, speed);
      this.props.setGenInterval(generation_interval_id);
};

updateSize(size) {
  this.props.pause();
  this.props.clearBoard(this.props.dim);
  this.props.updateBoardSize(size);
}

  render() {
    if (this.props.menuname === "Update Board Speed") {

      return(
        <label>
          <span>{this.props.menuname}</span><br/>
                <button onClick={() => this.evolve(500)}>Slow</button>
                <button onClick={() => this.evolve(150)}>Medium</button>
                <button onClick={() => this.evolve(75)}>Fast</button>
       </label>
      )
    } else if (this.props.menuname === "Update Board Size") {
      return(
        <label>
          <br/>
          <span>{this.props.menuname}</span> <br/>
                <button onClick={() => this.updateSize("small")}>Small</button>
                <button onClick={() => this.updateSize("med")}>Medium</button>
                <button onClick={() => this.updateSize("large")}>Large</button>
       </label>
      )
    }
  }//render
}//component

export default UpdateBoardButton;
