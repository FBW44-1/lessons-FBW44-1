import React from "react";

export default function CounterB({
  incrementHandler,
  counter,
  decrementHandler,
}) {
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
