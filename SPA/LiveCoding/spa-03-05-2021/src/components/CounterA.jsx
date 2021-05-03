import React from "react";

export default function CounterA(props) {
  return (
    <div className="Container">
      <h3>Counter A</h3>
      <button className="Button" onClick={props.incrementHandler}>
        +
      </button>
      <span className="Counter">Counter: {props.counter}</span>
      <button className="Button" onClick={props.decrementHandler}>
        -
      </button>
      <span className="Reset" onClick={props.resetHandler}>
        Reset
      </span>
    </div>
  );
}
