import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="header">
      <div onClick={navigateToHome} className="header__logo">
        <p>Wookie</p>
        <p>Movies</p>
      </div>
    </div>
  );
};

export default Header;
