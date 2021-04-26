import React, { Component } from "react";
import CounterPage from "./CounterPage";

// Update this component to use the Mounting Component Lifecycle methods

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      counterpage: true,
    };
    console.log("Home: In the constructor");
  }

  toggleCounter = () => {
    this.setState({
      counterpage: !this.state.counterpage,
    });
  };



//getDerivedStateFromProps()
static getDerivedStateFromProps(state,props){
  console.log("Home: In the getDerivedStateFromProps")
  return null;
}

//componentDidMount
componentDidMount(){
console.log("Home: In the componentDidMount")
}
  render() {
    console.log("Home: In render");
    return (
      <div>
        <h2>Home Page</h2>
        {this.state.counterpage && <CounterPage />}
        <button onClick={this.toggleCounter}>
          {this.state.counterpage ? "hide" : "show"}
        </button>
      </div>
    );
  }
}
