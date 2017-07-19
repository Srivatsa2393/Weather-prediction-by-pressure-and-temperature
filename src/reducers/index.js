// import { combineReducers } from 'redux';
//
// const rootReducer = combineReducers({
//   state: (state = {}) => state
// });
//
// export default rootReducer;

import { CHANGE_PRESSURE, CHANGE_TEMPERATURE, LOADING_DATA_FOR_RAIN } from '../actions';

const DEFAULT_STATE = {
  pressure: 970,
  temperature: 15,
  chanceOfRainData : [],
  rainData: []
};

//function to calculate the chance of rain
function chanceOfRain(pressure, temperature, amount) {
  let score = Math.log(amount + 1) * Math.log(pressure - 929) * Math.log(temperature - 9);
  let mean = Math.min(Math.max(score, 0), 100);
  return  {
    mean: mean,
    upperBound: Math.min(1.5 * mean, 100),
    lowerBound: Math.max(0.5 * mean, 0)
  }
}


//function that generates chance of rain
function generateChanceOfRainData(pressure, temperature, rainData){
  return rainData.map((day) => {
    let chanceOfRainfall = chanceOfRain(pressure, temperature, day.amount);
    return Object.assign({}, day, chanceOfRainfall);
  });
};


export default(state = DEFAULT_STATE, action) => {

  let newChanceOfRainData = [];

  switch(action.type){
    case CHANGE_PRESSURE:
      let newPressure = action.payload;
      newChanceOfRainData = generateChanceOfRainData(newPressure, state.temperature, state.rainData);
      return Object.assign({}, state, {pressure: newPressure, chanceOfRainData : newChanceOfRainData});
      //return { ...state, pressure: newPressure };

    case CHANGE_TEMPERATURE:
      let newTemperature = action.payload;
      newChanceOfRainData = generateChanceOfRainData(state.pressure, newTemperature, state.rainData);
      return Object.assign({}, state, {temperature: newTemperature, chanceOfRainData : newChanceOfRainData});
      //return { ...state, temperature: newTemperature };

    case LOADING_DATA_FOR_RAIN:
      let newRainData = action.payload.data[0].days;
      newChanceOfRainData = generateChanceOfRainData(state.pressure, state.temperature, newRainData);
      return Object.assign({}, state, {rainData: newRainData, chanceOfRainData : newChanceOfRainData});


    default:
      return state;
  }
}
