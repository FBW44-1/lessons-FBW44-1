import "./App.css";
import { useState } from "react";
import User from "./components/User";
import Navbar from "./components/Navbar";

function App() {
  //const [bootcamp] = useState("Ironhack");
  const [backColor, setBackColor] = useState("red");
  const [counter, setCounter] = useState(0);

  let bootcamp = "Ironhack";

  const colorMapper = () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16);

  const clickHandler = () => {
    console.log("the button clicked!");
    setCounter(counter + 1);
    if ((counter + 1) % 5 == 0 && counter != 0) {
      setBackColor(colorMapper());
    }
  };
  return (
    <div className="App">
      <Navbar />
      <User bootcamp={bootcamp} backColor={backColor} />
      <div>Counter: {counter}</div>
      <button onClick={clickHandler}>click me!</button>
    </div>
  );
}

export default App;
