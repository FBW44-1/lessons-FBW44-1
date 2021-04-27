import { Link } from "react-router-dom";
/**
 * 
such components use the special children prop to pass children elements directly into their output
 */
const Layout = (props) => {
  console.log("Layout ==> ", props);
  return (
    <div>
      <header>
        <nav className="Navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/posts">Posts</Link>
        </nav>
      </header>

      {props.children}
      <footer className="Footer">Footer</footer>
    </div>
  );
};

export default Layout;
