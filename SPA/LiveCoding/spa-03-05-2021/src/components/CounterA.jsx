import React, { useContext } from "react";
import { CounterContext } from "../store/CounterContext";

export default function CounterA() {
  const {
    incrementHandler,
    counter,
    decrementHandler,
    resetHandler,
  } = useContext(CounterContext);
  return (
    <div className="Container">
      <h3>Counter A</h3>
      <button className="Button" onClick={incrementHandler}>
        +
      </button>
      <span className="Counter">Counter: {counter}</span>
      <button className="Button" onClick={decrementHandler}>
        -
      </button>
      <span className="Reset" onClick={resetHandler}>
        Reset
      </span>
    </div>
  );
}
