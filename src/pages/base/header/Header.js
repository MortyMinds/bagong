import React from "react";
import "./Header.css";
import pickleRick from "./pickle_rick.png";
import {Link} from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={pickleRick} alt="Pickle Rick"/>
      </div>
      <nav className="headerNav">
        <ul>
          <li>
              <Link to="/about">About</Link>
          </li>
          <li>
              <Link to="/search">Search</Link>
          </li>
          <li>
              <Link to="/apply">Apply</Link>
          </li>
          <li>
              <Link to="/people">People</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
