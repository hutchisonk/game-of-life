import React, { Component } from 'react';
import './css/game_of_life.css';

class PauseButton extends Component {
  constructor() {
    super();
    this.pause = this.pause.bind(this);
  }

  pause() {
    //setGenInterval={this.setGenInterval} deleted this prop
    var generationinterval = this.props.generationinterval;
    console.log(generationinterval)
    clearInterval(generationinterval);
    // this.props.setGenInterval(generationinterval);
  }

  render() {
    return(
      <button onClick={() => this.pause()}>{this.props.buttonname}</button>
    )
  }//render
}//component

export default PauseButton;
