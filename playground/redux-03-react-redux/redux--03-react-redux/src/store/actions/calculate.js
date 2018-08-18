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

export const multiplyValue = number => {
  return {
    type: actions.MULTIPLY,
    payload: number
  }
}

export const deductValue = number => {
  return {
    type: actions.DEDUCT,
    payload: number
  }
}

export const squareValue = number => {
  return {
    type: actions.SQUARE,
    payload: number
  }
}

