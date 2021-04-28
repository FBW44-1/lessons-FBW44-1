import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <Link to="/"> Home </Link>
      <Link to="/products">Products</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
