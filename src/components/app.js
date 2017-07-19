import React, { Component } from 'react';

import Slider from './slider';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <h1 className="text-center">
              Weather Predictor
            </h1>
          </div>

          <div className="row">
            <div className="col-md-6">
              <Slider />
            </div>
            <div className="col-md-6">
              Graph
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <Slider />
            </div>
            <div className="col-md-6">
              Graph
            </div>
          </div>

        </div>
      </div>
    );
  }
}
