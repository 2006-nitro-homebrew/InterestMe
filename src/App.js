import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import Routes from "./routes";

function App() {
  return (
    <MuiThemeProvider>
      <Navbar />
      <div className="App">
        <header className="App-header">
          {/* Edit <code>src/App.js</code> and save to reload. */}
          <p> HELLO WORLD!</p>

          <Routes />
        </header>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
