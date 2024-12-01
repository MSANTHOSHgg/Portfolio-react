import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="blogheader">
      <nav>
        <Link to="/Blog">Home</Link>
      </nav>
    </header>
  );
};

export default Header;