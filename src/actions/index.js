import axios from 'axios';

const ROOT_URL = 'http://private-4945e-weather34.apiary-proxy.com/weather34/rain';

export const CHANGE_PRESSURE = 'CHANGE_PRESSURE';
export const CHANGE_TEMPERATURE = 'CHANGE_TEMPERATURE';
export const LOADING_DATA_FOR_RAIN = 'LOADING_DATA_FOR_RAIN';

export const changePressure = (pressure) => {
  return {
    type: CHANGE_PRESSURE,
    payload: pressure
  };
};

export const changeTemperature = (temperature) => {
  return {
    type: CHANGE_TEMPERATURE,
    payload: temperature
  };
};

export const loadingDataForRain = () => {
  const request = axios.get(ROOT_URL);
  return {
    type: LOADING_DATA_FOR_RAIN,
    payload: request
  }
}
