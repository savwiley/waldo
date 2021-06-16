import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import App from "./App.js";
import PlayGame from "./playgame.js";
import HighScore from "./highscore.js";
import About from "./about.js";

const Routes = () => {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" render={() => <App />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/:difficulty" render={() => <PlayGame />} />
        <Route exact path="/scores/:diffScore" render={() => <HighScore />} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
