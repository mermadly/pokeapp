import React from "react";
import { useState, useEffect } from "react";
import "./PokeItem.scss";

const PokeItem = (props) => {
  const [pokeTypes, setPokeTypes] = useState([]);
  const [pokeDescription, setPokeDescription] = useState("");
  const [pokeName, setPokeName] = useState("");
  const [pokeStats, setPokeStats] = useState({});
  const [pokeImage, setPokeImage] = useState(
    `https://pokeres.bastionbot.org/images/pokemon/${props.match.params.id}.png`
  );

  const search = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${props.match.params.id}/`;

    const respuesta = await fetch(url);
    const data = await respuesta.json();

    const description = data.flavor_text_entries.find((flavorEntry) => {
      return flavorEntry.language.name === "en";
    });

    setPokeDescription(description.flavor_text);
  };

  const searchDetails = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${props.match.params.id}/`;

    const respuesta = await fetch(url);
    const data = await respuesta.json();

    const arrType = [];
    data.types.map((type) => {
      arrType.push(type.type.name);
    });

    setPokeTypes(arrType);
    setPokeName(data.name);
  };

  useEffect(() => {
    search();
    searchDetails();
    setPokeImage(
      `https://pokeres.bastionbot.org/images/pokemon/${props.match.params.id}.png`
    );
  }, [props.match.params.id]);

  console.log(pokeImage);

  return (
    <div className="itemContainer">
      <div className={`cardItemContainer ${pokeTypes[0]}`}>
        <p className="itemTitle">{pokeName}</p>
        <div className="pokeImageContainer">
          <img className="pokeImage" src={pokeImage} alt="" />
        </div>
        <span className="pokeDescription">{pokeDescription}</span>
      </div>
    </div>
  );
};

export default PokeItem;