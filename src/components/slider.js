import React, { Component } from 'react';

class Slider extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: this.props.value
    };
  }

  onChange(event){
    const value = event.currentTarget.value;
    //console.log(value);
    this.props.onChange(value);
    //this.setState({ value: value});
    //In es6 when both the value and key are same we can write it as follows
    this.setState({ value });
  }

  render() {
    return(
      <div className="slider">

        <span className="sliderTitle">{this.props.title}</span>

        <input
          type="range"
          value={this.props.value}
          min={this.props.minimumValue}
          max={this.props.maximumValue}
          onChange={() => this.onChange.bind(this)}
        />

        <span className="sliderValue">{this.state.value}</span>

      </div>
    );
  }
}

export default Slider;
