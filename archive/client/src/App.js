import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterDog from "./components/registerDog";
import SearchDogs from "./components/searchDogs";
import ViewDog from "./components/viewDog";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/register">Register your dog</Link>
            </li>
            <li>
              <Link to="/search">Search Registrations</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/register">
            <RegisterDog />
          </Route>
          <Route path="/search">
            <SearchDogs />
          </Route>
          <Route path="/record" component={ViewDog} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
