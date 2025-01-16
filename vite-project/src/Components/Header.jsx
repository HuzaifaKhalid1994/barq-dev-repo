import React from "react";

const Header = ({ logo, name }) => {
  return (
    <header className="header">
      <img src={logo} alt={`${name} Logo`} className="company-logo" />
      <h1>{name} Order Management</h1>
    </header>
  );
};

export default Header;