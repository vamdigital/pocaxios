import * as ActionTypes from "./types";

export const increment = payload => {
  return {
    type: ActionTypes.INCREMENT,
    payload
  };
};

export const decrement = payload => {
  return {
    type: ActionTypes.DECREMENT,
    payload
  };
};

export const reset = () => {
  return {
    type: ActionTypes.RESET
  };
};

export const fetchPost = () => {
  return {
    type: ActionTypes.FETCHING
  };
};

export const successPost = payload => {
  return {
    type: ActionTypes.SUCCESS,
    payload
  };
};

export const errorPost = payload => {
  return {
    type: ActionTypes.ERROR,
    payload
  };
};
