import React from "react";
import "./Header.scss";
import PokeLogo from "../Images/pokemon-logo2.png";

const Header = () => {
  return (
    <header>
      <img src={PokeLogo} className="pokemonLogo" alt="Pokemon Logo" />
    </header>
  );
};

export default Header;
