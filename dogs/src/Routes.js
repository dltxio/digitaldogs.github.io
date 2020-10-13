import React from "react";
import { Switch, Route } from "react-router-dom";
import Dog from "./components/Dog";
import Register from "./components/Register";
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/dog" component={Dog} />
    </Switch>
  );
}
