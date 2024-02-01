function NavBar() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <img src="/images/brandlogo.png" alt="Brand _ Logo" />
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="#" className="nav-link px-2 link-secondary">
              Menu
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 link-secondary">
              Location
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 link-secondary">
              About
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 link-secondary">
              Contact
            </a>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <button type="button" className=" primary-button">
            Login
          </button>
        </div>
      </header>
    </div>
  );
}
export default NavBar;
