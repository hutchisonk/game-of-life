import React, { Component } from 'react';
import './css/game_of_life.css';

class UpdateBoardButton extends Component {
  constructor() {
    super();
    // this.handleChange = this.handleChange.bind(this);
    this.speed_evolve = this.speed_evolve.bind(this);
    this.evolve = this.evolve.bind(this);

  }
  //
  // var generationinterval = this.props.generationinterval;
  // // console.log(generationinterval)
  // clearInterval(generationinterval);
  // this.setState({ generationinterval });
//
// updateSpeed(newspeed) {
//   var generationinterval = this.props.generationinterval;
//   // console.log(generationinterval)
//   clearInterval(generationinterval);
//   // generationinterval = this.generation_interval = setInterval(function(){
//   //   nextGeneration();
//   // }, newspeed);
//   this.setState({ generationinterval });
//   // this.props.evolve(newspeed);
//
// }

  evolve(speed) {
    console.log(this.props.speed);
    this.props.setSpeed(speed);
     console.log(this.props.speed);

     //clear previous intervals so we don't stack them
     var generationinterval = this.props.generationinterval;
      if (generationinterval) {
        console.log(this.props.generationinterval)
        clearInterval(this.props.generationinterval);
      // console.log(generation_interval);
      }
      // this.props.setGenInterval(generationinterval);

      var self = this;
      generationinterval = setInterval(function(){
      // this.props.generationinterval = setInterval(function(){
        self.props.nextGeneration();
        // console.log("running");
      }, self.props.speed);
      this.props.setGenInterval(generationinterval);
  }


  speed_evolve(speed) {
    // console.log(speed);
    //  console.log(this.props.speed);
    this.props.setSpeed({ speed });
    console.log(this.props.speed);
     //clear previous intervals so we don't stack them
     var generationinterval = this.props.generationinterval;
      if (generationinterval) {
        console.log(this.props.generationinterval)
        clearInterval(this.props.generationinterval);
      // console.log(generation_interval);
      }
      // this.props.setGenInterval(generationinterval);

      var self = this;
      generationinterval = setInterval(function(){
      // this.props.generationinterval = setInterval(function(){
        self.props.nextGeneration();
        // console.log("running");
      }, self.props.speed);
      this.props.setGenInterval(generationinterval);
  }
//
// setSpeed(speed) {
//   // var speed = newSpeed;
//   // console.log(speed);
//   // var prevspeed = this.state.speed;
//   // console.log(prevspeed);
//   console.log(speed);
//
//   this.setState({ speed });
//   console.log(this.state.speed);
//
// }

  render() {
    // const slowButton = <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
    // const button
    return(
      <label>
        <span>{this.props.menuname}</span>

              <button onClick={() => this.evolve(750)}>Slow</button>
              <button onClick={() => this.evolve(150)}>Medium</button>
              <button onClick={() => this.evolve(75)}>Fast</button>




     </label>
    )
  }//render



  //onChange={(e) => this.handleChange(e, 750)}
  //150, 70
  // render(key) {
  //   const recipename = this.props.recipename;
  //   const ingredients = this.props.ingredients.join(", ");
  //
  //   return (
  //     <div className="recipe-edit-div">
  //     <form ref={(input)=>this.recipeForm = input} className="recipe-edit" onSubmit={(e) => this.editRecipe(e, key)}>
  //       name:<br/> <input ref={(input)=>this.name = input} type="text" value={recipename} onChange={(e) => this.editRecipe(e, key)}/>
  //     <br/>
  //     ingr:<br/><input ref={(input)=>this.ingredients = input} type="text" value={ingredients} onChange={(e) => this.editRecipe(e, key)}/>
  //     </form>
  //
  //     <button className="done_editing_recipe_btn" onClick={this.props.toggleForm}>done editing</button>
  //     <button className="delete_recipe_btn" onClick={() => this.props.removeRecipe(this.props.recipekey)} >delete recipe</button>
  //
  //
  //    </div>   )
  // }





}//component

export default UpdateBoardButton;
