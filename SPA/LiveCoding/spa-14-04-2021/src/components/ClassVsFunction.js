import React, { Component, useState } from "react";

/*
function useStateFake (input){
    return  [input, ()=> {...}]
}
const [nameTest, setNameTest] = useStateFake('Alex')
*/

export function FunctionComponent() {
  const [name, setName] = useState("Alex");
  const [email, setEmail] = useState("alex@gmail.com");
  const onChangeUser = () => {
    setName("Pilar");
    setEmail("pilar@gmail.com");
  };
  return (
    <div>
      <h1>Function Component</h1>
      <button onClick={onChangeUser}>Click me!</button>
      <div>user name: {name}</div>
      <div>user email: {email}</div>
    </div>
  );
}

// in react
/*
class Component {
    setState(){
        ...
    }
}
*/

export class ClassComponent extends Component {
  state = {
    name: "Alex",
    email: "alex@gmail.com",
  };
  onChangeUser = () => {
    this.setState({ name: "Max", email: "max@gmail.com" });
  };

  render() {
    return (
      <div>
        <h1>Class Component {2 + 2}</h1>
        <h1>Class Component 2 + 2</h1>

        <button onClick={this.onChangeUser}>Click me!</button>
        <div>user name: {this.state.name}</div>
        <div>user email: {this.state.email}</div>
      </div>
    );
  }
}
/**
     <button
          onClick={() => this.setState({ name: "Max", email: "max@gmail.com" })}
        >
          Click me2!
        </button>
 */
