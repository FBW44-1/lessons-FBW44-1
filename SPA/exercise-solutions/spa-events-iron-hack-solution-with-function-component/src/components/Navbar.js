import "./Navbar.css";

export default function Navbar() {
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
        <p className="nav-username"> Bob </p>
      </div>
    </nav>
  );
}
