import {combineReducers} from 'redux'
import CounterReducer from './CountReducer'
import APIFetchReducer from './ApiFetchReducer'

const RootReducer = combineReducers(
  { counter: CounterReducer,
    postData: APIFetchReducer
  }
)

export default RootReducer