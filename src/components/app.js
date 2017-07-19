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
              <div className="well">
                <Slider
                  title="Pressure (hPa)"
                  minimumValue = "970"
                  maximumValue = "1030"
                />
              </div>
            </div>

            <div className="col-md-6">
              Graph
            </div>
          </div>

          <div className="row">

            <div className="col-md-6">
              <div className="well">
                <Slider
                  title="temperature (°C)"
                  minimumValue = "10"
                  maximumValue = "35"
                />
              </div>
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
