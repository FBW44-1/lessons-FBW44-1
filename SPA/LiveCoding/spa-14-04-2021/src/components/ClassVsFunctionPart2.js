import React, { useState } from "react";

function FunComponent() {
  const [name, setName] = useState("Alex");
  return <div>FunComponent {name}</div>;
}

class CComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Pilar",
    };
  }

  render() {
    return <div>CComponent {this.state.name}</div>;
  }
}

export { FunComponent, CComponent };
/*
const state = {
  name: "outside",
};*/
