import React, { Component } from 'react';

class Slider extends React.Component{
  render() {
    return(
      <div className="slider">

        <span className="sliderTitle"></span>

        <input type="range" />

        <span className="sliderValue"></span>

      </div>
    );
  }
}

export default Slider;
