import { INCREMENT, DECREMENT, RESET } from "../Actions/types";
const initialState = {
  count: 0
};
const CountReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count > 0 ? state.count - action.payload : 0
      }
    case RESET:
      return {
        count: 0
      }
    default:
      return state;
  }
};

export default CountReducer;
