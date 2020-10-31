import React from "react";
import Dog from "./components/Dog";
import Register from "./components/Register";

import "./css/stylish-portfolio.min.css"

const App = () => {
  return (
    <div className="App" id="page-top">
      <header className="App-header">
        <h1>Digital Dogs</h1>
      </header>
      <div className="content">
      <a className="menu-toggle rounded" href="#">
        <i className="fas fa-bars"></i>
      </a>
        <Register />
        <Dog />
      </div>
    </div>
  );
}

export default App;
