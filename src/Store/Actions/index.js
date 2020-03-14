import {INCREMENT, DECREMENT, RESET} from './types'

export const increment = (payload) => {
  return {
    type: INCREMENT,
    payload
  }
}

export const decrement = (payload) => {
  return {
    type: DECREMENT,
    payload
  }
}

export const reset = () => {
  return {
    type: RESET
  }
}