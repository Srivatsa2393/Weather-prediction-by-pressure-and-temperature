import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changePressure, changeTemperature, loadingDataForRain } from '../actions';

import Slider from './slider';
import ChanceOfRainChart from './chance_of_rain_chart';
import AmountOfRainfallChart from './amount_of_rainfall_chart';


class App extends Component {

  //React lifecycle methods
  //componentDidMount is used because it renders the data as soon as the component is mounted
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

            <div className="col-sm-6">
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

            <div className="col-sm-6">
              <ChanceOfRainChart chartData={this.props.chanceOfRainData} />
            </div>
          </div>

          <div className="row">

            <div className="col-sm-6">
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

            <div className="col-sm-6">
              <AmountOfRainfallChart chartData={this.props.rainData} />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

//Using ES6 arrow function rather than writing the normal functionl way
//the value of pressure, temperature, chanceOfRainData, rainData can be passed as props inside the App component
const mapStateToProps = (state) => {
  return{
    pressure: state.pressure,
    temperature: state.temperature,
    chanceOfRainData: state.chanceOfRainData,
    rainData: state.rainData
  }
};


//bindActionCreators with dispatch is used to send the actions to all the reducers
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changePressure,
    changeTemperature,
    loadingDataForRain
  }, dispatch);
}

//connect used to bind react and redux
export default connect(mapStateToProps, mapDispatchToProps) (App);
