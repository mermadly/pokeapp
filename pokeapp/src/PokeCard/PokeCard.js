import React from "react";
import { useState, useEffect } from "react";
import "./PokeCard.scss";
import { Link } from "react-router-dom";

const PokeCard = (props) => {
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [imageUrl, setImageUrl] = useState("");
  const [speciesURL, setSpeciesURL] = useState("");
  const [speciesID, setSpeciesID] = useState("");

  const getInfo = async () => {
    const url = props.url;
    const response = await fetch(url);
    const data = await response.json();

    setPokemonInfo(data);
    setImageUrl(data.sprites.front_default);
    setSpeciesURL(data.species.url);
    setSpeciesID(data.id);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <Link className="link" to="/card" to={{ pathname: `/card/${speciesID}` }}>
      <div className="cardContainer">
        <div className="cardTitle">{props.name}</div>
        <div className="imgContainer">
          <img src={imageUrl} alt="" />
        </div>
        <span className="pokeID">ID. {speciesID}</span>
      </div>
    </Link>
  );
};

export default PokeCard;
