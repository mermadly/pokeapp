import React from "react";
import { useState, useEffect } from "react";
import PokeCard from "../PokeCard/PokeCard";
import "./PokeList.scss";

const PokeList = (props) => {
  const [list, setList] = useState([]);

  const getList = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=9";
    const response = await fetch(url);
    const data = await response.json();

    setList(data.results);
    console.log(list);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="listContainer">
      {list.map((pokemon) => {
        return (
          <PokeCard name={pokemon.name} key={pokemon.name} url={pokemon.url} />
        );
      })}
    </div>
  );
};

export default PokeList;
