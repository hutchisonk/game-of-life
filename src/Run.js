import React, { Component } from 'react';
import './css/game_of_life.css';

class RunButton extends Component {
  constructor() {
    super();
    this.evolve = this.evolve.bind(this);
  }

evolve(speed) {
  this.props.pause()
  var self=this;
    var generation_interval_id = this.props.generationinterval;
    	generation_interval_id = setInterval(function() {
            self.props.nextGeneration()
    	},speed);
      this.props.setGenInterval(generation_interval_id);
};

componentDidMount(){
  this.evolve(200);
}
  render() {
    return(
      <button onClick={() => this.evolve(150)}>{this.props.buttonname}</button>
    )
  }//render
}//component

export default RunButton;
