import React, { Component } from 'react';
import './css/game_of_life.css';

class PauseButton extends Component {
  constructor() {
    super();
    this.pause = this.pause.bind(this);
  }

  pause() {
    var generation_interval_id = this.props.generationinterval;
    console.log(generation_interval_id)
    clearInterval(generation_interval_id);
  }

  render() {
    return(
      <button onClick={() => this.props.pause()}>{this.props.buttonname}</button>
    )
  }//render
}//component

export default PauseButton;
