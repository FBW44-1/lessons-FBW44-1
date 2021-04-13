import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <input type="checkbox" id="input-menu" />
        <div className="subNavbar">
          <label className="label" htmlFor="input-menu">
            <i class="fas fa-bars"></i>
          </label>
          <div className="Logo">Logo</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
