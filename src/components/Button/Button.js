import React, { Component } from 'react';
import { connect } from 'react-redux';
import { lift } from '../../actions/';
import './button.scss';
import aud from '../Button/elevator-bing.mp3';
import { closestLift, floorArr } from '../Lift/Lift';


class Button extends Component{


  constructor(props){
    super(props);

    this.state = {
      name : props.name,
      value : props.value,
      lift : props.lift,
      button_class : "green-button" 
    }
  }

  handleClick = () => {
    this.setState({value: "Waiting", button_class: "red-button"});
    if(floorArr.every((e) => e === null)){
      setTimeout(() => this.handleClick(), 50)
    }
    else{
      this.makeGreen();
    }
  }

  makeGreen = () => {
    const audio = new Audio(aud); 
    setTimeout(() => {audio.play(); this.setState({value: "Arrived", button_class: "grey-button"})},13000);
    setTimeout(() => {this.setState({value: "Call", button_class: "green-button"});}, 16000);
  }

  render(){
    return (
      <div className="button-container">
        <div className="button-wrapper">
          <div className="button-inner">
            <button className={this.state.button_class}
              onClick={(e) => {
                if(closestLift(this.state.name) === Number(this.state.name)){
                  const audio = new Audio(aud); 
                  audio.play(); this.setState({value: "Arrived", button_class: "grey-button"})
                  setTimeout(() => {this.setState({value: "Call", button_class: "green-button"});}, 2000);
                }else{
                  this.handleClick();
                  this.state.lift(e);
                }
                }}
              name={this.state.name}
            >
              {
                this.state.value
              }
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { lift })(Button);
