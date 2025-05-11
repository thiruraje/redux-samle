import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../actions";

export default function Counter() {
  const currentCountValue = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>{currentCountValue}</div>
      <div>
        <button onClick={() => dispatch(increment())}>INCREMENT BY 1</button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>DECREMENT BY 1</button>
      </div>
      <button onClick={() => dispatch(reset())}>RESET</button>
    </div>
  );
}
