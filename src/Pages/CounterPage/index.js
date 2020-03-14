import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as storeActions from '../../Store/Actions'


const btnStyle = {
  marginRight: '10px'
}

const CounterPage = () => {
  const { count } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div className="Counter container">
        <h1>Counter Component</h1>
        <p className="lead">{count}</p>
        <button
          type="button"
          style={btnStyle}
          className="btn btn-success"
          onClick={e => {
            e.preventDefault();
            dispatch(storeActions.increment(5))
          }}
        >
          Increment
        </button>
        <button
          type="button"
          className="btn btn-warning"
          style={btnStyle}
          onClick={e => {
            e.preventDefault();
            dispatch(storeActions.decrement(1))
          }}
        >
          Decrement
        </button>
        <button
          type="button"
          className="btn btn-danger"
          style={btnStyle}
          onClick={e => {
            e.preventDefault();
            dispatch(storeActions.reset())
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default CounterPage;
