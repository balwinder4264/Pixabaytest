import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="nav bg-dark ">
      <ul>
        <Link to="/" className="mr-5">
          Home{" "}
        </Link>

        <Link to="/fav">Favorite</Link>
      </ul>
    </nav>
  );
};

export default NavBar;
