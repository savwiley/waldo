import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import App from "./App.js";
import { playgame as Game } from "./playgame.js";
import { highscore as Scores } from "./highscore.js";

const Routes = () => {

  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" render={() => <App />} />
        <Route exact path="/game" render={() => <Game />} />
        <Route exact path="/scores" render={() => <Scores />} />
      </Switch>
    </HashRouter>
  )
}

export default Routes;