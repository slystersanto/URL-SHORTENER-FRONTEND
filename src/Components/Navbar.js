import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">My URL Shortener</Link>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/create-url">Create URL</Link>
        </li>
        <li>
          <Link to="/created-urls">Created URLs</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
