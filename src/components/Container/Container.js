import React, { Component } from 'react';
import './container.scss';

class Container extends Component{

  constructor(props){
    super(props);

    this.state = {
      row : props.row,
      col : props.col
    }
  }


render(){
  return (
    <div className="container-outer">
      <div className="container-inner">
        <div className="container-main">
        </div>
      </div>
    </div>
  )
}
  

}
export default Container;
