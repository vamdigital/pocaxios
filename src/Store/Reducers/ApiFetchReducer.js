import {FETCHING, SUCCESS, ERROR} from '../Actions/types'

const initialState = {
  uiState: {
    inFlight: false,
    inSuccess: false,
    inError: false
  },
  response: []
}

const APIFetchReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING :
      return {
        ...state,
        uiState: {
          inFlight: true
        }
      }
    case SUCCESS :
      return {
        ...state,
        uiState: {
          inFlight: false,
          inSuccess: true,
          inErrro: false
        },
        response: action.payload
      }
    case ERROR : 
      return {
        ...state,
        uiState: {
          inFlight: false,
          inSuccess: false,
          inError: true
        },
        response: action.payload
      }
    default :
      return state
  }
}

export default APIFetchReducer