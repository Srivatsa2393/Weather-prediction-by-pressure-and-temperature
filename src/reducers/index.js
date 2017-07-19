// import { combineReducers } from 'redux';
//
// const rootReducer = combineReducers({
//   state: (state = {}) => state
// });
//
// export default rootReducer;

import { CHANGE_PRESSURE, CHANGE_TEMPERATURE } from '../actions';

const DEFAULT_STATE = {
  pressure: 970,
  temperature: 15
};

export default(state = DEFAULT_STATE, action) => {

  switch(action.type){
    case CHANGE_PRESSURE:
      let newPressure = action.payload;
      return { ...state, temperature: newTemperature };

    case CHANGE_TEMPERATURE:
      let newTemperature = action.payload;
      return { ...state, temperature: newTemperature };

    default:
      return state;
  }
}
