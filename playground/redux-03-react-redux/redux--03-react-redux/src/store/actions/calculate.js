import * as actions from './actionTypes';

export const incrementValue = (number) => {
  return {
    type: actions.INCREMENT,
    payload: number
  }
};

export const decrementValue = number => {
  return {
    type: actions.DECREMENT,
    payload: number
  }
}