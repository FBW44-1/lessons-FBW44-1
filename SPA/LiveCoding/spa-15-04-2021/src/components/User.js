import React from "react";

//props= {name:"Jon", email:"jon@gmail.com" }
export default function User(props) {
  return (
    <div>
      <h1>User</h1>
      <div>user name: {props.name}</div>
      <div>user email: {props.email}</div>
    </div>
  );
}
