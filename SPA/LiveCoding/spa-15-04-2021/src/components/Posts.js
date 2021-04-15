import React from "react";

export default function Posts(props) {
  // console.log("props from posts => ", posts);
  return (
    <div>
      <h1>Posts</h1>
      {props.posts.map((post) => (
        <div className="card text-center" key={post.id}>
          <div className="card-header">Post</div>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
          </div>
          <div className="card-footer text-muted">2 days ago</div>
        </div>
      ))}
    </div>
  );
}

/**
 export default function Posts({ posts }) {
  console.log("props from posts => ", posts);
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post))}
    </div>
  );
}
 */
