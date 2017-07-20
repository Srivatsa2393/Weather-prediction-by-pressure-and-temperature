import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changePressure, changeTemperature, loadingDataForRain } from '../actions';

import Slider from './slider';
import ChanceOfRainChart from './chance_of_rain_chart';
import AmountOfRainfallChart from './amount_of_rainfall_chart';


class App extends Component {

  componentDidMount(){
    this.props.loadingDataForRain();
  }

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
                  onChange={this.props.changePressure}
                  minValue = "970"
                  maxValue = "1030"
                  value={this.props.pressure}
                />
              </div>
            </div>

            <div className="col-md-6">
              <ChanceOfRainChart chartData={this.props.chanceOfRainData} />
            </div>
          </div>

          <div className="row">

            <div className="col-md-6">
              <div className="well">
                <Slider
                  title="temperature (°C)"
                  onChange={this.props.changeTemperature}
                  minValue = "10"
                  maxValue = "35"
                  value={this.props.temperature}
                />
              </div>
            </div>

            <div className="col-md-6">
              <AmountOfRainfallChart chartData={this.props.rainData} />
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
    temperature: state.temperature,
    chanceOfRainData: state.chanceOfRainData,
    rainData: state.rainData
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changePressure,
    changeTemperature,
    loadingDataForRain
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps) (App);
