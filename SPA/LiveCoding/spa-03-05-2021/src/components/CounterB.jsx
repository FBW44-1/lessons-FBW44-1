import React, { useContext } from "react";
import { CounterContext } from "../store/CounterContext";

export default function CounterB() {
  const { incrementHandler, counter, decrementHandler } = useContext(
    CounterContext
  );
  return (
    <div className="Container">
      <h3>Counter B</h3>
      <button className="Button" onClick={incrementHandler}>
        +
      </button>
      <span className="Counter">Counter: {counter}</span>
      <button className="Button" onClick={decrementHandler}>
        -
      </button>
    </div>
  );
}
