import "./App.css";
import { useState } from "react";
import CounterA from "./components/CounterA";
import CounterB from "./components/CounterB";

function App() {
  const [counter, setCounter] = useState(0);

  const incrementHandler = () => setCounter(counter + 1);

  const decrementHandler = () => setCounter((prvCounter) => prvCounter - 1);

  const resetHandler = () => {
    setCounter(0);
  };

  return (
    <div className="App">
      <h1>Context api</h1>
      <CounterA
        counter={counter}
        incrementHandler={incrementHandler}
        decrementHandler={decrementHandler}
        resetHandler={resetHandler}
      />
      <CounterB
        counter={counter}
        incrementHandler={incrementHandler}
        decrementHandler={decrementHandler}
      />
    </div>
  );
}

export default App;
