import React, { useState } from "react";

export default function MapInJsx() {
  const [posts] = useState(["post 1", "post 2", "post 3"]);

  return (
    <div>
      <h1> MapInJsx</h1>
      {posts.map((PostsItem) => (
        <div>{PostsItem}</div>
      ))}
    </div>
  );
}
