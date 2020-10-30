import React from "react";
import Dog from "./components/Dog";
import Register from "./components/Register";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Digital Dogs</h1>
      </header>
      <div className="content">
        <Register />
        <Dog />
      </div>
    </div>
  );
}

export default App;
