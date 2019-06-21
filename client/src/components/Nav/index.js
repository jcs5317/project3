import React from "react";

const Nav = props => (
  <div>
    <nav className="navbar fixed-top" style={{ marginBottom: "40px", backgroundColor: "forestgreen", height: "50px" }}>
      <ul className="nav navbar-nav navbar-left">
        <li>
          <a href="/" style={{ color: "white", textDecoration: "none", fontSize: "20px" }}>
            Sign-in / Log-in
          </a>
        </li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a href="/savedbooks" style={{ color: "white", textDecoration: "none", fontSize: "20px" }}>
            My recipes
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Nav;