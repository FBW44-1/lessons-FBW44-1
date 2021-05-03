import { createContext, useState } from "react";

const CounterContext = createContext({
  counter: 0,
  incrementHandler: () => {},
  decrementHandler: () => {},
  resetHandler: () => {},
});

const CounterProvider = (props) => {
  const [counter, setCounter] = useState(0);
  const incrementHandler = () => setCounter(counter + 1);

  const decrementHandler = () => setCounter((prvCounter) => prvCounter - 1);

  const resetHandler = () => {
    setCounter(0);
  };

  return (
    <CounterContext.Provider
      value={{
        counter,
        incrementHandler,
        decrementHandler,
        resetHandler,
      }}
    >
      {props.children}
    </CounterContext.Provider>
  );
};

export { CounterContext, CounterProvider };
