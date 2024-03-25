import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar({ logo, order }) {
  return (
    <nav
      className="navbar is-fixed-top has-shadow p-0"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link
          className="navbar-item"
          to={`/?logo=${encodeURIComponent(logo)}&order=${encodeURIComponent(
            order
          )}`}
        >
          <FontAwesomeIcon icon="fa-solid fa-house" />
        </Link>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
