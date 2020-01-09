import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterDog from "./components/registerDog";
import ViewPedigree from "./components/viewPedigree";
import ViewDog from "./components/viewDog";

function App() {
  return (
    <Router>
      <div className="App mx-auto shadow rounded mt-3 pt-3">
        <Switch>
          <Route path="/register">
            <RegisterDog />
          </Route>
          <Route path="/pedigree">
            <ViewPedigree />
          </Route>
          <Route path="/record" component={ViewDog} />
        </Switch>

        <nav className="bottom-nav mt-3 rounded-bottom">
          {/* Style to look like a bottom tab nav bar */}
          <ul className="nav nav-tabs justify-content-center">
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Register your dog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pedigree" className="nav-link">
                Search Registrations
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default App;
