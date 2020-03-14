import {combineReducers} from 'redux'
import CounterReducer from './CountReducer'
import APIFetchReducer from './ApiFetchReducer'

const RootReducer = combineReducers(
  { counter: CounterReducer,
    data: APIFetchReducer
  }
)

export default RootReducer