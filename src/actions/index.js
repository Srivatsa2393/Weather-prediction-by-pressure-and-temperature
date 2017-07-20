//creating different action creators for change in pressure, temperature and loading the rainn data

//using axios for AJAX request so installed the axios npm package
import axios from 'axios';

//storing the URL in a ROOT_URL
const ROOT_URL = 'http://private-4945e-weather34.apiary-proxy.com/weather34/rain';

export const CHANGE_PRESSURE = 'CHANGE_PRESSURE';
export const CHANGE_TEMPERATURE = 'CHANGE_TEMPERATURE';
export const LOADING_DATA_FOR_RAIN = 'LOADING_DATA_FOR_RAIN';

//action creator for change in pressure
export const changePressure = (pressure) => {
  return {
    type: CHANGE_PRESSURE,
    payload: pressure
  };
};

//action creator for change in temperature
export const changeTemperature = (temperature) => {
  return {
    type: CHANGE_TEMPERATURE,
    payload: temperature
  };
};

//action creator for loading the rain data
export const loadingDataForRain = () => {
  const request = axios.get(ROOT_URL);
  return {
    type: LOADING_DATA_FOR_RAIN,
    payload: request
  }
}
