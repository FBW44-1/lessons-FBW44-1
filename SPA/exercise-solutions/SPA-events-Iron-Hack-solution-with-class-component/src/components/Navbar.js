import "./Navbar.css";
function Navbar(props) {
  return (
    <nav id="navbar">
      <ul>
        <a href="#">
          <li>Home</li>
        </a>
        <a href="#">
          <li>Contact</li>
        </a>
        <a href="#">
          <li>About</li>
        </a>
      </ul>

      <div className="nav-details">
        <p className="nav-username"> {props.user} </p>
      </div>
    </nav>
  );
}

export default Navbar;
