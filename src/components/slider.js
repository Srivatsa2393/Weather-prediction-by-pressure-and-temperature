//creating a class based component
import React, { Component } from 'react';

class Slider extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: this.props.value
    };
  }

  //helper method to determine the range of pressure and temperature
  onChange(event){
    let value = event.currentTarget.value;
    //console.log(value);
    this.props.onChange(value);
    //in ES6 {value: value} === { value }
    this.setState({
      value
    });
  }

  render() {
    return(
      <div className="slider">

        <span className="title">{this.props.title}</span>

        <input
          type="range"
          min={this.props.minValue}
          max={this.props.maxValue}
          onChange={this.onChange.bind(this)}
          value={this.props.value}
        />

        <span className="value">{this.state.value}</span>

      </div>
    );
  }
}

export default Slider;
