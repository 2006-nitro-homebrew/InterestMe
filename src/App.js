import React from "react";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
// import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        {/* Edit <code>src/App.js</code> and save to reload. */}
        <Routes />
      </header>
    </div>
  );
}

export default App;
