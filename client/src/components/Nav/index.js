import React from "react";
import "./style.css";
import {Link} from "react-router-dom";


const Nav = props => (
  <div>
    <nav className="navbar fixed-top" style={{ marginBottom: "40px", backgroundColor: "red", height: "75px" }}>
      <ul className="nav navbar-nav navbar-left">
        <li>
          <a href="/" style={{ color: "white", textDecoration: "none", fontSize: "20px" }}>
            Home
          </a>
        </li>
      </ul>
      <ul className="nav navbar-nav navbar-left ml-auto">
        <li>
          <a href="/savedrecipes" style={{ color: "white", textDecoration: "none", fontSize: "20px" }}>
            My Recipes
          </a>
        </li>
      </ul>
      <ul className="nav navbar-nav navbar-right ml-auto">
        <li>
          <a href="/searchform" style={{ color: "white", textDecoration: "none", fontSize: "20px" }}>
            Search
          </a>
        </li>
      </ul>
      <ul className="nav navbar-nav navbar-right ml-auto">
        <li>
          <Link to="/signup" style={{ color: "white", background : "blue", textDecoration: "none", fontSize: "20px" }}>
            Sign Up
          </Link>
        </li> 
        </ul>
     
          <Link to="/signin" style={{ color: "white", background : "blue", textDecoration: "none", fontSize: "20px" }}>
            Sign In
          </Link>
       
    </nav>
  </div>
);

export default Nav;