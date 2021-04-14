import React, { useState } from "react";
import usersFromJson from "./users.json";

export default function NestMapInJsx() {
  const [users, setUsers] = useState(usersFromJson);

  const elements = [<div>first elm</div>, <div>2nd elm</div>];

  return (
    <div>
      <h1> NestMapInJsx</h1>

      {elements}

      {users.map((userItem) => (
        <div>{userItem.name}</div>
      ))}
    </div>
  );
}
