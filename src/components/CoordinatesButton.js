// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  handleClick = (e) => {
    this.props.onReceiveCoordinates([e.screenX, e.screenY]);
  }

  render(){
    return(
      <button onClick= {this.handleClick}>Coords</button>
    )
  }

}

export default CoordinatesButton;
