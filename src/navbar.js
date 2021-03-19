import React from "react";
import ReactDOM from "react-dom";
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#940000" }}
    >
      <a className="navbar-brand" href="#">
        <div className="top-logo">
          <a className="li-logo" href="https://www.hamleys.in/" title>
            <img
              className="mainlogo"
              data-src="https://www.hamleys.in/media/logo/stores/3/Hamleys-logo.png"
              alt=""
              width="84"
              height="45"
              src="https://www.hamleys.in/media/logo/stores/3/Hamleys-logo.png"
            />
          </a>
        </div>
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
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Categories
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Age
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                0-11 Months
              </a>
              <a className="dropdown-item" href="#">
                12-24 Months
              </a>
              <a className="dropdown-item" href="#">
                3-4 Years
              </a>
              <a className="dropdown-item" href="#">
                5-6 Years
              </a>
              <a className="dropdown-item" href="#">
                7-9 Years
              </a>
              <a className="dropdown-item" href="#">
                10-12 Years
              </a>
              <a className="dropdown-item" href="#">
                13+ Years
              </a>

              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="false"
            >
              New Arrivals
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
export default Navbar;
