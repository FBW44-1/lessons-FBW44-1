import React, { useState } from "react";

const inputStyles = { marginBottom: "10px" };
function SimpleForm() {
  const [firstInputValue, setFirstInputValue] = useState("");
  const [secondInputValue, setSecondInputValue] = useState("");
  const onFirstInput = (e) => {
    //let inputData = e.target.value;
    //setFirstInputValue(inputData);
    //console.log(inputData);
    let { value } = e.target;
    setFirstInputValue(value);
  };

  const onSecondInput = (e) => {
    setSecondInputValue(e.target.value);
  };
  return (
    <div className="SimpleForm">
      <h2>Simple Form</h2>
      <form>
        <div style={inputStyles}>
          <label htmlFor="input-1">First input: </label>
          <input onChange={onFirstInput} id="input-1" type="text" />
        </div>
        <div>
          <label htmlFor="input-2">Second input: </label>
          <input onChange={onSecondInput} id="input-2" type="text" />
        </div>
      </form>
      <div>
        <p>Data from first input: {firstInputValue}</p>
        <p>Data from second input: {secondInputValue}</p>
      </div>
    </div>
  );
}

export default SimpleForm;
