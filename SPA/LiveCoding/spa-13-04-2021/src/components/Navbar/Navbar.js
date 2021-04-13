import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="Container">
        <div className="subNavbar">
          <label className="label" htmlFor="">
            <i class="fas fa-bars"></i>
          </label>
          <div className="logo">Logo</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
