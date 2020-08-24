import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import Routes from "./routes";

function App() {
  return (
    //     <div className="App">
    //       <div className = "Navbar"><Navbar /></div>
    //       <header className="App-header">
    //         {/* Edit <code>src/App.js</code> and save to reload. */}
    //         <p> </p>
    //         <Routes />
    //       </header>
    //     </div>

    <MuiThemeProvider>
      <Navbar />
      <div className="App">
        <header className="App-header">
          {/* Edit <code>src/App.js</code> and save to reload. */}

          <Routes />
        </header>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
