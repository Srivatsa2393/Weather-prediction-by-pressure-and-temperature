import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changePressure, changeTemperature } from './actions';

import Slider from './components/slider';


class App extends Component {

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <h1 className="text-center">Weather Predictor</h1>
          </div>

          <div className="row">

            <div className="col-md-6">
              <div className="well">
                <Slider
                  title="Pressure (hPa)"
                  minimumValue = "970"
                  maximumValue = "1030"
                  value={this.props.pressure}
                />
              </div>
            </div>

            <div className="col-md-6">
              Graph component
            </div>
          </div>

          <div className="row">

            <div className="col-md-6">
              <div className="well">
                <Slider
                  title="temperature (°C)"
                  minimumValue = "10"
                  maximumValue = "35"
                  value={this.props.temperature}
                />
              </div>
            </div>

            <div className="col-md-6">
              Graph component
            </div>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    pressure: state.pressure,
    temperature: state.temperature
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changePressure,
    changeTemperature
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps) (App);
