import React from "react";
import "./icon.css";
function Navbar() {
  return (
    <div class="sticky-top">
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{ backgroundColor: "#A10601" }}
      >
        <a className="navbar-brand" href="#">
          <div className="top-logo">
            <a
              style={{ color: "white", textDecoration: "none" }}
              className="li-logo"
              href="https://www.hamleys.in/"
              title
            >
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
          <ul class="navbar-nav dropdown">
            <a
              style={{ color: "white", textDecoration: "none" }}
              className="nav-link dropdown-toggle "
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Age
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdown"
              style={{ backgroundColor: "rgba(120, 5, 5,0.9)" }}
            >
              <a
                style={{ color: "white", textDecoration: "none" }}
                className="dropdown-item"
                href="#"
              >
                0-11 Months
              </a>
              <a
                style={{ color: "white", textDecoration: "none" }}
                className="dropdown-item"
                href="#"
              >
                12-24 Months
              </a>
              <a
                style={{ color: "white", textDecoration: "none" }}
                className="dropdown-item"
                href="#"
              >
                3-4 Years
              </a>
              <a
                style={{ color: "white", textDecoration: "none" }}
                className="dropdown-item"
                href="#"
              >
                5-6 Years
              </a>
              <a
                style={{ color: "white", textDecoration: "none" }}
                className="dropdown-item"
                href="#"
              >
                7-9 Years
              </a>
              <a
                style={{ color: "white", textDecoration: "none" }}
                className="dropdown-item"
                href="#"
              >
                10-12 Years
              </a>
              <a
                style={{ color: "white", textDecoration: "none" }}
                className="dropdown-item"
                href="#"
              >
                13+ Years
              </a>
            </div>
          </ul>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a
                style={{ color: "white", textDecoration: "none" }}
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                Category
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
                style={{ backgroundColor: "rgba(120, 5, 5,0.9)" }}
              >
                <div class="d-flex ml-5 mr-5 pr-5 col-12 w-100 h-100">
                  <ul class="navbar-list">
                    <li>
                      <a
                        style={{ color: "white", textDecoration: "none" }}
                        href="https://www.hamleys.in/arts-crafts.html"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Arts &amp; Crafts{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "white", textDecoration: "none" }}
                        href="https://www.hamleys.in/catalog/category/view/s/collectibles-toy-guns/id/3669/"
                      >
                        Collectibles &amp; Toy Guns{" "}
                      </a>
                    </li>
                    <div className="dropdown-divider"></div>
                    <li>
                      <a
                        style={{ color: "white", textDecoration: "none" }}
                        href="https://www.hamleys.in/dolls-fashion.html"
                      >
                        Dolls &amp; Fashion{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "white", textDecoration: "none" }}
                        href="https://www.hamleys.in/education-construction-toys.html"
                      >
                        Education &amp; Construction Toys{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "white", textDecoration: "none" }}
                        href="https://www.hamleys.in/games-puzzles.html"
                      >
                        Games &amp; Puzzles{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "white", textDecoration: "none" }}
                        href="https://www.hamleys.in/impulse-novelty-toys.html"
                      >
                        Impulse &amp; Novelty Toys{" "}
                      </a>
                    </li>
                    <div className="dropdown-divider"></div>
                    <li>
                      <a
                        style={{ color: "white", textDecoration: "none" }}
                        href="https://www.hamleys.in/infant-pre-school.html"
                      >
                        Infant &amp; Pre-School{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "white", textDecoration: "none" }}
                        href="https://www.hamleys.in/new-gen-toys.html"
                      >
                        New Gen Toys{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "white", textDecoration: "none" }}
                        href="https://www.hamleys.in/catalog/category/view/s/role-pretend-play/id/3921/"
                      >
                        Role &amp; Pretend Play{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "white", textDecoration: "none" }}
                        href="https://www.hamleys.in/school-supplies-bags.html"
                      >
                        School Supplies &amp; Bags{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "white", textDecoration: "none" }}
                        href="https://www.hamleys.in/soft-toys.html"
                      >
                        Soft Toys{" "}
                      </a>
                    </li>
                    <div className="dropdown-divider"></div>
                  </ul>
                  <ul class="navbar-list">
                    <li>
                      <a
                        style={{ color: "white", textDecoration: "none" }}
                        href="https://www.hamleys.in/sports-ride-ons.html"
                      >
                        Sports &amp; Ride Ons{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "white", textDecoration: "none" }}
                        href="https://www.hamleys.in/vehicles-tracksets-remote-control-toys.html"
                      >
                        Vehicles, Tracksets &amp; Remote Control Toys{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "white", textDecoration: "none" }}
                        href="https://www.hamleys.in/baby-fashion.html"
                      >
                        Baby Fashion{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "white", textDecoration: "none" }}
                        href="https://www.hamleys.in/footwear-accessories.html"
                      >
                        Footwear &amp; Accessories{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "white", textDecoration: "none" }}
                        href="https://www.hamleys.in/kids-fashion.html"
                      >
                        Kids Fashion{" "}
                      </a>
                    </li>
                    <div className="dropdown-divider"></div>
                    <li>
                      <a
                        style={{ color: "white", textDecoration: "none" }}
                        href="https://www.hamleys.in/books-magazines.html"
                      >
                        Books &amp; Magazines{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "white", textDecoration: "none" }}
                        href="https://www.hamleys.in/folktales.html"
                      >
                        Folktales{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <div className="nav-item dropdown">
              <a
                style={{ color: "white", textDecoration: "none" }}
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                Brand
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
                style={{ backgroundColor: "rgba(120, 5, 5,0.9)" }}
              >
                <div class="m-list-box">
                  <ul class="navbar-list">
                    <li>
                      <a
                        style={{ color: "white", textDecoration: "none" }}
                        href="/brand/disney.html"
                      >
                        Disney{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "white", textDecoration: "none" }}
                        href="/brand/fisher-price.html"
                      >
                        Fisher-Price
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "white", textDecoration: "none" }}
                        href="/brand/hasbro.html"
                      >
                        Hasbro
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "white", textDecoration: "none" }}
                        href="/brand/hot-wheels.html"
                      >
                        Hot Wheels
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "white", textDecoration: "none" }}
                        href="/brand/lego.html"
                      >
                        Lego
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "white", textDecoration: "none" }}
                        href="/brand/nerf.html"
                      >
                        Nerf
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "white", textDecoration: "none" }}
                        href="/brand/barbie.html"
                      >
                        Barbie
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "white", textDecoration: "none" }}
                        href="/traditional-toys.html"
                      >
                        Traditional toys
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <li className="nav-item">
              <a
                style={{ color: "white", textDecoration: "none" }}
                className="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="false"
              >
                New Arrivals
              </a>
            </li>
            <li className="nav-item">
              <a
                style={{ color: "white", textDecoration: "none" }}
                className="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="false"
              >
                Store locator
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2 rounded-pill search-block"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ backgroundColor: "#670501" }}
            />
            <button
              className="btn my-2 my-sm-0 rounded-pill"
              style={{ color: "#996633" }}
              type="submit"
            >
              <img
                src="https://www.hamleys.in/static/version1612899424/frontend/Embitel/Hamleys/en_US/images/search_icon.png"
                alt=""
              />
            </button>
          </form>
        </div>
      </nav>
      {/* Second navbar */}
      <nav
        class="navbar navbar-expand-md navbar-light navbar-small"
        style={{ backgroundColor: "#A8854A" }}
      >
        <div class="navbar-collapse collapse" id="navbar2">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a
                class="nav-link"
                href="#"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "12px"
                }}
              >
                Download Hamleys Android App
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.hamleys.in/customer/account/login/"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "12px"
                }}
              >
                Sign in
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://bluedart.com/tracking"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "12px"
                }}
              >
                Track my order
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.hamleys.in/customer/account/login/referer/aHR0cHM6Ly93d3cuaGFtbGV5cy5pbi9zYWxlcy9vcmRlci9oaXN0b3J5Lw%2C%2C/"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "12px"
                }}
              >
                Cancel/Return your order
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.hamleys.in/contact-us"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "12px"
                }}
              >
                Need help?
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
