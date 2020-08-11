import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import PokeList from "./PokeList/PokeList";
import PokeItem from "./PokeItem/PokeItem";

const App = (props) => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={PokeList} />
          <Route exact path="/card/:id" component={PokeItem} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
