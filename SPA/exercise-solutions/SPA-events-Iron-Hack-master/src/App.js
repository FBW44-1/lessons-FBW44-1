import React, { Component } from "react";
import User from "./components/User";
import Navbar from "./components/Navbar";
class App extends Component {
  state = {
    bootcamp: "Ironhack",
    backColor: "blue",
    counter: 0,
    userName: "Max",
  };

  colorMapper = () => "#" + Math.floor(Math.random() * 16777215).toString(16);

  clickHandler = () => {
    console.log("CLICKED!", this.colorMapper());
    if (this.state.counter % 5 == 0) {
      this.setState({
        ...this.state,
        backColor: this.colorMapper(),
        counter: this.state.counter + 1,
      });
    } else {
      this.setState({
        ...this.state,
        counter: this.state.counter + 1,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar user={this.state.userName} />
        <User
          bootcampName={this.state.bootcamp}
          backColorStyle={this.state.backColor}
        />
        <div>Counter: {this.state.counter}</div>
        <button onClick={this.clickHandler}>click me!</button>
      </div>
    );
  }
}

export default App;
/*
function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
    </div>
  );
}*/
