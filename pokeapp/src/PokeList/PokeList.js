import React from "react";
import { useState, useEffect } from "react";
import PokeCard from "../PokeCard/PokeCard";
import "./PokeList.scss";
import { Link } from "react-router-dom";

const PokeList = (props) => {
  const [list, setList] = useState([]);
  let [pageCount, setPageCount] = useState(0);

  const getList = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${
      (props.match.params.id - 1) * 6
    }&limit=6`;
    const response = await fetch(url);
    const data = await response.json();

    setList(data.results);
    console.log(list);
  };

  useEffect(() => {
    getList();
  }, [props.match.params.id]);

  return (
    <div className="listContainer">
      {list.map((pokemon) => {
        return (
          <PokeCard name={pokemon.name} key={pokemon.name} url={pokemon.url} />
        );
      })}
      {props.match.params.id === undefined || props.match.params.id == 1 ? (
        <Link to="/page135" className="arrowLink arrowLeft">
          <button></button>
        </Link>
      ) : (
        <Link
          to={`/page${parseInt(props.match.params.id) - 1}`}
          className="arrowLink arrowLeft"
        >
          <button></button>
        </Link>
      )}
      {props.match.params.id === undefined ? (
        <Link to="/page2" className="arrowLink arrowRight">
          <button></button>
        </Link>
      ) : parseInt(props.match.params.id) >= 135 ? (
        <Link to="/" className="arrowLink arrowRight">
          <button></button>
        </Link>
      ) : (
        <Link
          to={`/page${parseInt(props.match.params.id) + 1}`}
          className="arrowLink arrowRight"
        >
          <button></button>
        </Link>
      )}
    </div>
  );
};

export default PokeList;
