import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to = "/">
        <p>Logo</p>
      </Link>
      <div className="nav-bar">
        <p>ChatBot</p>
        <p>Resources</p>
        <p>Services</p>
        <p>Products</p>
        <Link to="/auth">
          <p>Account</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
