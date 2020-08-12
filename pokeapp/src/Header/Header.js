import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import PokeLogo from "../Images/pokemon-logo2.png";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={PokeLogo} className="pokemonLogo" alt="Pokemon Logo" />
      </Link>
    </header>
  );
};

export default Header;
