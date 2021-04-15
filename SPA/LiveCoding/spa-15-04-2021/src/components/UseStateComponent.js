import React, { useState } from "react";

export default function UseStateComponent() {
  const [number, setNumber] = useState(0);

  const onInc = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h1>UseStateComponent</h1>
      <button onClick={onInc}>+</button>
      <div>Counter: {number}</div>
    </div>
  );
}
