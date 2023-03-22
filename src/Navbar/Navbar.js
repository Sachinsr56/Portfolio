import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="#Home">
        Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#Home">
                Home
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#Skills">
                Skills
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#Projects">
                Projects
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
