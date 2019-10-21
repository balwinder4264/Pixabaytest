import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import favorite from "../src/favorite";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./nsvbar";
import Context from "./context";
const Index = () => {
  let fav = [];
  return (
    <Context.Provider value={{ fav: fav }}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/fav" component={favorite} exact />
          <Route />
        </Switch>
      </BrowserRouter>
    </Context.Provider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
