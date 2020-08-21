import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Edit <code>src/App.js</code> and save to reload. */}
        <p> HELLO WORLD!</p>
        {/* <Navbar /> */}
        <Routes />
      </header>
    </div>
  );
}

export default App;
